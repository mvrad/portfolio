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
          <a href="https://drive.google.com/file/d/1gu4Nj-0VFuBqZY-C45bxVX_qVxOC_kK4">
            <svg className="icon nav-link" viewBox="0 0 24 28">
              <path d="M22.937 7.438c0.156 0.156 0.297 0.344 0.438 0.562h-7.375v-7.375c0.219 0.141 0.406 0.281 0.562 0.438zM15.5 10h8.5v16.5c0 0.828-0.672 1.5-1.5 1.5h-21c-0.828 0-1.5-0.672-1.5-1.5v-25c0-0.828 0.672-1.5 1.5-1.5h12.5v8.5c0 0.828 0.672 1.5 1.5 1.5zM18 21.5v-1c0-0.281-0.219-0.5-0.5-0.5h-11c-0.281 0-0.5 0.219-0.5 0.5v1c0 0.281 0.219 0.5 0.5 0.5h11c0.281 0 0.5-0.219 0.5-0.5zM18 17.5v-1c0-0.281-0.219-0.5-0.5-0.5h-11c-0.281 0-0.5 0.219-0.5 0.5v1c0 0.281 0.219 0.5 0.5 0.5h11c0.281 0 0.5-0.219 0.5-0.5zM18 13.5v-1c0-0.281-0.219-0.5-0.5-0.5h-11c-0.281 0-0.5 0.219-0.5 0.5v1c0 0.281 0.219 0.5 0.5 0.5h11c0.281 0 0.5-0.219 0.5-0.5z"></path>
            </svg>
            Resume
          </a>
        </div>
        <div className="sidebar-nav_link">
          <a href="https://blog.mconrad.io">
            <svg className="icon nav-link" viewBox="0 0 24 28">
              <path d="M5.672 24l1.422-1.422-3.672-3.672-1.422 1.422v1.672h2v2h1.672zM13.844 9.5c0-0.203-0.141-0.344-0.344-0.344-0.094 0-0.187 0.031-0.266 0.109l-8.469 8.469c-0.078 0.078-0.109 0.172-0.109 0.266 0 0.203 0.141 0.344 0.344 0.344 0.094 0 0.187-0.031 0.266-0.109l8.469-8.469c0.078-0.078 0.109-0.172 0.109-0.266zM13 6.5l6.5 6.5-13 13h-6.5v-6.5zM23.672 8c0 0.531-0.219 1.047-0.578 1.406l-2.594 2.594-6.5-6.5 2.594-2.578c0.359-0.375 0.875-0.594 1.406-0.594s1.047 0.219 1.422 0.594l3.672 3.656c0.359 0.375 0.578 0.891 0.578 1.422z"></path>
            </svg>
            Blog
          </a>
        </div>
      </div>
      <div className="social">
        <a href="https://github.com/mvrad">
          <svg className="icon github" viewBox="0 0 32 32">
            <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
          </svg>
        </a>
        <a href="https://linkedin.com/in/matt-conrad">
          <svg className="icon linkedin" viewBox="0 0 32 32">
            <path d="M27.263 27.269h-4.739v-7.425c0-1.771-0.036-4.049-2.469-4.049-2.471 0-2.848 1.927-2.848 3.919v7.556h-4.739v-15.269h4.552v2.081h0.061c0.636-1.2 2.183-2.467 4.493-2.467 4.801 0 5.689 3.16 5.689 7.273zM7.116 9.911c-1.525 0-2.751-1.235-2.751-2.753 0-1.517 1.227-2.751 2.751-2.751 1.52 0 2.752 1.233 2.752 2.751 0 1.519-1.233 2.753-2.752 2.753zM9.492 27.269h-4.752v-15.269h4.752zM29.633 0h-27.272c-1.305 0-2.361 1.032-2.361 2.305v27.389c0 1.275 1.056 2.305 2.361 2.305h27.268c1.304 0 2.371-1.031 2.371-2.305v-27.389c0-1.273-1.067-2.305-2.371-2.305z"></path>
          </svg>
        </a>
        <a href="https://www.artstation.com/mvrad">
        <svg className="icon twitter" viewBox="0 0 32 32">
          <path d="M0 23.631l2.704 4.673c0.544 1.062 1.631 1.777 2.885 1.777h17.943l-3.723-6.451zM32 23.664c0-0.645-0.191-1.247-0.517-1.752l-10.512-18.275c-0.554-1.030-1.625-1.719-2.856-1.719-0 0-0 0-0 0h-5.556l16.239 28.135 2.56-4.433c0.504-0.849 0.643-1.225 0.643-1.956zM17.161 19.048l-7.257-12.571-7.259 12.571z"></path>
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
