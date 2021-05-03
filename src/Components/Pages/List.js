import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import TodoCard from "../Common/TodoCard";
import CreateAndEditTodoCard from "../Common/CreateAndEditTodoCard";
import {connect, useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {addTask} from '../../Services/action/action'
import cuid from 'cuid'


const ListPage = (props) => {
  const [open, setOpen] = React.useState(false);
  const [taskName, setTaskName] = React.useState("");
   const dispatch = useDispatch();
   const state = useSelector(state => state)
   console.log("STATE==>>",state);
  // const [items, setItems] = React.useState([]);
  
  const listOfTasks = () => {
   
    props.dispatch(addTask(taskName));
console.log("yourDATA==>>", taskName)
    setTaskName("");
    setOpen(false);
  };

  // const editTask = (id, value) => {
  //   setOpen(true);
  //   setItems((prev) => prev.map((item) => (item.id === id ? item : value)));
  // };

  // const deleteTask = (id) => {
  //   console.log("deleted");
  //   setItems((prevValue) => {
  //     return prevValue.filter((arrElem, index) => {
  //       return index !== id;
  //     });
  //   });
  // };
  return (
    <div
      style={{
        margin: "auto",
        width: "60%",
        alignItems: "center",
        textAlign: "center",
        padding: "10px",
        flexDirection: "row",
      }}
    >
      {/* {taskObj.map((value, index) => {
        return (
          <TodoCard
            key={index}
            id={index}
            text={value}
            // onSelect={deleteTask}
            // handleEditModal={editTask}
          />
        );
      })} */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        Add new task
      </Button>
      <CreateAndEditTodoCard
        isAddTaskModalOpen={open}
        closeTaskModal={() => setOpen(false)}
        isModalTitle={"task"}
        inputText={taskName}
        inputHandler={(value) => setTaskName(value)}
        addDataHandler={listOfTasks}
      />
    </div>
  );
};

export default connect()(ListPage);
