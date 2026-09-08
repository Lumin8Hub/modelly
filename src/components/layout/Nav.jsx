import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { nav } from "../../content/nav";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";

function NavGroup({ item, mobile = false, onClose }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (mobile) return undefined;
    const close = (event) => { if (ref.current && !ref.current.contains(event.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [mobile]);

  const toggle = () => setOpen((value) => !value);
  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      buttonRef.current?.focus();
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return <div ref={ref} className={mobile ? "border-b border-rule py-2" : "relative"}>
    <button ref={buttonRef} type="button" aria-haspopup="menu" aria-expanded={open} onClick={toggle} onKeyDown={onKeyDown} className={mobile ? "flex min-h-11 w-full items-center justify-between py-2 text-left text-base font-semibold text-ink" : "inline-flex min-h-11 max-w-[230px] items-center gap-1 px-2 text-[13px] leading-5 text-text-muted hover:text-ink"}>
      <span>{item.label}</span><ChevronDown size={15} className={open ? "rotate-180" : ""} aria-hidden="true" />
    </button>
    {open && <div className={mobile ? "grid gap-1 pb-3 pl-3" : "absolute left-0 top-full z-30 min-w-60 border border-rule bg-white p-2 shadow-lg"} role="menu">
      {item.children.map((child) => <NavLink key={child.to} to={child.to} role="menuitem" onClick={() => { setOpen(false); onClose?.(); }} className={({ isActive }) => `${mobile ? "block py-2 text-sm" : "block px-3 py-2 text-sm hover:bg-paper"} ${isActive ? "font-semibold text-ink" : "text-text-muted"}`}>{child.label}</NavLink>)}
    </div>}
  </div>;
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur">
    <div className="mx-auto flex max-w-container items-center justify-between px-5 md:px-10">
      <Logo />
      <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
        {nav.map((item) => item.children ? <NavGroup key={item.label} item={item} /> : item.cta ? <Button key={item.to} to={item.to} className="ml-1">{item.label}</Button> : <NavLink key={item.to} to={item.to} className={({ isActive }) => `inline-flex min-h-11 items-center px-2 text-[13px] leading-5 ${isActive ? "font-semibold text-ink" : "text-text-muted hover:text-ink"}`}>{item.label}</NavLink>)}
      </nav>
      <button type="button" className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-semibold text-ink xl:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>{mobileOpen ? <X size={19} aria-hidden="true" /> : <MenuIcon size={19} aria-hidden="true" />}<span>Menu</span></button>
    </div>
    {mobileOpen && <div className="absolute left-0 right-0 top-full max-h-[calc(100vh-73px)] overflow-auto border-b border-rule bg-paper px-5 pb-5 xl:hidden">
      <nav aria-label="Mobile navigation" className="grid">{nav.map((item) => item.children ? <NavGroup key={item.label} item={item} mobile onClose={() => setMobileOpen(false)} /> : item.cta ? <Button key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="mt-4">{item.label}</Button> : <NavLink key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="block border-b border-rule py-3 text-base font-semibold text-ink">{item.label}</NavLink>)}</nav>
    </div>}
  </header>;
}
