import * as React from 'react';

export interface portfolioProps { }

const portfolio: React.SFC<portfolioProps> = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <h1>Portfolio</h1>
        <p>My portfolio contains web sites, apps, and landing page designs that I've created. Each project contains a link to view it as a live site, as well as a link to view its GitHub repo. The projects date from 2017 - Present.</p>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>TravelStar</h2>
          <img src="img/display-travelstar.png" alt="TravelStar | Travel App"/>
          <img className="stack-img" src="img/travelstar-stack.svg" alt="TravelStar stack"/>
          <p>
            Created using the PHP framework Laravel, "TravelStar" is a small, lightweight web application hosted on Heroku that prompts a user to search the Sygic Travel third-party API for a list of top ten tourist attractions such as landmarks, top tourist activities such as bus tours, photos of the location taken by tourists, and various dining options in the area.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://travelstar.herokuapp.com" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/travelstar" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Wine House</h2>
          <img src="img/display-wino.png" alt="Wine House | Wine Cellar App"/>
          <img className="stack-img" src="img/wine-house-stack.svg" alt="Wine House stack"/>
          <p>
            Created using the Node.js framework Express, "Wine House" is a wine cellar management app that features a user authentication system created for MongoDB using Mongoose ODM that allows a user to create a secure account and then search the Snooth.com API for wine, edit wine bottle information, and add information to a collection.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://winoapp.herokuapp.com" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/wine-house" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Guitar Zone API</h2>
          <img src="img/display-guitar-zone.png" alt="Guitar Zone API"/>
          <img className="stack-img" src="img/guitar-zone-stack.svg" alt="Guitar Zone API stack"/>
          <p>
            A REST API that handles inventory for an online musical instrument store. Created with Node.js, Express, PostgreSQL, and Sequelize ORM.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://github.com/mvrad/guitar-zone-api" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>mconrad.io</h2>
          <img src="img/mconradio.png" alt="Matt Conrad | Web Developer"/>
          <img className="stack-img" src="img/mconradio.svg" alt="mconrad.io stack"/>
          <p>
            Built with React, TypeScript, and Sass/SCSS, this is my personal portfolio site showcasing my best work in web development.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://github.com/mvrad/portfolio" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>kjconrad.com</h2>
          <img src="img/display-kjconrad.png" alt="Kelly Conrad | Performer"/>
          <img className="stack-img" src="img/kjconrad-stack.svg" alt="kjconrad stack"/>
          <p>
            Created with the traditional web stack of HTML, CSS, and JavaScript, this is the official site of performer and instructor Kelly Conrad.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://www.kjconrad.com" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/performer-site" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Tic-Tac-Toe</h2>
          <img src="img/display-tictactoe.png" alt="Tic-Tac-Toe"/>
          <img className="stack-img" src="img/tic-tac-toe-stack.svg" alt="Tic-Tac-Toe stack"/>
          <p>
            A two-person tic-tac-toe game created in "vanilla" JavaScript.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://mvrad.github.io/tic-tac-toe" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/tic-tac-toe/blob/master/js/app.js" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Old Portfolio Site</h2>
          <img src="img/display-portfolio-old.png" alt="Portfolio Old"/>
          <img className="stack-img" src="img/portfolio-old-stack.svg" alt="Old Portfolio Stack"/>
          <p>
            My (old) portfolio site showcasing some of my best work in web development. Created using HTML, CSS with Sass/SCSS, JavaScript, and jQuery UI elements.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://mvrad.github.io/portfolio-old" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/portfolio-old" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Blot | Landing Page Design</h2>
          <img src="img/display-blot.png" alt="Blot | ToDo App"/>
          <img className="stack-img" src="img/blot-stack.svg" alt="Blot stack"/>
          <p>
            A simple, easy-to-use to-do app that allows a user to create and save notes and lists, and features an authentication system so that the user can create a secure account in order to save his/her notes and lists. Bootstrapped with Create React App and styled using Material-UI.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://blotapp.herokuapp.com" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/blot" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Alpha.ai | Landing Page Design</h2>
          <img src="img/alpha.png" alt="Alpha.ai Landing Page"/>
          <img className="stack-img" src="img/alpha-ai-stack.svg" alt="Alpha.ai tack"/>
          <p>
            A landing page design for a fictional artificial intelligence/machine learning company I dubbed "Alpha.ai". This project was created using Node.js, Express, and Tailwind CSS.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://alpha-ai-landing.herokuapp.com" rel='noopener noreferrer'><button className="btn" type="button">View</button></a>
            <a href="https://github.com/mvrad/alpha.ai-landing-page" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
