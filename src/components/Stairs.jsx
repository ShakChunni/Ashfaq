import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
    opacity: 0,
  },
  animate: {
    top: "100%",
    opacity: 1,
  },
  exit: {
    top: ["100%", "0%"],
    opacity: 0,
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-gradient-to-r from-purple-500 to-purple-700 relative shadow-lg rounded-lg"
        />
      ))}
    </>
  );
};

export default Stairs;
