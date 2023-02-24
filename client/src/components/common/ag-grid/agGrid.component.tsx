import Box from "@mui/material/Box";
import { AgGridReact } from "ag-grid-react";
import { TAgGridProp } from "../../../interfaces/agGrid.interface";

const AgGrid = (props: TAgGridProp) => {
  return (
    <Box
      className="ag-theme-alpine"
      style={{
        height: props.height || "calc(100vh - 200px)",
        width: props.width || "100%",
      }}
    >
      <AgGridReact {...props} />;
    </Box>
  );
};

export default AgGrid;
