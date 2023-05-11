import React, { useContext } from 'react';

import './welcome.css';
import { MobileContext } from '../App';
function Welcome() {

  const screenSize = useContext(MobileContext);

  return (
    <div>
      {screenSize <= 500
        ? (<div>
          <div className="Welcome-main">
            <div className="welcome-title">
              <span>Welcome to<br /> TraviCare</span>
              <div className="welcome-caption">
                <span>
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </span>
              </div>
              <div className="welcome-header">
                <span>LET US BE YOUR TRUSTED GUIDES</span>
              </div>
            </div>
            <div className="welcome-image">
              Experience.<br />Expand.Explore
            </div>
            <div className="welcome-sub-head">
              <span>Impeccable planning</span>
            </div>
          </div>
        </div>)
        :
        <div>
          <div className="WelcomeTrav">
            <div className="trav1">
              <span>Welcome to TraviCare</span>
              <div className="trav2">
                <span>
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </span>
              </div>
              <div className="trav3">
                <span>LET US BE YOUR TRUSTED GUIDES</span>
              </div>
            </div>
            <div className="trav4">
              Experience.Expand.Explore
            </div>
            <div className="trav5">
              <span>Impeccable planning</span>
            </div>
            <div className="trav6">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </span>
            </div>
          </div>
        </div>}
    </div>
  );
}

export default Welcome;
