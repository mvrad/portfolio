import * as React from 'react';

export interface MobileNavProps { }

const MobileNav: React.SFC<MobileNavProps> = (props) => {
  return (
    <div className="mobile-nav">
      <div className="mobile-nav-header">
        <img className="mobile-nav-profile-img" src="img/me.jpg" alt="Matt Conrad | Web Developer"/>
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
        <a href="https://drive.google.com/open?id=10NqFDcRAKCecyUnHNYpiOluxDx0_S2WY" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a href="https://mconradblog.herokuapp.com" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      </div>
      <div className="social">
        <a href="https://linkedin.com/in/matthew-conrad" target='_blank' rel='noopener noreferrer'>
          <svg className="icon github" viewBox="0 0 24 28">
            <path d="M8.109 18.75v0c0.031-0.047 0.016-0.141-0.047-0.203-0.078-0.063-0.172-0.078-0.219-0.031-0.031 0.047-0.016 0.141 0.047 0.203 0.078 0.063 0.172 0.078 0.219 0.031zM7.672 18.109c-0.047-0.063-0.125-0.094-0.187-0.063-0.047 0.031-0.047 0.125 0 0.187 0.063 0.078 0.141 0.109 0.187 0.078v0c0.047-0.031 0.047-0.125 0-0.203zM7.031 17.484v0c0.016-0.031-0.016-0.094-0.078-0.125-0.047-0.016-0.109-0.016-0.125 0.031-0.031 0.047 0 0.094 0.063 0.125 0.063 0.016 0.125 0.016 0.141-0.031zM7.359 17.844v0c0.031-0.031 0.031-0.109-0.031-0.156-0.047-0.063-0.125-0.078-0.156-0.047-0.047 0.047-0.031 0.109 0.016 0.172 0.047 0.047 0.125 0.078 0.172 0.031zM8.703 19.016v0c0.016-0.063-0.047-0.141-0.141-0.172s-0.172 0-0.203 0.063c-0.016 0.063 0.047 0.141 0.141 0.172s0.172 0 0.203-0.063zM9.359 19.063v0c0-0.063-0.078-0.125-0.187-0.125-0.094 0-0.156 0.063-0.156 0.125s0.078 0.125 0.172 0.125 0.172-0.063 0.172-0.125zM9.969 18.953v0c-0.016-0.063-0.109-0.094-0.203-0.078s-0.156 0.078-0.141 0.141 0.094 0.109 0.187 0.094 0.156-0.094 0.156-0.156zM20 14c0-4.422-3.578-8-8-8s-8 3.578-8 8c0 3.531 2.297 6.531 5.469 7.594 0.406 0.078 0.547-0.172 0.547-0.391 0-0.187 0-0.812-0.016-1.484 0 0-2.219 0.484-2.688-0.953 0 0-0.359-0.922-0.891-1.156 0 0-0.719-0.5 0.063-0.5 0 0 0.781 0.063 1.219 0.828 0.703 1.234 1.875 0.875 2.328 0.672 0.078-0.516 0.281-0.875 0.516-1.078-1.781-0.203-3.656-0.891-3.656-3.953 0-0.875 0.313-1.578 0.828-2.141-0.078-0.203-0.359-1.016 0.078-2.125 0.672-0.203 2.203 0.828 2.203 0.828 0.641-0.187 1.313-0.266 2-0.266s1.359 0.078 2 0.266c0 0 1.531-1.031 2.203-0.828 0.438 1.109 0.156 1.922 0.078 2.125 0.516 0.562 0.828 1.266 0.828 2.141 0 3.078-1.875 3.75-3.656 3.953 0.281 0.25 0.547 0.734 0.547 1.484 0 1.062-0.016 1.922-0.016 2.188 0 0.219 0.141 0.469 0.547 0.391 3.172-1.062 5.469-4.062 5.469-7.594zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z"></path>
          </svg>
        </a>
        <a href="https://github.com/mvrad" target='_blank' rel='noopener noreferrer'>
          <svg className="icon linkedin" viewBox="0 0 24 28">
            <path d="M3.703 22.094h3.609v-10.844h-3.609v10.844zM7.547 7.906c-0.016-1.062-0.781-1.875-2.016-1.875s-2.047 0.812-2.047 1.875c0 1.031 0.781 1.875 2 1.875h0.016c1.266 0 2.047-0.844 2.047-1.875zM16.688 22.094h3.609v-6.219c0-3.328-1.781-4.875-4.156-4.875-1.937 0-2.797 1.078-3.266 1.828h0.031v-1.578h-3.609s0.047 1.016 0 10.844v0h3.609v-6.062c0-0.313 0.016-0.641 0.109-0.875 0.266-0.641 0.859-1.313 1.859-1.313 1.297 0 1.813 0.984 1.813 2.453v5.797zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z"></path>
          </svg>
        </a>
        <a href="https://twitter.com/mc0nrad" target='_blank' rel='noopener noreferrer'>
        <svg className="icon twitter" viewBox="0 0 24 28">
          <path d="M20 9.531c-0.594 0.266-1.219 0.438-1.891 0.531 0.688-0.406 1.203-1.062 1.453-1.828-0.641 0.375-1.344 0.656-2.094 0.797-0.594-0.641-1.453-1.031-2.391-1.031-1.813 0-3.281 1.469-3.281 3.281 0 0.25 0.016 0.516 0.078 0.75-2.734-0.141-5.156-1.437-6.781-3.437-0.281 0.484-0.453 1.062-0.453 1.656 0 1.141 0.531 2.141 1.422 2.734-0.547-0.016-1.062-0.172-1.563-0.406v0.031c0 1.594 1.203 2.922 2.703 3.219-0.281 0.078-0.5 0.125-0.797 0.125-0.203 0-0.406-0.031-0.609-0.063 0.422 1.297 1.625 2.25 3.063 2.281-1.125 0.875-2.531 1.406-4.078 1.406-0.266 0-0.531-0.016-0.781-0.047 1.453 0.922 3.172 1.469 5.031 1.469 6.031 0 9.344-5 9.344-9.344 0-0.141 0-0.281-0.016-0.422 0.641-0.453 1.203-1.031 1.641-1.703zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z"></path>
        </svg>
        </a>
      </div>
    </div>
  );
}

export default MobileNav;
