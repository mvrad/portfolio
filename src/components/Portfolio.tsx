import * as React from 'react';

export interface portfolioProps { }

const portfolio: React.SFC<portfolioProps> = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <img src="img/display-travelstar.png" alt="TravelStar | Travel App"/>
          <h2>TravelStar</h2>
          <p>
            Created using the PHP framework Laravel, "TravelStar" is a small, lightweight web application hosted on Heroku that prompts a user to search the Sygic Travel third-party API for a list of top ten tourist attractions such as landmarks, top tourist activities such as bus tours, photos of the location taken by tourists, and various dining options in the area.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://travelstar.herokuapp.com" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/travelstar" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <img src="img/display-kjconrad.png" alt="Kelly Conrad | Performer"/>
          <h2>kjconrad.com</h2>
          <p>
            Created with the traditional web stack of HTML, CSS, and JavaScript, this is the official site of performer and instructor Kelly Conrad.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://www.kjconrad.com" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/performer-site" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <img src="img/display-blot.png" alt="Blot | Note-Taking App"/>
          <h2>Blot</h2>
          <p>
            Bootstrapped with Create React App and styled using Material-UI, Blot is a simple, easy-to-use note taking app that allows a user to create and save notes and lists.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://blotapp.herokuapp.com" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/blot" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <img src="img/display-wino.png" alt="Wino | Wine Cellar App"/>
          <h2>Wino</h2>
          <p>
            Created using the Node.js framework Express, "Wino" is a wine cellar management app that features a user authentication system created for MongoDB using Mongoose ODM that allows a user to create a secure account and then search the Snooth.com API for wine, edit wine bottle information, and add information to a collection.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://winoapp.herokuapp.com" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/wino" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <img src="img/alpha.png" alt="Alpha.ai Landing Page"/>
          <h2>Landing Page Design | Alpha.ai</h2>
          <p>
            A landing page design for a fictional artificial intelligence/machine learning company I dubbed "Alpha.ai". Images courtesy of Adobe Stock. Mockup created in Adobe XD.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="/alpha"><button className="btn" type="button">View</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
