import { Box, Tabs, Tab } from "@mui/material";
import { TTopDashboardProps } from "../../interfaces/topDashboard.interface";
import { TOP_DASHBOARD } from "../../utils/constants/tab.constants";
import classes from "./topDashboard.styles";
const TopDashboard = (props: TTopDashboardProps) => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.tab}>
        <Tabs
          value={props.tabValue}
          onChange={props.onChange}
          aria-label="top-dashboard-label"
        >
          {TOP_DASHBOARD.map(({ label, value }) => (
            <Tab value={value} label={label} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default TopDashboard;
