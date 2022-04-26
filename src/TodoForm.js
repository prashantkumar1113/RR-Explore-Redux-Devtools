import React from "react";

export default function TodoForm() {
    return (
        <div>
            <h3>TodoForm</h3>
            <form>
                <input type="text" placeholder="Enter Todo"></input>
                <button type="submit">Submit</button>
            </form>
            <button>Clear</button>
        </div>
    );
}
