import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useContext } from "react";
import "./App.css";
import Starchips from "./components/Starchips";
import Layout from "./containers/Layout";
import StarshipContextProvider, {
  StarshipContext,
} from "./context/StarshipContext";
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
  const { manufacturers, starships, changeManufacturer } = useContext(
    StarshipContext
  );

  const classes = useStyles();
  const change = (evt) => {
    const { value: manufacturer } = evt.target;
    changeManufacturer(manufacturer);
  };

  return (
    <Layout>
      <FormControl className={classes.formControl}>
        <InputLabel> Manufacturers</InputLabel>
        <Select onChange={change}>
          {manufacturers.map((m) => (
            <MenuItem key={convertToCamelCase(m)} value={m}>
              {m}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Starchips data={starships} />
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
