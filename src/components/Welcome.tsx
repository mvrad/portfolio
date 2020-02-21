import * as React from 'react';

export interface WelcomeProps { }

const Welcome: React.SFC<WelcomeProps> = (props) => {
  return (
    <div className="welcome">
      <div className="welcome-wrapper">
        <h1>Hi! &#128075; I'm Matt, a web developer based in Seattle.</h1>
        <h2>I utilize my background in graphic design and software engineering to build web sites and web applications according to principles of good design and web development best practices.</h2>
        <h2>When I'm not at the computer, I like to play guitar, play basketball, or attend meetups in the area like SeattleJS.</h2>
      </div>
    </div>
  );
}

export default Welcome;
