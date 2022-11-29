import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import classe from "../index.css";
import Customers from '../components/customers'
import Machines from "../components/machines";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "rgba(0,0,0,0)",
}));
function DashboardPage() {
  return (
    <Grid className={classe.mainContet} container spacing={1} columns={4}>
      <Grid item xs={4} md={2} lg={1}>
        <Item>
          <Customers />
          <Machines />
        </Item>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Item sx={{height: '100%'}}>Full width column</Item>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
