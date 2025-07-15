import { IConfirmationModalProps } from "@/types/components/ConfirmationModal";

export const ConfirmationModal = ({
  message,
  onConfirm,
  onCancel,
}: IConfirmationModalProps) => {
  return (
    <div>
      <p className="text-dark-text text-lg font-bold mb-4">{message}</p>
      <div className="flex justify-end gap-2">
        {onCancel && (
          <button
            className="bg-gray-500 text-dark-text px-4 py-2 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
        <button
          className="bg-dark-button text-dark-text px-4 py-2 rounded"
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
