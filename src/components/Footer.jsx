import React from 'react';
import ItemCounter from "./ItemCounter";
import FilterButton from "./FilterButton";
import ClearChecked from "./ClearChecked";
import '../styles/Footer.css';

const Footer = (props) => {

    return (
        <div className="footer element">
            <ItemCounter todos={props.todos}/>
            <div className="filters_button">
                <FilterButton className={""} action={() => props.setFilter("All")}>
                    All
                </FilterButton>
                <FilterButton action={() => props.setFilter("Active")}>
                    Active
                </FilterButton>
                <FilterButton action={() => props.setFilter("Checked")}>
                    Checked
                </FilterButton>
            </div>
            <ClearChecked clearChecked={props.clearChecked}/>
        </div>
    );
};

export default Footer;