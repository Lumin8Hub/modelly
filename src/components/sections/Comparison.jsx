import { Check, X } from "lucide-react";
import { comparison } from "../../content/comparison";

export function Comparison() {
  return <div className="mt-8 overflow-hidden border-y border-rule"><div className="hidden grid-cols-2 md:grid"><div className="border-r border-rule p-5 font-display text-2xl">Today, in your spreadsheets</div><div className="p-5 font-display text-2xl">With Modelly</div></div>{comparison.map(([left, right]) => <div key={left} className="grid border-t border-rule md:grid-cols-2"><div className="border-r border-rule p-5 text-sm leading-6 text-text-muted"><span className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-text-muted md:hidden">Today, in your spreadsheets</span><span className="mr-2 inline-flex align-middle text-coral"><X size={16} /></span>{left}</div><div className="p-5 text-sm leading-6"><span className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-text-muted md:hidden">With Modelly</span><span className="mr-2 inline-flex align-middle text-teal"><Check size={16} /></span>{right}</div></div>)}</div>;
}
