import {Button, Dialog, DialogActions, DialogTitle, makeStyles, TextField} from "@material-ui/core";
import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    },
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width: 400,
        height: 200
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    text__field: {margin: 20},
    button: {
        color: theme.palette.common.white,
        fontSize: 14,
        padding: 20
    },
}));

const ModifyDialog = props => {
    const {open, message, onClose,} = props;

    const classes = useStyles();

    const [currentText, setCurrentText] = useState(message.text);
    useEffect(() => setCurrentText(message.text), [message]);

    return (
        <Dialog className={classes.root} open={open}>

            <DialogTitle id="form-dialog-title">
                수정하실 주문 내용을 입력해주세요!
            </DialogTitle>
            <TextField
                variant="outlined"
                value={currentText}
                onChange={(event) => {
                    setCurrentText(event.target.value);
                }}
                onKeyDown={({key}) => {
                    if (key === "Enter") {
                        onClose(true, currentText);
                    }
                }}/>
            <DialogActions>
                <Button
                    color="primary"
                    onClick={() => onClose(true, currentText)}>
                    취소
                </Button>
                <Button
                    color="secondary"
                    onClick={() => onClose(false, "")}>
                    변경
                </Button>
            </DialogActions>

        </Dialog>
    );
};

ModifyDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.shape({
        text: PropTypes.string.isRequired,
    }),
    onClose: PropTypes.func.isRequired,
};

export default ModifyDialog;