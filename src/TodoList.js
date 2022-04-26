import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTodo, removeTodo, clearTodos} from "./features/todoSlice";

export default function Todo() {
    let items = useSelector((state) => state.todo.items);
    let dispatch = useDispatch();
    let [input, setInput] = useState("");

    const mapTodos = items.map((todo) => {
        return <li>{todo}</li>;
    });

    const todoSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        dispatch(addTodo(input));
        // document.querySelector(input).value = "";
    };

    const todoClear = (e) => {
        e.preventDefault();
        dispatch(clearTodos());
    };

    return (
        <div>
            <h3>To Do List</h3>
            <ul>{mapTodos}</ul>
            <form onSubmit={(e) => todoSubmit(e)}>
                <input
                    type="text"
                    placeholder="Enter Todo"
                    onChange={(e) => setInput(e.target.value)}
                ></input>
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={(e) => todoClear(e)}>
                <button type="submot">Clear</button>
            </form>
        </div>
    );
}
