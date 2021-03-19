import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import React, { useMemo, useState } from "react";
import { convertToCamelCase } from "../utils";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
});

const Starchips = ({ data = [], classes }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (event) => {
    const {
      target: { value },
    } = event;
    setRowsPerPage(value);
  };
  const tr = (starship) => {
    const { name, manufacturer, model, crew, passengers } = starship;
    return (
      <TableRow key={convertToCamelCase(name)}>
        <TableCell component="th" scope="row">
          {manufacturer}
        </TableCell>
        <TableCell align="right">{name}</TableCell>
        <TableCell align="right">{model}</TableCell>
        <TableCell align="right">{crew}</TableCell>
        <TableCell align="right">{passengers}</TableCell>
      </TableRow>
    );
  };

  const starchips = useMemo(() => {
    return data
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map(tr);
  }, [data, page, rowsPerPage]);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Manufacturer</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Crew</TableCell>
            <TableCell align="right">Passengers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{starchips}</TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page",
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page",
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default withStyles(styles)(Starchips);
