"use client"

import CodeBlock from "./CodeBlock"

interface ComponentPreviewProps {
   code?: string
   language: string
}

export default function CodeView({ code, language }: ComponentPreviewProps) {
   return (
      <CodeBlock raw={code} className={`language-${language}`}>
         {code}
      </CodeBlock >
   )
}

