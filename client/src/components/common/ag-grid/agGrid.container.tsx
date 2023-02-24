import { TAgGridProp } from "../../../interfaces/agGrid.interface";
import AgGrid from "./agGrid.component";

const AgGridContainer = (props: TAgGridProp | any) => {
  return <AgGrid {...props} />;
};

export default AgGridContainer;
