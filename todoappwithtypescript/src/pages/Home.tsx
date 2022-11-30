import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://6351827ddfe45bbd55c22952.mockapi.io/todos";

interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="main">
      <InputForm />
      <TodoList />
    </div>
  );
};

export default Home;
