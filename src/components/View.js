import React from 'react';

export default function View(props) {
    return (
        <div id="view">
            <h1>{props.value}</h1>
        </div>
    )
}