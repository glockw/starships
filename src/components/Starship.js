import { TableCell, TableRow } from "@material-ui/core";

export default function Starship({
  name,
  manufacturer,
  model,
  crew,
  passengers,
}) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {manufacturer}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{model}</TableCell>
      <TableCell align="right">{crew}</TableCell>
      <TableCell align="right">{passengers}</TableCell>
    </TableRow>
  );
}
