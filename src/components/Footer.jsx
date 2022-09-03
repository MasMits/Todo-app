import React from 'react';
import '../styles/Footer.css';
import ItemCounter from "./ItemCounter";
import FilterButton from "./FilterButton";
import ClearChecked from "./ClearChecked";

const Footer = (props) => {

    return (
        <div className="footer">
            <ItemCounter/>
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