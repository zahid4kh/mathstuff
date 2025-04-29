import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ code, language = 'kotlin' }) {
  const [copied, setCopied] = useState(false);
  const isDarkMode = document.documentElement.classList.contains('dark');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const customStyle = {
    margin: 0,
    padding: '1rem',
    borderRadius: '0.4rem',
    fontSize: '0.9rem',
    lineHeight: 1.5,
    backgroundColor: isDarkMode ? 'hsl(0, 0%, 13%)' : 'hsl(0, 0%, 97%)',
  };

  return (
    <div className="my-5 relative rounded-lg overflow-hidden border border-border transition-all duration-200 hover:shadow-md group">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={copyToClipboard}
          className="p-1.5 rounded-md bg-secondary/80 backdrop-blur-sm hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-200"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={isDarkMode ? vscDarkPlus : vs}
          customStyle={customStyle}
          wrapLongLines={false}
          showLineNumbers={code.split('\n').length > 3}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {language && (
        <div className="absolute left-3 top-0 px-1.5 py-0.5 text-xs font-mono text-muted-foreground bg-background/80 rounded-b-md border-x border-b border-border transform -translate-y-px">
          {language}
        </div>
      )}
    </div>
  );
}