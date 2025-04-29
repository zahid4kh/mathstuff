import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ code, language = 'kotlin' }) {
  const isDarkMode = document.documentElement.classList.contains('dark');

  return (
    <div className="my-4 rounded-md overflow-hidden border border-border">
      <SyntaxHighlighter
        language={language}
        style={isDarkMode ? vscDarkPlus : vs}
        customStyle={{
          margin: 0,
          padding: '1rem',
          borderRadius: '0',
          fontSize: '0.9rem',
          lineHeight: 1.5,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}