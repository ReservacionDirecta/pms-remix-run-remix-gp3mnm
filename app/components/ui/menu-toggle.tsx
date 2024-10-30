import { motion } from "framer-motion";

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuToggle({ isOpen, onClick }: MenuToggleProps) {
  return (
    <button
      onClick={onClick}
      className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle menu"
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="flex flex-col items-center justify-center w-6 h-6"
      >
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 6 },
          }}
          className="w-5 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1.5 transform origin-center"
        />
        <motion.span
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          className="w-5 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1.5"
        />
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -6 },
          }}
          className="w-5 h-0.5 bg-gray-600 dark:bg-gray-300 transform origin-center"
        />
      </motion.div>
    </button>
  );
} 