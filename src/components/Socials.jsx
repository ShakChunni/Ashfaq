"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialMedia = [
  { icon: <FaGithub />, link: "github.com/shakchunni" },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/f-m-ashfaq-613a25217/",
  },
  { icon: <FaTwitter />, link: "https://x.com/__ShakChunni__" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialMedia.map((social, index) => {
        return (
          <Link key={index} href={social.link} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
