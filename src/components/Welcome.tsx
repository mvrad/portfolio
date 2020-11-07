import * as React from 'react';

export interface WelcomeProps { }

const Welcome: React.SFC<WelcomeProps> = (props) => {
  return (
    <div className="welcome">
      <div className="welcome-wrapper">
        <h1>I'm Matt, a web designer and developer based in Seattle.</h1>
        <h2>This is my portfolio where you can find examples of my work&mdash;I built my first web site in 2017. I utilize my background in web development and graphic design to build web sites and applications according to principles of good design and web development best practices.</h2>
      </div>
    </div>
  );
}

export default Welcome;
