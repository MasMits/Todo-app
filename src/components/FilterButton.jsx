import React from 'react';

const FilterButton = ({action, children}) => {

    return (
        <div>
            <button className="FilterButton" onClick={action}>
                {children}
            </button>
        </div>
    );
};

export default FilterButton;