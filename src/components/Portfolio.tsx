import * as React from 'react';

export interface portfolioProps { }

const portfolio: React.SFC<portfolioProps> = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <h1>Portfolio</h1>
        <p>The following projects are web applications and landing page designs that I've worked on over the past two years or so. Each individual project contains a link to view it as a live site, and each web application project contains a link to its GitHub repository.</p>
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
            <a href="https://travelstar.herokuapp.com" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/travelstar" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
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
            <a href="https://winoapp.herokuapp.com" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/wine-house" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>My Blog</h2>
          <img src="img/display-blog.png" alt="Matthew Conrad | Blog"/>
          <img className="stack-img" src="img/blog-stack.svg" alt="Blog stack"/>
          <p>
            Built in the PHP Laravel framework and styled with Bootstrap components, my personal blog connects to ButterCMS where I write my blog posts. In my blog, I talk about web development, discoveries and breakthroughs in science and engineering, movie reviews, and pretty much anything I find interesting enough to write about.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://mconradblog.herokuapp.com" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/blog" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Podbay</h2>
          <img src="img/display-podbay.png" alt="Podbay | Search Podcasts"/>
          <img className="stack-img" src="img/podbay-stack.svg" alt="Podbay stack"/>
          <p>
            Built in the Node.js Express framework, "Podbay" allows a user to search hundreds of different podcasts with the Listen API. "Podbay" uses the Pug HTML templating engine and the Sass CSS preprocessor for modular styling. <b>Note: This is an ongoing project and is still in progress</b>.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://podbayapp.herokuapp.com" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/podbay" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Blot</h2>
          <img src="img/display-blot.png" alt="Blot | ToDo App"/>
          <img className="stack-img" src="img/blot-stack.svg" alt="Blot stack"/>
          <p>
            A simple, easy-to-use to-do app that allows a user to create and save notes and lists, and features an authentication system so that the user can create a secure account in order to save his/her notes and lists. Bootstrapped with Create React App and styled using Material-UI. <b>Note: This is an ongoing project and is still in progress</b>.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://blotapp.herokuapp.com" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/blot" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
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
            <a href="https://github.com/mvrad/portfolio" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
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
            <a href="https://www.kjconrad.com" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/performer-site" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
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
            <a href="https://mvrad.github.io/tic-tac-toe" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/tic-tac-toe/blob/master/js/app.js" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
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
            <a href="https://mvrad.github.io/portfolio-old" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">Visit</button></a>
            <a href="https://github.com/mvrad/portfolio-old" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Landing Page Design | Alpha.ai</h2>
          <img src="img/alpha.png" alt="Alpha.ai Landing Page"/>
          {/* <img className="stack-img" src="img/landing-pages.svg" alt="Landing page stack"/> */}
          <p>
            A landing page design for a fictional artificial intelligence/machine learning company I dubbed "Alpha.ai". This project was created using Node.js, Express, and Tailwind CSS.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://alpha-ai-landing.herokuapp.com" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">View</button></a>
            <a href="https://github.com/mvrad/alpha.ai-landing-page" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-sub">
        <div className="portfolio-sub_title">
          <h2>Landing Page Design | Thinkspace</h2>
          <img src="img/thinkspace.png" alt="Thinkspace Landing Page"/>
          {/* <img className="stack-img" src="img/landing-pages.svg" alt="Landing page stack"/> */}
          <p>
            A landing page design for a fictional digital marketing company I dubbed "Thinkspace". This project was created using Node.js, Express, and Tailwind CSS. <b>Note: This is an ongoing project and is still in progress</b>.
          </p>
          <div className="portfolio-btn_wrapper">
            <a href="https://think-space-landing.herokuapp.com" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">View</button></a>
            <a href="https://github.com/mvrad/thinkspace-landing-page" target="_blank" rel='noopener noreferrer'><button className="btn" type="button">GitHub</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
