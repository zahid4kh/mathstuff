import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function Sidebar({ categories, onSelectFunction }) {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="w-64 border-r border-border h-[calc(100vh-64px)] p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Functions</h2>
      <div className="space-y-2">
        {Object.keys(categories).map((category) => (
          <div key={category} className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-between font-medium"
              onClick={() => toggleCategory(category)}
            >
              {category}
              {expandedCategories[category] ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
            
            {expandedCategories[category] && (
              <div className="ml-4 space-y-1 border-l border-border pl-2">
                {categories[category].map((func) => (
                  <Button
                    key={func.name}
                    variant="ghost"
                    className="w-full justify-start text-sm font-normal"
                    onClick={() => onSelectFunction(func)}
                  >
                    {func.name}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}