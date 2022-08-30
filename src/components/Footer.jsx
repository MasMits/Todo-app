import React from 'react';
import '../styles/Footer.css';
import ItemCounter from "./ItemCounter";
import FilterButton from "./FilterButton";
import ClearChecked from "./ClearChecked";

const Footer = () => {
    return (
        <div className="footer">
            <ItemCounter/>
            <div className="filters_button">
                <FilterButton/>
                <FilterButton/>
                <FilterButton/>
            </div>
            <ClearChecked/>
        </div>
    );
};

export default Footer;