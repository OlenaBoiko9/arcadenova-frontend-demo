import { Link } from "react-router-dom";

function PromoModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="promo-title">
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__card">
        <button className="modal__close" type="button" onClick={onClose} aria-label="Close popup">
          ×
        </button>
        <p className="eyebrow">Before you go</p>
        <h2 id="promo-title">Check the catalog details page</h2>
        <p>
          This popup imitates an exit-intent retention pattern without being aggressive.
        </p>
        <div className="modal__actions">
          <Link to="/games" className="button button--primary" onClick={onClose}>
            Open games
          </Link>
          <button type="button" className="button button--ghost" onClick={onClose}>
            Stay here
          </button>
        </div>
      </div>
    </div>
  );
}

export default PromoModal;
