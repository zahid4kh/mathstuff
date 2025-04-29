import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">MathStuff</span>
          <span className="text-sm text-muted-foreground">v1.0.1</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/zahid4kh/mathstuff" 
            target="_blank" 
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}