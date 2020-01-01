import * as React from 'react';

export interface WelcomeProps { }

const Welcome: React.SFC<WelcomeProps> = (props) => {
  return (
    <div className="welcome">
      <h1>Hi, I'm Matt and I'm a web developer based in Seattle.</h1>
      <h2>
        I have a background in graphic design from the Art Institutes and a background in software engineering with a focus on web application development from General Assembly. I make every effort to build web sites and applications according to principles of good design and web development best practices.
      </h2>
      <h2>
        In my spare time I like to write in my blog and attend meetups such as <a href="http://seattlejs.com" className="welcome-link" target="_blank" rel='noopener noreferrer'>SeattleJS</a>.        
      </h2>
    </div>
  );
}

export default Welcome;
