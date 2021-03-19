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
import StarshipContextProvider from "./context/StarshipContext";
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
function AppComponent() {
  const { manufactures, starchips, loading } = useFetch();
  const classes = useStyles();

  return (
    <Layout>
      <FormControl className={classes.formControl}>
        <InputLabel> Manufacturers</InputLabel>
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

const App = () => {
  return (
    <StarshipContextProvider>
      <AppComponent />
    </StarshipContextProvider>
  );
};

export default App;
