import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CodeBlock from './components/CodeBlock';
import { mathFunctions } from './content/mathFunctions';
import { Calculator, BookOpen, Code2, ArrowRight } from 'lucide-react';

function App() {
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSelectFunction = (func) => {
    setFadeIn(false);
    setTimeout(() => {
      setSelectedFunction(func);
      setFadeIn(true);
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar categories={mathFunctions} onSelectFunction={handleSelectFunction} />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className={`transition-all duration-300 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {selectedFunction ? (
              <div className="max-w-3xl mx-auto">
                <div className="mb-6 pb-4 border-b border-border">
                  <h1 className="text-2xl font-bold mb-2">{selectedFunction.name}</h1>
                  <p className="text-muted-foreground">{selectedFunction.description}</p>
                </div>

                <div className="mb-8 p-5 rounded-lg border border-border bg-card/50">
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-muted-foreground" />
                    Parameters
                  </h2>
                  {selectedFunction.parameters.length > 0 ? (
                    <ul className="space-y-3">
                      {selectedFunction.parameters.map((param, index) => (
                        <li key={index} className="flex flex-col hover-scale p-3 rounded-md border border-border bg-background transition-colors">
                          <div className="flex items-center">
                            <span className="font-medium text-foreground">{param.name}</span>
                            <code className="ml-2 text-sm bg-secondary px-2 py-0.5 rounded font-mono">{param.type}</code>
                            {param.default && (
                              <span className="ml-2 text-xs text-muted-foreground font-mono">
                                = {param.default}
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-muted-foreground mt-1">{param.description}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground italic">No parameters</p>
                  )}
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-muted-foreground" />
                    Return Type
                  </h2>
                  <code className="text-sm bg-secondary px-3 py-2 rounded-md font-mono">{selectedFunction.returnType}</code>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-muted-foreground" />
                    Example
                  </h2>
                  <CodeBlock code={selectedFunction.example} language="kotlin" />
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <Code2 className="h-5 w-5 mr-2 text-muted-foreground" />
                    Implementation
                  </h2>
                  <CodeBlock code={selectedFunction.code} language="kotlin" />
                </div>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">MathStuff Documentation</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  A simple Kotlin library for common mathematical and geometric calculations
                </p>
                <div className="text-left p-6 border border-border rounded-lg bg-card/50 shadow-sm">
                  <h2 className="text-xl font-semibold mb-6">Getting Started</h2>
                  <p className="mb-4">Add the JitPack repository to your <code className="text-sm bg-muted px-2 py-0.5 rounded font-mono">settings.gradle.kts</code> file:</p>
                  <CodeBlock
                    code={`maven { url = uri("https://jitpack.io") }`}
                    language="kotlin"
                  />

                  <p className="mt-6 mb-4">Add the dependency:</p>
                  <CodeBlock
                    code={`implementation("com.github.zahid4kh:mathstuff:1.0.1")`}
                    language="kotlin"
                  />

                  <p className="mt-6 mb-4">Basic usage:</p>
                  <CodeBlock
                    code={`// Import the package
import math.Math

// Create an instance
val math = Math()

// Use the functions
val area = math.triangleArea(3f, 4f, 5f)
println(area) // 6.0
`}
                    language="kotlin"
                  />
                </div>
                <p className="mt-8 text-muted-foreground flex items-center justify-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Select a function from the sidebar to view its documentation
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;