import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CodeBlock from './components/CodeBlock';
import { mathFunctions } from './content/mathFunctions';

function App() {
  const [selectedFunction, setSelectedFunction] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar categories={mathFunctions} onSelectFunction={setSelectedFunction} />
        <main className="flex-1 p-6 overflow-y-auto">
          {selectedFunction ? (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl font-bold mb-2">{selectedFunction.name}</h1>
              <p className="text-muted-foreground mb-6">{selectedFunction.description}</p>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Parameters</h2>
                {selectedFunction.parameters.length > 0 ? (
                  <ul className="space-y-2">
                    {selectedFunction.parameters.map((param, index) => (
                      <li key={index} className="flex flex-col">
                        <span className="font-medium">{param.name}: <code className="text-sm bg-muted px-1 py-0.5 rounded">{param.type}</code></span>
                        <span className="text-sm text-muted-foreground">{param.description}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">No parameters</p>
                )}
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Return Type</h2>
                <code className="text-sm bg-muted px-2 py-1 rounded">{selectedFunction.returnType}</code>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Example</h2>
                <CodeBlock code={selectedFunction.example} language="kotlin" />
              </div>
              
              <div>
                <h2 className="text-lg font-semibold mb-2">Implementation</h2>
                <CodeBlock code={selectedFunction.code} language="kotlin" />
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">MathStuff Documentation</h1>
              <p className="text-xl text-muted-foreground mb-8">
                A simple Kotlin library for common mathematical and geometric calculations
              </p>
              <div className="text-left p-6 border border-border rounded-lg bg-card">
                <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
                <p className="mb-4">Add the JitPack repository to your <code className="text-sm bg-muted px-1 py-0.5 rounded">settings.gradle.kts</code> file:</p>
                <CodeBlock 
                  code='maven { url = uri("https://jitpack.io") }' 
                  language="kotlin"
                />
                
                <p className="mt-6 mb-4">Add the dependency:</p>
                <CodeBlock 
                  code='implementation("com.github.zahid4kh:mathstuff:1.0.1")' 
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
              <p className="mt-8 text-muted-foreground">
                Select a function from the sidebar to view its documentation
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;