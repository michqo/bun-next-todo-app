import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";

export default function Transition({ children }): JSX.Element {
  const { asPath } = useRouter();
  const variants = {
    hidden: { opacity: 0, x: 0, y: -180 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -35 },
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <motion.main
        key={asPath}
        initial="hidden"
        variants={variants}
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
    </div>
  );
}
