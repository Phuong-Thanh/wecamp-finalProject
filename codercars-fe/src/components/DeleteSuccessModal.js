import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


export default function DeleteSuccessModal({ open, handleClose, name }) {
    const handleConfirm = () => {
        handleClose();
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="delete-success-dialog-title"
            aria-describedby="delete-success-dialog-description"
        >
            <DialogTitle id="delete-success-dialog-title">DELETE SUCCESS</DialogTitle>
            <DialogContent>
                <DialogContentText id="delete-success-dialog-description">
                    Delete successfully {name}
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
