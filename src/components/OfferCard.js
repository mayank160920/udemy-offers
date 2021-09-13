import React from 'react';

function OfferCard(props) {
  const offer = props.offer;

  return (
    <div
      className="offerCard"
      onClick={() => window.open(offer.link, '_blank')}
    >
      <img src={offer.image} className="skeleton" />
      <div className="offerCard-details">
        <p className="offerCard-title">{offer.title}</p>
        <p href={offer.link} className="offerCard-description">
          {offer.description}
        </p>
      </div>
    </div>
  );
}

export default OfferCard;
