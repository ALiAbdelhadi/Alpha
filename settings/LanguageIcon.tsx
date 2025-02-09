import { JSX } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaTerminal } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

export const languageIcons: Record<string, JSX.Element> = {
  javascript: <IoLogoJavascript className="w-5 h-5 text-yellow-400 rounded-lg" />,
  js: <IoLogoJavascript className="w-5 h-5 text-yellow-400 rounded-lg" />,
  jsx: <IoLogoJavascript className="w-5 h-5 text-yellow-400 rounded-lg" />,
  typescript: <BiLogoTypescript className="w-5 h-5 text-blue-400 rounded-lg" />,
  ts: <BiLogoTypescript className="w-5 h-5 text-blue-400 rounded-lg" />,
  tsx: <BiLogoTypescript className="w-5 h-5 text-blue-400 rounded-lg" />,
  html: <FaHtml5 className="w-5 h-5 text-orange-500 rounded-lg" />,
  css: <FaCss3Alt className="w-5 h-5 text-blue-500 rounded-lg" />,
  bash: <FaTerminal className="w-5 h-5 text-gray-300 rounded-lg" />,
};
