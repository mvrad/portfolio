import * as React from 'react';

export interface MobileNavProps { }

const MobileNav: React.SFC<MobileNavProps> = (props) => {
  return (
    <div className="mobile-nav">
      <div className="mobile-nav-header">
        <img className="mobile-nav-profile-img" src="img/me.jpg" alt="Matt Conrad | Web Developer"/>
        <div className="mobile-nav-main-title">
          <img src="img/my-logo.svg" alt="Logo"/>
          <h1>Matthew Conrad
            <br/>
            Web Developer
          </h1>
        </div>
      </div>
      <div className="mobile-nav-nav">
        <a href="/">
          Welcome
        </a>
        <a href="/skills">
          Skills
        </a>
        <a href="/portfolio">
          Portfolio
        </a>
        <a href="https://drive.google.com/open?id=1TpWy7G1nRxUONS-0ImFbD0UtFmegU-bb" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a href="https://mconradblog.herokuapp.com" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      </div>
      <div className="mobile-nav-social">
        <a href="https://github.com/mvrad" target='_blank' rel='noopener noreferrer'>
          <svg className="icon github" width="32" height="32">
            <path d="M16,0.4c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.6,0-3
            c-4.5,1-5.4-1.9-5.4-1.9c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3
            c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6
            c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5C23.1,6.6,24.4,7,24.4,7c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3
            c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4c0,0.4,0.3,0.9,1.1,0.8C27.4,29.5,32,23.5,32,16.4
            C32,7.6,24.8,0.4,16,0.4z"/>
          </svg>
        </a>
        <a href="https://linkedin.com/in/matthew-conrad" target='_blank' rel='noopener noreferrer'>
          <svg className="icon linkedin" width="32" height="32">
          <path d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M12.2,22.7H8.8V12.2H12
            C12.2,12.2,12.2,22.7,12.2,22.7z M10.5,11c-1,0-1.7-0.7-1.7-1.7c0-0.8,0.7-1.7,1.7-1.7s1.7,0.7,1.7,1.7C12.2,10.2,11.5,11,10.5,11z
            M24,22.7h-3.2v-5.8c0-1.3-0.5-2.3-1.7-2.3c-0.8,0-1.5,0.7-1.7,1.2c-0.2,0.2-0.2,0.5-0.2,0.8v6.2H14v-7.2c0-1.3,0-2.3-0.2-3.3h2.8
            l0.2,1.5l0,0C17.3,13,18.3,12,20,12c2.2,0,3.7,1.5,3.7,4.5C24,16.5,24,22.7,24,22.7z"/>
          </svg>
        </a>
        <a href="https://twitter.com/mc0nrad" target='_blank' rel='noopener noreferrer'>
          <svg className="icon twitter" width="32" height="32">
          <path d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M22.5,13.2c0,0.2,0,0.3,0,0.3c0,4.2-3.2,9-9,9
            c-1.8,0-3.5-0.5-4.8-1.5c0.2,0,0.5,0,0.8,0c1.5,0,2.8-0.5,3.8-1.3c-1.3,0-2.5-1-3-2.2c0.2,0,0.3,0,0.7,0s0.5,0,0.8-0.2
            c-1.3-0.2-2.5-1.3-2.5-2.8l0,0c0.5,0.2,0.8,0.3,1.5,0.3c-0.8-0.7-1.5-1.5-1.5-2.7c0-0.5,0.2-1.2,0.5-1.7c1.5,1.8,3.8,3.2,6.5,3.3
            c0-0.2,0-0.5,0-0.7c0-1.7,1.3-3.2,3.2-3.2c0.8,0,1.7,0.3,2.3,1c0.7-0.2,1.3-0.3,2-0.8c-0.2,0.7-0.7,1.3-1.3,1.7
            c0.7,0,1.2-0.2,1.8-0.5C23.7,12.2,23.2,12.7,22.5,13.2z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default MobileNav;
