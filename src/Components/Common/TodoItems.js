import React from "react";
import { Checkbox, Grid, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const TodoItems = (props) => {
  const { item } = props;
  const [line, setLine] = React.useState(false);
  const cutLine = () => {
    setLine(true);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={2}>
          <Checkbox
            onClick={cutLine}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ textDecoration: line ? "line-through" : "none" }}
          >
            {item}
          </Typography>
        </Grid>
        <EditIcon />
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
};
export default TodoItems;
