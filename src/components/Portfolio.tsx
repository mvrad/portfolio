import * as React from 'react';

export interface portfolioProps { }

const Portfolio: React.FC<portfolioProps> = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <h1>Portfolio</h1>
        <p>My portfolio contains web sites, web apps, and landing page designs that I've created. Each project contains a link to view it as a live site, as well as a link to view its GitHub repo.</p>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Blot | To-Do and Notes</h2>
          <img src="img/display-blot.png" alt="Blot | ToDo App"/>
          <img className="stack-img" src="img/blot-stack.svg" alt="Blot stack"/>
          <p>
            A to-do app created in the MERN framework with TypeScript featuring user authentication and Material-UI components.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://blotapp.herokuapp.com" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/blot" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Podbay | Podcast Search</h2>
          <img src="img/display-podbay.png" alt="Podbay | Podcast Search"/>
          <img className="stack-img" src="img/podbay-stack.svg" alt="Podbay stack"/>
          <p>
            Search podcast information and get new podcast suggestions. Powered by Listen Notes API and created in React and GraphQL.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://podbay.herokuapp.com" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/podbay" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>TravelStar | Destination Information</h2>
          <img src="img/display-travelstar.png" alt="TravelStar | Travel App"/>
          <img className="stack-img" src="img/travelstar-stack.svg" alt="TravelStar stack"/>
          <p>
            Created using the PHP framework Laravel, "TravelStar" is a small, lightweight web application hosted on Heroku that prompts a user to search the Sygic Travel API for a list of top ten tourist attractions such as landmarks, top tourist activities such as bus tours, photos of the location taken by tourists, and various dining options in the area.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://travelstar.herokuapp.com" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/travelstar" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>My Blog</h2>
          <img src="img/display-blog.png" alt="blog.mconrad.io"/>
          <img className="stack-img" src="img/blog-stack.svg" alt="Blog stack"/>
          <p>
            Built in the PHP Laravel framework and styled with Bootstrap components, my personal blog connects to ButterCMS where I write my blog posts.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://blog.mconrad.io" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/blog" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Wine House | Virtual Wine Cellar</h2>
          <img src="img/display-wino.png" alt="Wine House | Wine Cellar App"/>
          <img className="stack-img" src="img/wine-house-stack.svg" alt="Wine House stack"/>
          <p>
            Created using the Node.js framework Express, "Wine House" is a wine cellar management app that features a user authentication system created for MongoDB using Mongoose ODM that allows a user to create a secure account, then edit wine bottle information and add it to a collection.
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
          <h2>Kelly Conrad | Performer</h2>
          <img src="img/display-kjconrad.png" alt="Kelly Conrad | Performer"/>
          <img className="stack-img" src="img/kjconrad-stack.svg" alt="kjconrad stack"/>
          <p>
            Created with the traditional web stack of HTML, CSS, and JavaScript, this is the official site of performer and instructor Kelly Conrad.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://kjconrad.com" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/performer-site" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Krystal Dazzle Skincare</h2>
          <img src="img/display-krystaldazzle.png" alt="Krystal Dazzle Skincare"/>
          <img className="stack-img" src="img/krystaldazzle-stack.svg" alt="krystal dazzle stack"/>
          <p>
            A Shopify-themed site I created for a skincare product line. "Krystal Dazzle" logo created in Adobe Illustrator. Images courtesy of Adobe Stock.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://krystaldazzles.com" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Matt Conrad | Web Developer</h2>
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

export default Portfolio;
