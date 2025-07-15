export interface IConfirmationModalProps {
    message: string;
    onConfirm: () => void;
    onCancel?: () => void;
  }