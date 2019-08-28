import * as React from 'react';

export interface AlphaAIProps { }

const AlphaAI: React.SFC<AlphaAIProps> = (props) => {
  return (
  <div className="alpha-ai">
    <img src="img/alpha.png" alt="Alpha.ai Landing Page" />
  </div>
  );
}

export default AlphaAI;
