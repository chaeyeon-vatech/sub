import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {useTheme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {maxWidth: 300},
    color: {
        brown: "#6d4c41"
    },
    containerMobile: {
        padding: '24px 32px 12px 32px !important',
        cursor: "default"
    },
    itemContainerMobile: {
        marginLeft: -30,
        marginRight: -30,
        paddingLeft: 30,
        paddingRight: 30
    },
    media: {
        cursor: "default"
    },
    button: {
        marginLeft: "40px",
        fontSize: "20px"
    }
}));

export default function OrderBoard(props) {

    const {onChange} = props;
    const theme = useTheme();
    const classes = useStyles({theme});

    return (


        <div className={classes.root}>

            <Grid container spacing={3} flexGrow={1} horizontal='center'
                  breakpoints={{300: classes.itemContainerMobile}}>

                <Grid item xs={3} flexGrow={3}
                      flexBasis='350px'>

                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    className={classes.media}
                                    image="https://images.unsplash.com/photo-1593231269103-6667d6905882?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
                                    title="아메리카노"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        아메리카노
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>

                                <Button
                                    type='submit'
                                    color='secondary'
                                    onClick={(_, value) => onChange(value)}
                                    value="Hot Americano"
                                    // color={hi.color}
                                    // onClick={create}>
                                    // {hi.label}
                                >
                                    Hot

                                </Button>

                                <Button
                                    type='submit'
                                    color='primary'
                                    // color={hi.color}
                                    // onClick={create}>
                                    // {hi.label}
                                >
                                    Ice

                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3} flexGrow={3}
                      flexBasis='350px'>

                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    className={classes.media}
                                    image="https://images.unsplash.com/photo-1556484245-2c765becb8eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                                    title="카페라떼"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        카페라떼
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    type='submit'
                                    color='secondary'
                                >
                                    Hot

                                </Button>

                                <Button
                                    type='submit'
                                    color='primary'
                                >
                                    Ice

                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3} flexGrow={3}
                      flexBasis='350px'>
                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="바닐라라떼"
                                    height="200"
                                    className={classes.media}
                                    image="https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
                                    title="바닐라라떼"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        바닐라라떼
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    type='submit'
                                    color='secondary'
                                >
                                    Hot

                                </Button>

                                <Button
                                    type='submit'
                                    color='primary'
                                >
                                    Ice

                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="카페 모카"
                                    className={classes.media}
                                    height="200"
                                    image="https://images.unsplash.com/photo-1523247140972-52cc3cdd2715?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        카페 모카
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    type='submit'
                                    color='secondary'
                                    // color={hi.color}
                                    // onClick={create}>
                                    // {hi.label}
                                >
                                    Hot

                                </Button>

                                <Button
                                    type='submit'
                                    color='primary'
                                    // color={hi.color}
                                    // onClick={create}>
                                    // {hi.label}
                                >
                                    Ice

                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>

                </Grid>

            </Grid>
        </div>

    );
}

OrderBoard.propTypes = {
    onChange: PropTypes.func
}