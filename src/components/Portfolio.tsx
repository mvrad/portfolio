import * as React from 'react';

export interface portfolioProps { }

const portfolio: React.SFC<portfolioProps> = (props) => {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
    </div>
  );
}

export default portfolio;
