import React, { useState } from 'react';
import tankkaus from './images/tankkaus.png';

function Tankkaus(props) {
    const [pressed, setPressed] = useState(false);
    const classValue = pressed ? "tankkaus__img tankkaus__img--pressed" : "tankkaus__img";
    return (
      <div className="tankkaus">
        <img 
          src={tankkaus} 
          alt="" 
          className={classValue} 
          onClick={props.onClick}
          onPointerDown={() => setPressed(true)}
          onPointerUp={() => setPressed(false)}
          />
      </div>
    );
}

export default Tankkaus;