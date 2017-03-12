import React from 'react';

const SearchResult = ({ primaryContent, secondaryContent, clickHandler, imageUrl }) => {
  return (
    <li onClick={ clickHandler }>
      { imageUrl ? <img src={ imageUrl }/> : null }
      <div className="result-content">
        <p className="primary">
          { primaryContent }
        </p>
        { secondaryContent ? <p className="secondary">{ secondaryContent }</p> : null }
      </div>
    </li>
  );
}

export default SearchResult;
