import React, { useState } from 'react';

const CollapsibleCard = ({ title, imageUrl, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            onClick={toggleCollapse}
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-controls="collapseContent"
          >
            {title}
          </button>
        </h5>
      </div>
      <div
        id="collapseContent"
        className={`collapse ${isOpen ? 'show' : ''}`}
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">
          {imageUrl && (
            <img src={imageUrl} className="img-fluid mb-3" alt="Card Image" />
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleCard;
