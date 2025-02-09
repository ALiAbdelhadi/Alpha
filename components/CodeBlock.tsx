"use client"
import { cn } from "@/lib/utils";
import { languageIcons } from "@/settings/LanguageIcon";
import { Check, Clipboard, FileCode } from "lucide-react";
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { ComponentProps, useEffect, useState } from "react";

const CopyButton = ({ content }: { content: string }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copyToClipboard}
      className="text-gray-400 hover:text-white transition-colors p-2 rounded-md hover:bg-gray-600/50"
      aria-label="Copy code"
    >
      {copied ? (
        <Check className="w-[18px] h-[18px] text-green-500" />
      ) : (
        <Clipboard className="w-[18px] h-[18px] text-gray-100" />
      )}
    </button>
  );
};


export default function CodeBlock({
  children,
  raw,
  className,
  ...rest
}: ComponentProps<"pre"> & { raw?: string; className?: string }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  const language = className?.split('-')[1] || 'typescript';
  const code = typeof children === "string" ? children.trim() : "";

  return (
    <div className="relative group bg-[#1E1E1E] rounded-[6px] custom-scrollbar my-5">
      <div className="absolute top-0 right-3">
        <div className="flex items-center space-x-2">
          <CopyButton content={raw || code} />
          {languageIcons[language] || <FileCode className="w-4 h-4 text-gray-400" />}
        </div>
      </div>
      <div className="rounded-[6px_6px_0_0] overflow-hidden bg-[#1E1E1E]">
        <div className="flex items-center justify-between px-4 py-3 bg-[#2D2D2D]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/40" />
          </div>
        </div>
      </div>
      <pre className={`${className} overflow-x-auto max-h-[650px] hide-scrollbar line-numbers`}>
        <code className={cn("language-" + language, className)}>{code}</code>
      </pre>
    </div>
  );
}
