import { useState, useEffect } from "react";
import { isIOS } from "react-device-detect";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";

const OfflineButton = () => {
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [showIosButton, setShowIosButton] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    if (isIOS) {
      setShowIosButton(true);
    }
  }, []);
 toast.loading("falso");
  useEffect(() => {
    const ready = (e) => {
      console.log("ready", e);
      e.preventDefault();
      console.log("ready", e);
      setDeferredPrompt(e);
      toast.loading("ready", e);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", ready);
    return () => {
      window.removeEventListener("beforeinstallprompt", ready);
    };
  }, []);

  const installApp = () => {
    // Show the install prompt
    if (deferredPrompt) {
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div className="promotionbanner bg-black w-full flex justify-center items-center text-black py-8">
      <Toaster position="bottom-center" />
      {showInstallButton && (
        <button
          className="bg-white px-2 py-1 rounded-md text-sm"
          onClick={() => installApp()}
        >
          Instalar para uso offline.
        </button>
      )}
      {showIosButton && (
        <Link href="/ios">
          <a className="bg-white px-2 py-1 rounded-md text-sm">
            Instalar para uso offline IOS
          </a>
        </Link>
      )}
    </div>
  );
};

export default OfflineButton;
