import React from 'react';
import { Link } from 'react-router-dom';

import icongasstation from './images/icon-gas-station.png';
import iconcoupon from './images/icon-coupon.png';
import iconboy from './images/icon-boy.png';

function Menu(props) {
    return (
      <div className="menu">
        <Link to="/"><div><img src={icongasstation} alt="gas station" /></div></Link>
        <Link to="/coupons"><div><img src={iconcoupon} alt="coupons" /><span className="badge">{props.claimableCoupons}</span></div></Link>
        <Link to="/profile"><div><img src={iconboy} alt="profile" /></div></Link>
      </div>
    );
}

export default Menu;