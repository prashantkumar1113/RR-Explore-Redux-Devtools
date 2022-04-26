import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTodo, removeTodo, clearTodo} from "./features/todoSlice";

export default function Todo() {
    return (
        <div>
            <h3>To Do List</h3>
        </div>
    );
}
