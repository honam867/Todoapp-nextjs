import React, { useState } from "react";
import Image from "next/image";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TodoItem from "./TodDoItem";
const useStyle = makeStyles((theme) => ({
  todo: {
    maxWidth: 400,
    margin: "auto",
    marginTop: 40,
    textAlign: "center",
  },
  logo: {
    left: "unset !important",
  },
  srOnly: {
    width: 0,
    height: 0,
    position: "absolute",
    left: "-9999px",
    overflow: "hidden",
  },
  paper: {
    width: "100%",
  },
  form: {
    padding: theme.spacing(2),
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginBottom: 0,
    borderRadius: "0 0 4px 4px",
  },
}));
const ToDo = () => {
  const classes = useStyle();
  const initialState = [
    {
      id: "vnode",
      text: "A simple initital todo",
      completed: false,
    },
  ];
  // Hooks : Use state nhận đầu vào là giá trị khởi tạo của 1 state và trả ra là 1 mảng gòm có 2 phần tử
  // Phần tử đầu tiên là state hiện tại, phần tử thứ 2 là function dùng để update state.
  const [todos, setTodos] = useState(initialState);
  const [text, setText] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    trimmedText && addTodo(trimmedText);
    setText("");
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const addTodo = (text) => {
    const todo = {
      id: Math.random().toString(36).substring(2),
      text,
      completed: false,
    };
    setTodos([...todos, todo]);
  };
  const completedTodos = todos.filter((todo) => todo.completed);
  const updateTodo = (todo) => {
    const updatedTodos = todos.map((v) => (v.id === todo.id ? todo : v));
    setTodos(updatedTodos);
  };
  const removeTodo = (todo) => {
    const filteredTodos = todos.filter((v) => v !== todo);
    setTodos(filteredTodos);
  };
  return (
    <>
      <Grid
        container
        className={classes.todo}
        justify="center"
        direction="column"
      >
        <header>
          <Image
            className={classes.logo}
            src="/static/img/android-chrome-192x192.png"
            alt="Next Simple Starter"
            width="192"
            height="192"
          />
        </header>
        <Paper component="main" className={classes.paper} elevation={3}>
          <form onSubmit={handleAddTodo} className={classes.form}>
            <TextField
              fullWidth
              value={text}
              margin="normal"
              label="What must be done?"
              onChange={handleTextChange}
              inputProps={{ "aria-label": "What must be done?" }}
            />
            <button className={classes.srOnly}> Submit Todo </button>
            {!!todos.length && (
              <Grid container justify="space-between">
                <Grid item>Total: {todos.length}</Grid>
                <Grid item>Completed: {completedTodos.length}</Grid>
              </Grid>
            )}
            <ul className={classes.list}>
              {todos.map((todo, i) => (
                <TodoItem
                  key={i}
                  todo={todo}
                  updateTodo={updateTodo}
                  removeTodo={removeTodo}
                />
              ))}
            </ul>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default ToDo;
