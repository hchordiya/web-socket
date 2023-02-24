export type TModalProp = {
  title: string;
  save: () => void;
  handleClose: () => void;
  open: boolean;
  saveButtonTitle?: string;
  closeButtonTitle?: string;
};
