import { IModalProps } from "@/types/components/modal";
import { motion } from "framer-motion";

export const Modal = ({ isOpen, onClose, children, title }: IModalProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 bg-dark-bg/5 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="bg-dark-card p-6 rounded-lg max-w-md w-full mx-4 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-dark-text text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-dark-text">
            ✕
          </button>
        </div>
        {children}
      </div>
    </motion.div>
  );
};
