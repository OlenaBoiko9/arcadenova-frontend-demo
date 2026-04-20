import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import StickyCTA from "./ui/StickyCTA";
import PromoModal from "./ui/PromoModal";
import ConsentBanner from "./ui/ConsentBanner";
import useExitIntent from "../hooks/useExitIntent";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldShowExitModal, setShouldShowExitModal] = useExitIntent(true);

  useEffect(() => {
    document.body.classList.toggle("body-lock", menuOpen);

    return () => {
      document.body.classList.remove("body-lock");
    };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="content" className="site-main">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
      <ConsentBanner />
      <PromoModal
        open={shouldShowExitModal}
        onClose={() => setShouldShowExitModal(false)}
      />
    </div>
  );
}

export default Layout;
