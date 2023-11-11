import { useState, useEffect } from "react";
import {
  Container,
  OfflineStatusIcon,
  OnlineStatusIcon,
} from "./OnlineStatusStyles";

const Online = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [displayStyle, setDisplayStyle] = useState(isOnline ? "none" : "flex");

  const checkOnline = () => {
    setIsOnline(true);
    setDisplayStyle("flex");

    setTimeout(() => {
      setDisplayStyle("none");
    }, 2000);
  };

  const checkOffline = () => {
    setIsOnline(false);
    setDisplayStyle("flex");
  };

  useEffect(() => {
    window.addEventListener("online", checkOnline);
    window.addEventListener("offline", checkOffline);

    return () => {
      window.addEventListener("online", checkOnline);
      window.addEventListener("offline", checkOffline);
    };
  }, []);

  return (
    <Container display={displayStyle} bg={isOnline ? "" : "value"}>
      {isOnline && (
        <div>
          <OnlineStatusIcon />
          Welcome Back Online!
        </div>
      )}
      {!isOnline && (
        <div>
          <OfflineStatusIcon />
          You're Currrently Offline!
          Please connect back to your network and try again!
        </div>
      )}
    </Container>
  );
};

export default Online;
