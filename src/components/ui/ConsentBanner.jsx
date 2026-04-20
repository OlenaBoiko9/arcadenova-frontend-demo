import { useEffect, useState } from "react";
import { getConsentState, saveConsentState } from "../../utils/storage";

function ConsentBanner() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    setAccepted(getConsentState());
  }, []);

  if (accepted) return null;

  return (
    <aside className="consent-banner" aria-label="Local storage notice">
      <div className="container consent-banner__inner">
        <p>
          This demo stores only local UI state, such as recently viewed items and banner consent.
        </p>
        <button
          className="button button--primary"
          type="button"
          onClick={() => {
            saveConsentState();
            setAccepted(true);
          }}
        >
          Got it
        </button>
      </div>
    </aside>
  );
}

export default ConsentBanner;
