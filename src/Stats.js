import React from 'react';

function Stats(props) {
    return (
        <div className="stats">
        <div className="stats__title">Litraa</div>
        <div className="stats__count">{props.count}</div>
        </div>
    );
}

export default Stats;