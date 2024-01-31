import "./card.scss";

export const Card = () => {
  return (
    <div className="card">
      <div className="card__name">Band name</div>
      <div className="card__data">
        <div className="card__data__date">17/03/2024</div>
        <div className="card__data__divider">|</div>
        <div className="card__data__location">Location</div>
      </div>
      <div className="card__price">20€</div>
    </div>
  );
};
