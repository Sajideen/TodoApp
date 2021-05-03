import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  CardActions,
  CardHeader,
  Card,
  makeStyles,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";

import CreateAndEditTodoCard from "../Common/CreateAndEditTodoCard";
import TodoItems from "./TodoItems";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function TodoCard(props) {
  const { text, onSelect, id } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [itemName, setItemName] = React.useState("");
  const [addItem, setAddItem] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOff = () => {
    setAnchorEl(null);
  };

  const listOfItems = () => {
    setAddItem((prevValue) => {
      return [...prevValue, itemName];
    });
    setItemName("");
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "60%",
        alignItems: "center",
        textAlign: "initial",
        padding: "10px",
        flexDirection: "row",
      }}
    >
      <Card
        className={classes.root}
        style={{ padding: 20, height: "auto", width: 700, margin: "50px auto" }}
      >
        <CardHeader
          action={
            <IconButton
              aria-label="settings"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={text}
        />
        <CardContent>
          {addItem.map((value) => {
            return <TodoItems item={value} />;
          })}
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            startIcon={<AddIcon />}
          >
            Add Items
          </Button>
        </CardActions>
      </Card>
      <CreateAndEditTodoCard
        isAddTaskModalOpen={open}
        closeTaskModal={handleClose}
        isModalTitle={"items"}
        inputText={itemName}
        inputHandler={(value) => setItemName(value)}
        addDataHandler={() => console.log('TODO CARD EVENT HANDLER')}
      />
      <div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleOff}
        >
          <MenuItem
            onClick={() => {
              onSelect(id);
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
