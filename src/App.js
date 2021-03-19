import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import "./App.css";
import Starchips from "./components/Starchips";
import Layout from "./containers/Layout";
import useFetch from "./hooks/useFetch";
import { convertToCamelCase } from "./utils";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function App() {
  const { manufactures, starchips, loading } = useFetch({ id: 0 });
  const classes = useStyles();

  return (
    <Layout>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"> Manufacturers</InputLabel>
        <Select>
          {manufactures.map((m) => (
            <MenuItem key={convertToCamelCase(m)} value={m}>
              {m}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Starchips data={starchips} />
    </Layout>
  );
}

export default App;
