import * as React from 'react';

export interface WelcomeProps { }

const Welcome: React.SFC<WelcomeProps> = (props) => {
  return (
    <div className="welcome">
      <h1>Hi. I'm Matt Conrad,
        <br/>
        a web developer
        <br/>
        based in Seattle.
      </h1>
    </div>
  );
}

export default Welcome;
