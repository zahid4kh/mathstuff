import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

export default function Sidebar({ categories, onSelectFunction, isMobileOpen, setIsMobileOpen }) {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (Object.keys(categories).length > 0 && Object.keys(expandedCategories).length === 0) {
      setExpandedCategories({ [Object.keys(categories)[0]]: true });
    }
  }, [categories]);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSelectFunction = (func) => {
    setSelectedItem(func.name);
    onSelectFunction(func);
    if (window.innerWidth < 768) {
      setIsMobileOpen(false);
    }
  };

  return (
    <div className={`
      fixed md:static top-16 bottom-0 left-0 z-20
      w-80 md:w-80 border-r border-border bg-background/95 backdrop-blur-sm
      h-[calc(100vh-64px)] overflow-y-auto
      transition-all duration-300 ease-in-out
      ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-6 ml-1 text-foreground/90">Functions</h2>
        <div className="space-y-3">
          {Object.keys(categories).map((category, index) => (
            <div
              key={category}
              className="space-y-1 fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Button
                variant="ghost"
                className="w-full justify-between font-medium"
                onClick={() => toggleCategory(category)}
              >
                {category}
                {expandedCategories[category] ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform duration-200" />
                )}
              </Button>

              <div
                className={`ml-3 space-y-1 border-l border-border pl-3 overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedCategories[category]
                    ? 'max-h-[500px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                {categories[category].map((func, funcIndex) => (
                  <Button
                    key={func.name}
                    variant="ghost"
                    className={`w-full justify-start text-sm my-0.5 ${
                      selectedItem === func.name
                        ? 'bg-accent text-foreground font-medium'
                        : 'font-normal text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => handleSelectFunction(func)}
                    style={{ animationDelay: `${(index * 50) + (funcIndex * 30)}ms` }}
                  >
                    {func.name}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}