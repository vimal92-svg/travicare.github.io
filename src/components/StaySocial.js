import React, { useContext } from 'react';
import './Staysocial.css';
import social1 from '../assets/images/social1.svg';
import social2 from '../assets/images/social2.svg';
import social3 from '../assets/images/social3.svg';
import social4 from '../assets/images/social4.svg';
import social5 from '../assets/images/social5.svg';
import social6 from '../assets/images/social6.svg';
import social7 from '../assets/images/social7.svg';
import { MobileContext } from '../App';

// courossel
function StaySocial() {
  const screenSize = useContext(MobileContext);
  return (
    <div>
      <div className="stay-social-container">
        <div className="stay-social-name">Stay  Social</div>
        <div className="stay-social-subtext">FOLLOW @NOURA-RETREATS</div>
        <div class="conteudo">
          <div class="carrousel">
            <img src={social7} class="card" />
            <img src={social6} class="card" />
            <img src={social5} class="card" />
            <img src={social4} class="card" />
            <img src={social5} class="card" />
            <img src={social6} class="card" />
            <img src={social7} class="card" />
            <img src={social4} class="card" />
            <img src={social5} class="card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaySocial;
