import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";


const CreateAndEditTodoCard = (props) => {
  const {
    isAddTaskModalOpen,
    closeTaskModal,
    isModalTitle,
    inputText,
    inputHandler,
    addDataHandler,
  } = props;
  //   const [data, setData] = useState("");
  //   const [items, setItems] = useState([]);

  //   const getData = (event) => {
  //     setData(event.target.value);
  //   };
  //   console.log("YOUR DATA", data);

  //   const handleModalData = () => {
  //     setItems((olditems) => {
  //       return [...olditems, items];
  //     });
  //   };
  return (
    <>
      <Dialog
        open={isAddTaskModalOpen}
        onClose={closeTaskModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add {isModalTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            please enter your {isModalTitle} here...
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={isModalTitle}
            type="text"
            value={inputText}
            fullWidth
            onChange={(e) => inputHandler(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeTaskModal} color="primary">
            Cancel
          </Button>
          <Button onClick={addDataHandler} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default CreateAndEditTodoCard;
