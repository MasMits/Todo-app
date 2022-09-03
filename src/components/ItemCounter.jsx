import React from 'react';

const ItemCounter = ({todos}) => {
    let left = todos.filter(item => item.isCompleted === false).length;

    return (
        <div >
            {left > 1? <div className="itemCounter">{left} items left</div>
                :<div className="itemCounter">{left} item left</div>
            }
        </div>
    );
};

export default ItemCounter;