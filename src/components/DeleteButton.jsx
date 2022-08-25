import React from 'react';
import imgDeleteButton from "../img/Delete.svg";

const DeleteButton = (props) => {
    return (
        <div className="DeleteButton">
            <button onClick={props.deleteItem}>
                <img src= {imgDeleteButton} alt="delete button" />
            </button>
        </div>
    );
};

export default DeleteButton;