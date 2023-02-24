import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { clearSnackBar } from "../../../rtk/features/snackBarSlice";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/hooks";

const SnackBarContainer = () => {
  const { message, variant } = useAppSelector(
    (state) => state.snackBar.snackBar
  );
  const dispatch=useAppDispatch()
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (message.length && variant) {
      enqueueSnackbar(message, { variant });
      dispatch(clearSnackBar())
    }
  }, [dispatch, enqueueSnackbar, message, variant]);

  return null;
};

export default SnackBarContainer;
