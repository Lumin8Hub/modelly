import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { nav } from "../../content/nav";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";

function NavGroup({ item, mobile = false, onClose }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const close = (event) => { if (ref.current && !ref.current.contains(event.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  if (mobile) return <div className="border-b border-rule py-3">
    <div className="font-mono text-[11px] uppercase tracking-wider text-text-muted">{item.label}</div>
    <div className="mt-2 grid gap-2 pl-3">{item.children.map((child) => <NavLink key={child.to} to={child.to} onClick={onClose} className={({ isActive }) => `text-sm ${isActive ? "font-semibold text-ink" : "text-text-muted"}`}>{child.label}</NavLink>)}</div>
  </div>;
  return <div ref={ref} className="relative">
    <button type="button" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)} className="inline-flex items-center gap-1 px-3 py-5 text-sm text-text-muted hover:text-ink">{item.label}<ChevronDown size={14} /></button>
    {open && <div className="absolute left-0 top-full z-30 min-w-60 border border-rule bg-paper p-2 shadow-lg">
      {item.children.map((child) => <NavLink key={child.to} to={child.to} onClick={() => setOpen(false)} className={({ isActive }) => `block px-3 py-2 text-sm hover:bg-paper-elevated ${isActive ? "font-semibold text-ink" : "text-text-muted"}`}>{child.label}</NavLink>)}
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
      <nav className="hidden items-center md:flex">{nav.map((item) => item.children ? <NavGroup key={item.label} item={item} /> : item.cta ? <Button key={item.to} to={item.to} className="ml-3 py-2.5">{item.label}</Button> : <NavLink key={item.to} to={item.to} className={({ isActive }) => `px-3 py-5 text-sm ${isActive ? "font-semibold text-ink" : "text-text-muted hover:text-ink"}`}>{item.label}</NavLink>)}</nav>
      <button type="button" className="p-2 md:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
    </div>
    {mobileOpen && <div className="absolute left-0 right-0 top-full max-h-[calc(100vh-73px)] overflow-auto border-b border-rule bg-paper px-5 pb-5 md:hidden">
      {nav.map((item) => item.children ? <NavGroup key={item.label} item={item} mobile onClose={() => setMobileOpen(false)} /> : <NavLink key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="block border-b border-rule py-3 text-sm">{item.label}</NavLink>)}
    </div>}
  </header>;
}
