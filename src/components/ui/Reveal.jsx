import { motion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0 }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay }}>{children}</motion.div>;
}
