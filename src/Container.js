import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Towards Home Rent', "SBI", 15000, "Completed", "23-07-2021"),
    createData('Towards Home Rent', "SBI", 15000, "Completed", "23-07-2021"),
    createData('Towards Home Rent', "SBI", 15000, "Completed", "23-07-2021"),
    createData('Towards Home Rent', "SBI", 15000, "Completed", "23-07-2021"),
    createData('Towards Home Rent', "SBI", 15000, "Completed", "23-07-2021"),
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 20
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 200,
        borderRadius: 12
    },
    table: {
        minWidth: 700,
    },
}));

function Container() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography variant="h6">
                            State Bank of India
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle1">
                            Current Balance:
                        </Typography>
                        <Typography variant="h4">
                            &#8377; 1,50,000
                        </Typography>
                        <div className="money-line-outline">
                            <div className="money-line-in1"></div>
                        </div>
                        <Link href="#" className="links">
                            Click to view last 5 transactions
                        </Link>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography variant="h6" component="h2">
                            HDFC Bank
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle1">
                            Current Balance:
                        </Typography>
                        <Typography variant="h4">
                            &#8377; 10,000
                        </Typography>
                        <div className="money-line-outline">
                            <div className="money-line-in2"></div>
                        </div>
                        <Link href="#" className="links">
                            Click to view last 5 transactions
                        </Link>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography variant="h6" component="h2">
                            Union Bank
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle1">
                            Current Balance:
                        </Typography>
                        <Typography variant="h4">
                            &#8377; 30,000
                        </Typography>
                        <div className="money-line-outline">
                            <div className="money-line-in3"></div>
                        </div>
                        <Link href="#" className="links">
                            Click to view last 5 transactions
                        </Link>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography variant="h6" component="h2">
                            Canara Bank
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle1">
                            Current Balance:
                        </Typography>
                        <Typography variant="h4">
                            &#8377; 55,000
                        </Typography>
                        <div className="money-line-outline">
                            <div className="money-line-in4"></div>
                        </div>
                        <Link href="#" className="links">
                            Click to view last 5 transactions
                        </Link>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Description</StyledTableCell>
                                    <StyledTableCell align="right">Initiator Bank</StyledTableCell>
                                    <StyledTableCell align="right">Amount</StyledTableCell>
                                    <StyledTableCell align="right">Status</StyledTableCell>
                                    <StyledTableCell align="right">Date / Time</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div >
    );
}

export default Container;