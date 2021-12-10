import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    coffeeName: props.coffeeName,
    coffeeDescription: props.coffeeDescription,
    coffeePrice: props.coffeePrice,
  });

  const handleEditValues = () => {
    Axios.put("http://localhost:3001/api/edit", {
      id: editValues.id,
      coffeeName: editValues.coffeeName,
      coffeeDescription: editValues.coffeeDescription,
      coffeePrice: editValues.coffeePrice,
    });
    handleClose();
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) => {
    setEditValues((preValues) => ({
      ...preValues,
      [value.target.id]: value.target.value,
    }));
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Editar</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Coffee Name"
          defaultValue={props.coffeeName}
          type="text"
          fullWidth
          onChange={handleChangeValues}
        />
        <TextField
          autoFocus
          margin="dense"
          id="Description"
          label="Description"
          defaultValue={props.coffeeDescription}
          type="text"
          fullWidth
          onChange={handleChangeValues}
        />
        <TextField
          autoFocus
          margin="dense"
          id="Price"
          label="Price"
          defaultValue={props.coffeePrice}
          type="text"
          fullWidth
          onChange={handleChangeValues}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button color="primary">Excluir</Button>
        <Button color="primary" onClick={handleEditValues}>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
