import { motion } from "framer-motion";

export function AnnouncementBar() {
  return (
    <div className="bg-foreground text-background py-2 text-center text-xs tracking-widest uppercase relative z-50">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Free shipping on orders over $75 | Custom orders welcome
      </motion.p>
    </div>
  );
}
