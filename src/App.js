import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import TodoForm from "./components/ToDoForm/TodoForm";
import TodoList from "./components/ToDoList/TodoList";
import PostList from "./components/PostList/PostList";
import Pagination from "./components/Pagination/Pagination";
import queryString from "query-string";
import PostFilterForm from "./components/PostFilterForm/PostFilterForm";
import Clock from "./components/Clock/Clock";
import Clock2 from "./components/Clock/Clock2";
import MagicBox from "./components/MagicBox/MagicBox";

function App() {
  function handleTodoFormSubmit(formValues) {
    console.log("Form submit: ", formValues);
    const listClone = [...todoList];
    const item = { id: listClone.length + 1, title: formValues.title };
    listClone.push(item);
    setTodoList(listClone);
  }

  const [todoList, setTodoList] = useState(() => {
    const initData =
      [
        { id: 1, title: "Tieu de so 1" },
        { id: 2, title: "Tieu de so 2" },
        { id: 3, title: "Tieu de so 3" },
      ] || [];
    return initData;
  });
  function handleTodoItemClick(item) {
    console.log(item);
    const index = todoList.findIndex((x) => x.id === item.id);
    if (index < 0) return;

    //clone mang
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1); //remove item khoi list
    setTodoList(newTodoList); //cap nhat todolist theo mang moi sau khi da remove
  }

  const [postList, setPostList] = useState([]);
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });
  useEffect(() => {
    async function fetchPostList() {
      try {
        // chay lenh install pakage de chuyen doi object -> chuoi param &: npm i --save query-string
        // va import: import queryString from "query-string";
        const paramString = queryString.stringify(filters);
        //dung param tren link thi fai de trong dau ``
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        console.log(responseJson);
        const { data, pagination } = responseJson;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Co loi xay ra : ", error.message);
      }
    }
    fetchPostList();
    return () => {};
  }, [filters]); //[]: danh dau chay dung 1 lan

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 15,
    title_like: "quis",
  });
  function handlePageChange(newPage) {
    console.log("new page: ", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFilterChange(newFilters) {
    console.log(newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }
  const [showClock, setShowClock] = useState(true);
  function onClickShowClock() {
    setShowClock(!showClock);
  }
  return (
    <div className="App">
      {showClock && <Clock />}

      {showClock && <Clock2 />}
      <button onClick={onClickShowClock}>
        {showClock ? "Hide Clock" : "Show Clock"}
      </button>

      <MagicBox />
      <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoItemClick} /> */}
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <ColorBox />
    </div>
  );
}

export default App;
