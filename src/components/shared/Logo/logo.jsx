import React from "react";
import { useNavigate } from "react-router-dom";
import originalLogo from "../../../assets/images/Logo/logo-org.png";
import originalWhite from "../../../assets/images/Logo/logo-white.png";

export const SiteLogo = ({ white, width, height, className }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const logoSrc = white ? originalWhite : originalLogo;

  return (
    <img
      src={logoSrc}
      alt="Logo"
      width={width}
      height={height}
      className={className}
      onClick={handleLogoClick}
      style={{ cursor: "pointer" }}
    />
  );
};
