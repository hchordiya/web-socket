import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { THomeProps } from "../../interfaces/home.interface";
import TopDashboard from "../topDashboard";
import classes from "./root.styles";

const Root = (props: THomeProps) => {
  return (
    <Box sx={classes.root}>
      <TopDashboard />
      <Outlet />
    </Box>
  );
};

export default Root;
