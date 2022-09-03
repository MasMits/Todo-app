import React from 'react';

const ClearChecked = ({clearChecked}) => {
    return (
        <button onClick={clearChecked}>
            Clear checked
        </button>
    );
};

export default ClearChecked;