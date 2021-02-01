import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import * as PropTypes from "prop-types";
import {Column} from "simple-flexbox";
import {useQuery} from "@apollo/react-hooks";
import {TaskQuery} from "../../../graphql/query";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {maxWidth: 300},
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
    },
    background: {
        backgroundColor: 'rgba(246,244,244,0.9)',
        padding: "45px 45px 45px 45px",
        marginTop: "20px"
    },
    border: {
        backgroundColor: "whitesmoke",
        fontSize: '15px !important',
        fontWeight: "600",
        textAlign: "center",
        border: `5px solid rgb(0,0,0,0)`,
        borderRadius: 5,
        color: '#373a47',
        width: "100%",
        padding: "10px 10px 10px 10px",
        marginBottom: "20px"
    },
}));

export default function OrderBoard(props) {

    const classes = useStyles();
    const {onChange} = props;
    const [contents, setContents] = useState("");

    const {data} = useQuery(TaskQuery);
    useEffect(() => {
        if (data) {
            setContents(data.tasks);
        }
    }, [data]);

    return (
        <Column className={classes.background}>


            {contents && contents.map((content) => (
                <span role="img" aria-label="clap" className={classes.border}
                      key={content}>👏  오늘은 {content.creater}님이 {content.title} 기념으로 커피 쏩니다! 👏</span>
            ))}


            <div className={classes.root}>

                <Grid container spacing={3} horizontal='center'
                      breakpoints={{300: classes.itemContainerMobile}}>

                    <Grid item xs={3}>

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
                                        onClick={(_) => onChange("Hot 아메리카노")}
                                    >
                                        Hot

                                    </Button>
                                    <Button
                                        type='submit'
                                        color='primary'
                                        onClick={(_) => onChange("Ice 아메리카노")}
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
                                        height="200"
                                        className={classes.media}
                                        image="https://images.unsplash.com/photo-1556484245-2c765becb8eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                                        title="카페라떼"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            카페라떼
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        type='submit'
                                        color='secondary'
                                        onClick={(_) => onChange("Hot 카페라떼")}
                                    >
                                        Hot

                                    </Button>

                                    <Button
                                        type='submit'
                                        color='primary'
                                        onClick={(_) => onChange("Ice 카페라떼")}
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
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        type='submit'
                                        color='secondary'
                                        onClick={(_) => onChange("Hot 바닐라라떼")}
                                    >
                                        Hot

                                    </Button>

                                    <Button
                                        type='submit'
                                        color='primary'
                                        onClick={(_) => onChange("Ice 바닐라라떼")}
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
                                        onClick={(_) => onChange("Hot 카페모카")}
                                    >
                                        Hot

                                    </Button>

                                    <Button
                                        type='submit'
                                        color='primary'
                                        onClick={(_) => onChange("Ice 카페모카")}
                                    >
                                        Ice

                                    </Button>
                                </CardActions>
                            </Card>
                        </Paper>

                    </Grid>

                </Grid>
            </div>
        </Column>

    );
}

OrderBoard.propTypes = {
    onChange: PropTypes.func
}