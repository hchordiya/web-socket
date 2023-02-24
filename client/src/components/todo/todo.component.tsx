import {
  ColDef,
  GridReadyEvent,
} from "@ag-grid-community/all-modules";
import AgGrid from "../common/ag-grid";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {  useAppSelector } from "../../rtk/hooks/hooks";
import Spinner from "../common/spinner";

const Todo = () => {
  const { spinner } = useAppSelector((state) => state.spinner);
  const { todos } = useAppSelector((state) => state.todo);
  
  const columnDefs: Array<ColDef> = [
    {
      headerName: "TODO ID",
      field: "id",
      sortable: true,
      filter: true,
      sort: "asc",
    },
    {
      headerName: "TODO",
      field: "todo",
      sortable: true,
      filter: true,
    },
  ];

  const handleGridReady = (event: GridReadyEvent) => {
    const { api } = event;
    api.sizeColumnsToFit();
  };

  return (
    <Box sx={{ height: "100%" }}>
      <Box display="flex" alignItems="center" sx={{ width: "100%", m: "16px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Search"
              size="small"
              // value={search}
              // fullWidth
              // onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ m: "16px" }}>
        {spinner ? (
          <Spinner />
        ) : (
          <AgGrid
            rowData={todos}
            columnDefs={columnDefs}
            pagination={true}
            onGridReady={handleGridReady}
            height={"calc(100vh - 200px)"}
            width={"100%"}
          />
        )}
      </Box>
    </Box>
  );
};

export default Todo;
