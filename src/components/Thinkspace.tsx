import * as React from 'react';

export interface ThinkspaceProps { }

const Thinkspace: React.SFC<ThinkspaceProps> = (props) => {
  return (
  <div className="alpha-ai">
    <img src="img/thinkspace.png" alt="Thinkspace Landing Page" />
  </div>
  );
}

export default Thinkspace;
