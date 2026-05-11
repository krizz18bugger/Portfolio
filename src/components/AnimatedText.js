import { motion } from "framer-motion";

const quote = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: { delay: 0.5, staggerChildren: 0.08 },
  },
};

const singleWord = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <motion.h1
        className={className}
        variants={quote}
        initial="initial"
        animate="animate"
        style={{
          fontSize: "clamp(2rem, 5vw, 4rem)",
          fontWeight: 800,
          lineHeight: 1.15,
          display: "flex",
          flexWrap: "wrap",
          gap: "0.3rem",
        }}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            variants={singleWord}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
