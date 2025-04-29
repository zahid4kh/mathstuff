import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Github } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-md transition-all duration-200">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-lg font-bold text-primary-foreground">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">MathStuff</span>
            <span className="text-xs text-muted-foreground">v1.0.1</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/zahid4kh/mathstuff"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            aria-label="View on GitHub"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}