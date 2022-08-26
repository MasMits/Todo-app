import imgCompleted from "../img/completed.svg";
import imgUncompleted from "../img/uncompleted.svg";

const Checkbox = (props) => {

    return (
        <div className="Checkbox">
            {/*<button onClick={console.log("test 1")}>*/}
            <button onClick={() => props.change(props.id)}>
            <img src= {props.isCompleted ? imgCompleted : imgUncompleted} alt="checkbox"/>
            </button>
        </div>
    );
};

export default Checkbox;