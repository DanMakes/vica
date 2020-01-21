import  React  from 'react';
//Elemetos de Material UI
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';

import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    height: 200,
    width: 530,
    border: 4,
    marginBottom: 100,
  },
  TableContainer:{


  }
});
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

export default function FormaPago() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Forma de Pago</StyledTableCell>
            <StyledTableCell>Subtotal</StyledTableCell>
            <StyledTableCell align="left">Total $</StyledTableCell>
          </TableRow>
        </TableHead>
        </Table>
      </TableContainer>
    );
  }
