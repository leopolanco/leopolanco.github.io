import React from 'react';
const PortfolioItem = (props) => (
    <div>
        <h1>A thing I've done</h1>
        <p>This page is for this project {props.match.params.id}</p>
    </div>    
)
export default PortfolioItem;