import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import * as actions from './store/actions'
import { createStore } from "./store/createStore";
import { initiateStore } from "./store/store";
import { taskReducer } from "./store/taskReducer";

// const store = createStore(taskReducer, );
const store = initiateStore();

const App = (params) => {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState);
    });
  }, []);

  const completeTask = (id) => {
    store.dispatch(actions.taskCompleted(id));
  };

  const changeTitle = (id) => {
    store.dispatch(actions.titleChanged(id));
  };

  const deleteTask = (id) => {
    store.dispatch(actions.taskDeleted(id));
  }

  return (
    <>
      <h1>App</h1>
      <ul>
        {state.map((s) => (
          <li key={s.id}>
            <p>{`${s.title} :`}</p>
            <p>{`complete: ${s.completed}`}</p>
            <button onClick={() => completeTask(s.id)}>Complete</button>
            <button onClick={() => changeTitle(s.id)}>change title</button>
            <button onClick={() => deleteTask(s.id)}>delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
