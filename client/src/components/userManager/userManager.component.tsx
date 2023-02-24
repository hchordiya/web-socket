import {
  CellClassParams,
  ColDef,
  GridReadyEvent,
  ValueFormatterParams,
} from "@ag-grid-community/all-modules";
import { IUserManagerProp } from "../../interfaces/userManager.interface";
import AgGrid from "../common/ag-grid";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import Spinner from "../common/spinner";
import NavTopBar from "../common/appBar/appBar.component";
import { updateEmployeeAsync } from "../../rtk/thunks/userManager.thunks";

const UserManager = ({
  setSearch,
  rows,
  search,
  handleFilters,
}: IUserManagerProp) => {
  const { spinner } = useAppSelector((state) => state.spinner);
  const { users } = useAppSelector((state) => state.userManager);

  const dispatch = useAppDispatch();
  const checkedIn = rows?.filter((r) => r.hasCheckedIn === true).length;
  const columnDefs: Array<ColDef> = [
    {
      headerName: "EMP ID",
      field: "employeeId",
      sortable: true,
      filter: true,
    },
    {
      headerName: "EMPLOYEE NAME",
      field: "name",
      sortable: true,
      filter: true,
      sort: "asc",
    },
    {
      headerName: "EMAIL",
      field: "email",
      sortable: true,
      filter: true,
    },
    {
      headerName: "LOCATION",
      field: "location",
    },

    {
      headerName: "CHECKED IN",
      field: "hasCheckedIn",
      sortable: true,
      filter: true,
      editable: true,

      valueFormatter: (params: ValueFormatterParams) =>
        params.data.hasCheckedIn ? "Yes" : "No",
      cellEditor: (params: CellClassParams) => {
        return (
          <Autocomplete
            limitTags={2}
            size="small"
            sx={{ width: "100%" }}
            id="checked-in-dropdown"
            options={["Yes", "No"]}
            getOptionLabel={(option) => option}
            onChange={(_, value) => {
              dispatch(
                updateEmployeeAsync([
                  {
                    employeeId: params.data?.employeeId,
                    email: params.data?.email,
                    hasCheckedIn: value === "Yes" ? true : false,
                  },
                ])
              );
              setSearch("");
            }}
            value={params.data.hasCheckedIn ? "Yes" : "No"}
            renderInput={(params) => (
              <TextField
                sx={{ width: "100%" }}
                {...params}
                placeholder="Favorites"
              />
            )}
          />
        );
      },
    },
  ];

  const handleGridReady = (event: GridReadyEvent) => {
    const { api } = event;
    api.sizeColumnsToFit();
  };

  return (
    <Box sx={{ height: "100%" }}>
      <NavTopBar />
      <Box display="flex" alignItems="center" sx={{ width: "100%", m: "16px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Search"
              size="small"
              value={search}
              // fullWidth
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid container item xs={6} spacing={2}>
            <Grid item xs={5}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => {
                  handleFilters("all");
                }}
              >
                All ({users?.length})
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => {
                  handleFilters("checkedIn");
                }}
              >
                Checked In ({checkedIn})
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ m: "16px" }}>
        {spinner ? (
          <Spinner />
        ) : (
          <AgGrid
            rowData={rows}
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

export default UserManager;
