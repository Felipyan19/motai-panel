import { IModalProps } from "@/types/components/modal";

export const Modal = ({ isOpen, onClose, children, title }: IModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark-bg/5 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-dark-card p-6 rounded-lg max-w-md w-full mx-4 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-dark-text text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-dark-text">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
