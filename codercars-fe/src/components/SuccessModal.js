import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


export default function SuccessModal({ open, handleClose, mode }) {
    const handleConfirm = () => {
        handleClose();
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="success-dialog-title"
            aria-describedby="success-dialog-description"
        >
            <DialogTitle id="success-dialog-title">{mode === "create" ? "CREATE SUCCESS" : "EDIT SUCCESS"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="success-dialog-description">
                    {mode === "create" ? "Create new car successfully" : "Edit car succesfully"}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirm} autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}
