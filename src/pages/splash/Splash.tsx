import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { splashScreen } from "../../portfolio";
import { LottieSplash } from "../../containers";




const Splash: React.FC= () => {
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setNavigate(true);
    }, splashScreen.duration);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <div className="main-page">
      <LottieSplash/>
      {navigate && <Navigate to="/home" />}
    </div>
  );
};

export default Splash;
