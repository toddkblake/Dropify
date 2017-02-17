import React from 'react';
import { Link } from 'react-router';

const ContentCard = ({ cardType, image, primaryContent, primaryLink, secondaryContent, secondaryLink }) => {
  if (cardType === "album") {
    secondaryContent = (<p className="secondary"><Link to={ secondaryLink } >{ secondaryContent }</Link></p>)
  }

  return (
    <div className={`content-card ${cardType}`}>
      <div className="content-card-image">
        <img src={ image } />
      </div>
      <div className="content-card-content">
        <p className="primary"><Link to={ primaryLink }>{ primaryContent }</Link></p>
        { secondaryContent }
      </div>
    </div>
  )
}

export default ContentCard;
