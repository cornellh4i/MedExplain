import React from "react";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react-native";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f3b80] text-white px-6 py-10">
      <div className="max-w-[680px] mx-auto flex flex-col items-center gap-6">

        <div className="flex items-center gap-3">
          <img
            src="../../../assets/MedExplainHeart.png"
            alt="MedExplain Logo 1"
            className="h-10 w-auto"
          />
          <img
            src="../../../assets/MedExplainText.png"
            alt="MedExplain Logo 2"
            className="h-10 w-auto"
          />

        </div>

        <div className="w-full">
          <a
            href="#"
            aria-label="Contact Us"
            className="block w-full text-center bg-white text-[#0f3b80] font-medium rounded-md py-3 shadow-sm hover:shadow-md"
          >
            Contact Us
          </a>
        </div>

        <div className="w-full text-left">
          <p className="text-lg leading-snug mb-2">
            Can’t find what you’re looking for?
          </p>
          <a
            href="#"
            className="text-lg underline font-medium"
          >
            Submit an article suggestion
          </a>
        </div>

        {/* Social icons row (centered, larger icons like screenshot) */}
        <div className="flex gap-6 items-center justify-center mt-2">
          <a
            href="#"
            aria-label="Facebook"
            className="rounded-full bg-white p-3 shadow-sm hover:scale-105 transform transition"
          >
            <Facebook size={28} color="#0f3b80" />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="rounded-full bg-white p-3 shadow-sm hover:scale-105 transform transition"
          >
            <Twitter size={28} color="#0f3b80" />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="rounded-full bg-white p-3 shadow-sm hover:scale-105 transform transition"
          >
            <Linkedin size={28} color="#0f3b80" />
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="rounded-full bg-white p-3 shadow-sm hover:scale-105 transform transition"
          >
            <Youtube size={28} color="#0f3b80" />
          </a>
        </div>

        <div className="w-full mt-4">
          <p className="text-sm leading-relaxed text-white/85 mb-3">
            Patient Activated Learning System (PALS) does not provide medical advice,
            diagnosis or treatment. Some material in the UMLS Metathesaurus is from
            copyrighted sources of the respective copyright holders. Users of the UMLS
            Metathesaurus are solely responsible for compliance with any copyright,
            patent or trademark restrictions and are referred to the copyright, patent
            or trademark notices appearing in the original sources, all of which are
            hereby incorporated by reference.
          </p>

          <p className="text-sm text-white/80">© 2023 Cornell University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
