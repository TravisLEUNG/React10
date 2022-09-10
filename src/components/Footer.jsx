import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

export default function Footer() {
  const facebook = "https://www.facebook.com/minghong.leung.54";
  const instagram = "https://www.instagram.com/travi51eung";
  const github = "https://www.github.com/TravisLEUNG";
  return (
    <div className="footer">
        <a href={facebook}>
          <FaFacebookSquare size={20} />
        </a>
        <a href={instagram}>
          <FaInstagramSquare size={20} />
        </a>
        <a href={github}>
          <FaGithubSquare size={20} />
        </a>
    </div>
  );
}
