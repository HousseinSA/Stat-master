import { motion } from "framer-motion";
const TitleAnimation = ({ children }) => {
  //  title variants
  const titleVariants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.h3
      variants={titleVariants}
      initial={"initial"}
      whileInView={"animate"}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.h3>
  );
};

export default TitleAnimation;
