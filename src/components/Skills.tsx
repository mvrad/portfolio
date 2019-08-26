import * as React from 'react';

export interface skillsProps { }

const skills: React.SFC<skillsProps> = () => {
  return (
    <div className="skills">
      <div className="skills-sub">
        <div className="skills-sub_title">
          <h1>Skills</h1>
        </div>
        <p>
          I develop website designs into HTML, CSS, and JavaScript. I also work with databases and APIs in creating web applications.
        </p>
      </div>
      <div className="skills-sub">
        <div className="skills-sub_title">
          <svg className="skills-icon" height="55px">
            <path d="M42.7,16v-2.7h-5.3v-8h-32v37.3h13.3v10.7h8.7h-0.7c-2.9,0-5.3-2.4-5.3-5.3V21.3c0-2.9,2.4-5.3,5.3-5.3H42.7z
              M27.3,53.3h-22C2.4,53.3,0,50.9,0,48V5.3C0,2.4,2.4,0,5.3,0h32c2.9,0,5.3,2.4,5.3,5.3V16c2.9,0,5.3,2.4,5.3,5.3V48
              c0,2.9-2.4,5.3-5.3,5.3H27.3z M26.7,21.3v21.3h16V21.3H26.7z M34.7,50.7c1.5,0,2.7-1.2,2.7-2.7s-1.2-2.7-2.7-2.7
              c-1.5,0-2.7,1.2-2.7,2.7S33.2,50.7,34.7,50.7z"/>
          </svg>
          <h2>Front End Development</h2>
        </div>
        <p>
          I develop website designs using responsive design techniques, and develop for the front end in libraries like React.
        </p>
      </div>
      <div className="skills-sub">
        <div className="skills-sub_title">
          <svg className="skills-icon" height="48px">
            <path d="M24,0C10.7,0,0,3.4,0,7.5v6C0,17.6,10.7,21,24,21s24-3.4,24-7.5v-6C48,3.4,37.3,0,24,0z"/>
            <path d="M24,25.5c-13.3,0-24-3.4-24-7.5v9c0,4.1,10.7,7.5,24,7.5s24-3.4,24-7.5v-9C48,22.1,37.3,25.5,24,25.5z"/>
            <path d="M24,39c-13.3,0-24-3.4-24-7.5v9C0,44.6,10.7,48,24,48s24-3.4,24-7.5v-9C48,35.6,37.3,39,24,39z"/>
          </svg>
          <h2>Back End Development</h2>
        </div>
        <p>
          I like to program the back end of web applications in either the Node.js framework Express, the PHP framework Laravel, or the Python framework Django.
        </p>
      </div>
      <div className="skills-sub">
        <div className="skills-sub_title">
          <svg className="skills-icon" height="52px">
            <path d="M16.2,23.9c-6.4,2.2-13.4-1.2-15.6-7.6c-1-2.8-0.9-5.8,0.2-8.5l9.7,9.7l6.9-6.9L7.8,0.9
              c6.3-2.5,13.4,0.6,15.9,6.9c1.2,3.1,1.1,6.5-0.2,9.4L48,41.7l-6.9,6.9L16.2,23.9z"/>
          </svg>
          <h2>Development Tools</h2>
        </div>
        <p>
          Other tools that I use include Adobe XD for wireframing, Git and GitHub for version control, Gulp.js, and Webpack.
        </p>
      </div>
    </div>
  );
}

export default skills;
