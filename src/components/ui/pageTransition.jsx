"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const pageTransition = ({ children }) => {
  const usePathname = usePathname();

  return (
    <AnimatePresence>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {" "}
        </motion.div>

        {children}
      </div>
    </AnimatePresence>
  );
};

export default pageTransition;
