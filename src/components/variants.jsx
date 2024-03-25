export const slideUp = {
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    translateY: 20,
  },
};

export const slideRight = {
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      ease: "easeOut",
    },
  },
  hidden: {
    opacity: 0,
    translateX: 50,
  },
};

export const fadeInStagger = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const fadeIn = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export const slideLeft = {
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      ease: "easeOut",
    },
  },
  hidden: {
    opacity: 0,
    translateX: -50,
  },
};

export const navBarHover = {
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    translateX: -40,
  },
};

export const slideLeftSpring = {
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    translateX: -40,
  },
};