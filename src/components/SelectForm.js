import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { StarshipContext } from "../context/StarshipContext";
import { convertToCamelCase } from "../utils";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function SelectForm({ classes }) {
  const { manufacturers, manufacturer, changeManufacturer } = useContext(
    StarshipContext
  );
  const change = (evt) => {
    const { value: manufacturer } = evt.target;
    changeManufacturer(manufacturer);
  };

  return (
    <FormControl className={classes.formControl} fullWidth>
      <InputLabel> Manufacturers</InputLabel>
      <Select value={manufacturer} onChange={change}>
        {manufacturers.map((m) => (
          <MenuItem key={convertToCamelCase(m)} value={m}>
            {m}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default withStyles(useStyles)(SelectForm);
