import * as React from 'react';

export interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div>
          <img className="profile-img" src="img/me.jpg" alt="Matt Conrad | Web Developer"/>
        </div>
      </div>
      <div className="sidebar-nav">
        <div className="sidebar-nav_link">
          <a href="/">
            <svg className="icon nav-link" viewBox="0 0 20 28">
              <path d="M20 21.859c0 2.281-1.5 4.141-3.328 4.141h-13.344c-1.828 0-3.328-1.859-3.328-4.141 0-4.109 1.016-8.859 5.109-8.859 1.266 1.234 2.984 2 4.891 2s3.625-0.766 4.891-2c4.094 0 5.109 4.75 5.109 8.859zM16 8c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6z"></path>
            </svg>
            Welcome
          </a>
        </div>
        <div className="sidebar-nav_link">
          <a href="/skills">
            <svg className="icon nav-link" viewBox="0 0 30 28">
              <path d="M14 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM26 22c0-1.094-0.906-2-2-2s-2 0.906-2 2c0 1.109 0.906 2 2 2 1.109 0 2-0.906 2-2zM26 6c0-1.094-0.906-2-2-2s-2 0.906-2 2c0 1.109 0.906 2 2 2 1.109 0 2-0.906 2-2zM20 12.578v2.891c0 0.203-0.156 0.438-0.359 0.469l-2.422 0.375c-0.125 0.406-0.297 0.797-0.5 1.188 0.438 0.625 0.906 1.203 1.406 1.797 0.063 0.094 0.109 0.187 0.109 0.313 0 0.109-0.031 0.219-0.109 0.297-0.313 0.422-2.063 2.328-2.516 2.328-0.125 0-0.234-0.047-0.328-0.109l-1.797-1.406c-0.391 0.203-0.781 0.359-1.203 0.484-0.078 0.797-0.156 1.656-0.359 2.422-0.063 0.219-0.25 0.375-0.469 0.375h-2.906c-0.219 0-0.438-0.172-0.469-0.391l-0.359-2.391c-0.406-0.125-0.797-0.297-1.172-0.484l-1.844 1.391c-0.078 0.078-0.203 0.109-0.313 0.109-0.125 0-0.234-0.047-0.328-0.125-0.406-0.375-2.25-2.047-2.25-2.5 0-0.109 0.047-0.203 0.109-0.297 0.453-0.594 0.922-1.172 1.375-1.781-0.219-0.422-0.406-0.844-0.547-1.281l-2.375-0.375c-0.219-0.031-0.375-0.234-0.375-0.453v-2.891c0-0.203 0.156-0.438 0.359-0.469l2.422-0.375c0.125-0.406 0.297-0.797 0.5-1.188-0.438-0.625-0.906-1.203-1.406-1.797-0.063-0.094-0.109-0.203-0.109-0.313s0.031-0.219 0.109-0.313c0.313-0.422 2.063-2.312 2.516-2.312 0.125 0 0.234 0.047 0.328 0.109l1.797 1.406c0.391-0.203 0.781-0.359 1.203-0.5 0.078-0.781 0.156-1.641 0.359-2.406 0.063-0.219 0.25-0.375 0.469-0.375h2.906c0.219 0 0.438 0.172 0.469 0.391l0.359 2.391c0.406 0.125 0.797 0.297 1.172 0.484l1.844-1.391c0.094-0.078 0.203-0.109 0.313-0.109 0.125 0 0.234 0.047 0.328 0.125 0.406 0.375 2.25 2.063 2.25 2.5 0 0.109-0.047 0.203-0.109 0.297-0.453 0.609-0.922 1.172-1.359 1.781 0.203 0.422 0.391 0.844 0.531 1.281l2.375 0.359c0.219 0.047 0.375 0.25 0.375 0.469zM30 20.906v2.188c0 0.234-2.016 0.453-2.328 0.484-0.125 0.297-0.281 0.562-0.469 0.812 0.141 0.313 0.797 1.875 0.797 2.156 0 0.047-0.016 0.078-0.063 0.109-0.187 0.109-1.859 1.109-1.937 1.109-0.203 0-1.375-1.563-1.531-1.797-0.156 0.016-0.313 0.031-0.469 0.031s-0.313-0.016-0.469-0.031c-0.156 0.234-1.328 1.797-1.531 1.797-0.078 0-1.75-1-1.937-1.109-0.047-0.031-0.063-0.078-0.063-0.109 0-0.266 0.656-1.844 0.797-2.156-0.187-0.25-0.344-0.516-0.469-0.812-0.313-0.031-2.328-0.25-2.328-0.484v-2.188c0-0.234 2.016-0.453 2.328-0.484 0.125-0.281 0.281-0.562 0.469-0.812-0.141-0.313-0.797-1.891-0.797-2.156 0-0.031 0.016-0.078 0.063-0.109 0.187-0.094 1.859-1.094 1.937-1.094 0.203 0 1.375 1.547 1.531 1.781 0.156-0.016 0.313-0.031 0.469-0.031s0.313 0.016 0.469 0.031c0.438-0.609 0.906-1.219 1.437-1.75l0.094-0.031c0.078 0 1.75 0.984 1.937 1.094 0.047 0.031 0.063 0.078 0.063 0.109 0 0.281-0.656 1.844-0.797 2.156 0.187 0.25 0.344 0.531 0.469 0.812 0.313 0.031 2.328 0.25 2.328 0.484zM30 4.906v2.187c0 0.234-2.016 0.453-2.328 0.484-0.125 0.297-0.281 0.562-0.469 0.812 0.141 0.313 0.797 1.875 0.797 2.156 0 0.047-0.016 0.078-0.063 0.109-0.187 0.109-1.859 1.109-1.937 1.109-0.203 0-1.375-1.563-1.531-1.797-0.156 0.016-0.313 0.031-0.469 0.031s-0.313-0.016-0.469-0.031c-0.156 0.234-1.328 1.797-1.531 1.797-0.078 0-1.75-1-1.937-1.109-0.047-0.031-0.063-0.078-0.063-0.109 0-0.266 0.656-1.844 0.797-2.156-0.187-0.25-0.344-0.516-0.469-0.812-0.313-0.031-2.328-0.25-2.328-0.484v-2.188c0-0.234 2.016-0.453 2.328-0.484 0.125-0.281 0.281-0.562 0.469-0.812-0.141-0.313-0.797-1.891-0.797-2.156 0-0.031 0.016-0.078 0.063-0.109 0.187-0.094 1.859-1.094 1.937-1.094 0.203 0 1.375 1.547 1.531 1.781 0.156-0.016 0.313-0.031 0.469-0.031s0.313 0.016 0.469 0.031c0.438-0.609 0.906-1.219 1.437-1.75l0.094-0.031c0.078 0 1.75 0.984 1.937 1.094 0.047 0.031 0.063 0.078 0.063 0.109 0 0.281-0.656 1.844-0.797 2.156 0.187 0.25 0.344 0.531 0.469 0.812 0.313 0.031 2.328 0.25 2.328 0.484z"></path>
            </svg>
            Skills
          </a>
        </div>
        <div className="sidebar-nav_link">
          <a href="/portfolio">
            <svg className="icon nav-link" viewBox="0 0 28 28">
              <path d="M10 4h8v-2h-8v2zM28 14v7.5c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-7.5h10.5v2.5c0 0.547 0.453 1 1 1h5c0.547 0 1-0.453 1-1v-2.5h10.5zM16 14v2h-4v-2h4zM28 6.5v6h-28v-6c0-1.375 1.125-2.5 2.5-2.5h5.5v-2.5c0-0.828 0.672-1.5 1.5-1.5h9c0.828 0 1.5 0.672 1.5 1.5v2.5h5.5c1.375 0 2.5 1.125 2.5 2.5z"></path>
            </svg>
            Portfolio
          </a>
        </div>
        <div className="sidebar-nav_link">
          <a href="https://drive.google.com/open?id=10NqFDcRAKCecyUnHNYpiOluxDx0_S2WY" target="_blank" rel="noopener noreferrer">
            <svg className="icon nav-link" viewBox="0 0 24 28">
              <path d="M22.937 7.438c0.156 0.156 0.297 0.344 0.438 0.562h-7.375v-7.375c0.219 0.141 0.406 0.281 0.562 0.438zM15.5 10h8.5v16.5c0 0.828-0.672 1.5-1.5 1.5h-21c-0.828 0-1.5-0.672-1.5-1.5v-25c0-0.828 0.672-1.5 1.5-1.5h12.5v8.5c0 0.828 0.672 1.5 1.5 1.5zM18 21.5v-1c0-0.281-0.219-0.5-0.5-0.5h-11c-0.281 0-0.5 0.219-0.5 0.5v1c0 0.281 0.219 0.5 0.5 0.5h11c0.281 0 0.5-0.219 0.5-0.5zM18 17.5v-1c0-0.281-0.219-0.5-0.5-0.5h-11c-0.281 0-0.5 0.219-0.5 0.5v1c0 0.281 0.219 0.5 0.5 0.5h11c0.281 0 0.5-0.219 0.5-0.5zM18 13.5v-1c0-0.281-0.219-0.5-0.5-0.5h-11c-0.281 0-0.5 0.219-0.5 0.5v1c0 0.281 0.219 0.5 0.5 0.5h11c0.281 0 0.5-0.219 0.5-0.5z"></path>
            </svg>
            Resume
          </a>
        </div>
        <div className="sidebar-nav_link">
          <a href="https://blog.mconrad.io" target="_blank" rel="noopener noreferrer">
            <svg className="icon nav-link" viewBox="0 0 24 28">
              <path d="M5.672 24l1.422-1.422-3.672-3.672-1.422 1.422v1.672h2v2h1.672zM13.844 9.5c0-0.203-0.141-0.344-0.344-0.344-0.094 0-0.187 0.031-0.266 0.109l-8.469 8.469c-0.078 0.078-0.109 0.172-0.109 0.266 0 0.203 0.141 0.344 0.344 0.344 0.094 0 0.187-0.031 0.266-0.109l8.469-8.469c0.078-0.078 0.109-0.172 0.109-0.266zM13 6.5l6.5 6.5-13 13h-6.5v-6.5zM23.672 8c0 0.531-0.219 1.047-0.578 1.406l-2.594 2.594-6.5-6.5 2.594-2.578c0.359-0.375 0.875-0.594 1.406-0.594s1.047 0.219 1.422 0.594l3.672 3.656c0.359 0.375 0.578 0.891 0.578 1.422z"></path>
            </svg>
            Blog
          </a>
        </div>
      </div>
      <div className="social">
        <a href="https://github.com/mvrad" target='_blank' rel='noopener noreferrer'>
          <svg className="icon github" viewBox="0 0 24 28">
            <path d="M8.109 18.75v0c0.031-0.047 0.016-0.141-0.047-0.203-0.078-0.063-0.172-0.078-0.219-0.031-0.031 0.047-0.016 0.141 0.047 0.203 0.078 0.063 0.172 0.078 0.219 0.031zM7.672 18.109c-0.047-0.063-0.125-0.094-0.187-0.063-0.047 0.031-0.047 0.125 0 0.187 0.063 0.078 0.141 0.109 0.187 0.078v0c0.047-0.031 0.047-0.125 0-0.203zM7.031 17.484v0c0.016-0.031-0.016-0.094-0.078-0.125-0.047-0.016-0.109-0.016-0.125 0.031-0.031 0.047 0 0.094 0.063 0.125 0.063 0.016 0.125 0.016 0.141-0.031zM7.359 17.844v0c0.031-0.031 0.031-0.109-0.031-0.156-0.047-0.063-0.125-0.078-0.156-0.047-0.047 0.047-0.031 0.109 0.016 0.172 0.047 0.047 0.125 0.078 0.172 0.031zM8.703 19.016v0c0.016-0.063-0.047-0.141-0.141-0.172s-0.172 0-0.203 0.063c-0.016 0.063 0.047 0.141 0.141 0.172s0.172 0 0.203-0.063zM9.359 19.063v0c0-0.063-0.078-0.125-0.187-0.125-0.094 0-0.156 0.063-0.156 0.125s0.078 0.125 0.172 0.125 0.172-0.063 0.172-0.125zM9.969 18.953v0c-0.016-0.063-0.109-0.094-0.203-0.078s-0.156 0.078-0.141 0.141 0.094 0.109 0.187 0.094 0.156-0.094 0.156-0.156zM20 14c0-4.422-3.578-8-8-8s-8 3.578-8 8c0 3.531 2.297 6.531 5.469 7.594 0.406 0.078 0.547-0.172 0.547-0.391 0-0.187 0-0.812-0.016-1.484 0 0-2.219 0.484-2.688-0.953 0 0-0.359-0.922-0.891-1.156 0 0-0.719-0.5 0.063-0.5 0 0 0.781 0.063 1.219 0.828 0.703 1.234 1.875 0.875 2.328 0.672 0.078-0.516 0.281-0.875 0.516-1.078-1.781-0.203-3.656-0.891-3.656-3.953 0-0.875 0.313-1.578 0.828-2.141-0.078-0.203-0.359-1.016 0.078-2.125 0.672-0.203 2.203 0.828 2.203 0.828 0.641-0.187 1.313-0.266 2-0.266s1.359 0.078 2 0.266c0 0 1.531-1.031 2.203-0.828 0.438 1.109 0.156 1.922 0.078 2.125 0.516 0.562 0.828 1.266 0.828 2.141 0 3.078-1.875 3.75-3.656 3.953 0.281 0.25 0.547 0.734 0.547 1.484 0 1.062-0.016 1.922-0.016 2.188 0 0.219 0.141 0.469 0.547 0.391 3.172-1.062 5.469-4.062 5.469-7.594zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z"></path>
          </svg>
        </a>
        <a href="https://linkedin.com/in/matthew-conrad" target='_blank' rel='noopener noreferrer'>
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
      <div className="copyright">
        <p>
        &#169; 2020. Made with <span className="coffee">&#9749;</span>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
