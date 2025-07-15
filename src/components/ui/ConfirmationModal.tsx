import { IConfirmationModalProps } from "@/types/components/ConfirmationModal";

export const ConfirmationModal = ({
  message,
  onConfirm,
  onCancel,
}: IConfirmationModalProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Confirmation</h2>
      <p className="mb-4">{message}</p>
      <div className="flex justify-end gap-2">
        {onCancel && (
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
