import imgComleted from "../img/completed.svg";
import imgUncompleted from "../img/uncompleted.svg";

const Checkbox = (props) => {

    return (
        <div className="Checkbox">
            <button onClick={props.Change}>
            <img src= {props.isCompleted ? imgComleted : imgUncompleted} alt="checkbox"/>
            </button>
        </div>
    );
};

export default Checkbox;