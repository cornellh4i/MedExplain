import React from "react";
import { Menu } from "lucide-react-native";
import heartLogo from "../../../assets/MedExplainHeart.png";
import heartText from "../../../assets/MedExplainHText.png";


const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 border-b bg-white">
      <div className="flex items-center space-x-3">
        <img
          src={heartLogo}
          alt="MedExplain Logo 1"
          className="h-8 w-auto"
        />
        <img
        src={heartText}
        alt="MedExplain Logo 2"
        className="h-8 w-auto"
      />

      </div>

      <nav className="flex items-center space-x-8 text-gray-600 font-medium">
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
