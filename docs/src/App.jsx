import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CodeBlock from "./components/CodeBlock";
import { mathFunctions } from "./content/mathFunctions";
import {
  Calculator,
  BookOpen,
  Code2,
  ArrowRight,
  Menu,
  X,
  Loader2,
} from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      const staticLoader = document.getElementById("initial-loader");
      if (staticLoader) {
        staticLoader.style.opacity = "0";
        setTimeout(() => {
          staticLoader.style.display = "none";
          document.body.style.overflow = "";
        }, 300);
      }

      setContentLoaded(true);

      setTimeout(() => {
        setFadeIn(true);
      }, 50);
    }, 500);

    return () => clearTimeout(loaderTimeout);
  }, []);

  const handleSelectFunction = (func) => {
    setFadeIn(false);
    setTimeout(() => {
      setSelectedFunction(func);
      setFadeIn(true);
    }, 200);
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-background text-foreground transition-opacity duration-300 ease-in-out ${
        contentLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />

      <div className="md:hidden fixed bottom-4 right-4 z-30">
        <Button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="rounded-full w-12 h-12 shadow-lg flex items-center justify-center"
          aria-label="Toggle sidebar"
        >
          {isMobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-10"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      <div className="flex flex-1 relative">
        <Sidebar
          categories={mathFunctions}
          onSelectFunction={handleSelectFunction}
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />

        <main className="flex-1 p-4 md:p-6 overflow-y-auto h-[calc(100vh-64px)]">
          <div
            className={`transition-all duration-300 ${
              fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {selectedFunction ? (
              <div className="max-w-3xl mx-auto">
                <div className="mb-6 pb-4 border-b border-border">
                  <h1 className="text-xl md:text-2xl font-bold mb-2">
                    {selectedFunction.name}
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {selectedFunction.description}
                  </p>
                </div>

                <div className="mb-6 md:mb-8 p-4 md:p-5 rounded-lg border border-border bg-card/50">
                  <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center">
                    <BookOpen className="h-4 w-4 md:h-5 md:w-5 mr-2 text-muted-foreground" />
                    Parameters
                  </h2>
                  {selectedFunction.parameters.length > 0 ? (
                    <ul className="space-y-2 md:space-y-3">
                      {selectedFunction.parameters.map((param, index) => (
                        <li
                          key={index}
                          className="flex flex-col hover-scale p-2 md:p-3 rounded-md border border-border bg-background transition-colors"
                        >
                          <div className="flex items-center flex-wrap gap-2">
                            <span className="font-medium text-foreground">
                              {param.name}
                            </span>
                            <code className="text-xs md:text-sm bg-secondary px-1.5 md:px-2 py-0.5 rounded font-mono">
                              {param.type}
                            </code>
                            {param.default && (
                              <span className="text-xs text-muted-foreground font-mono">
                                = {param.default}
                              </span>
                            )}
                          </div>
                          <span className="text-xs md:text-sm text-muted-foreground mt-1">
                            {param.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground italic text-sm">
                      No parameters
                    </p>
                  )}
                </div>

                <div className="mb-6 md:mb-8">
                  <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center">
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 mr-2 text-muted-foreground" />
                    Return Type
                  </h2>
                  <code className="text-xs md:text-sm bg-secondary px-2 md:px-3 py-1.5 md:py-2 rounded-md font-mono">
                    {selectedFunction.returnType}
                  </code>
                </div>

                <div className="mb-6 md:mb-8">
                  <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center">
                    <Calculator className="h-4 w-4 md:h-5 md:w-5 mr-2 text-muted-foreground" />
                    Example
                  </h2>
                  <CodeBlock
                    code={selectedFunction.example}
                    language="kotlin"
                  />
                </div>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
                  MathStuff Documentation
                </h1>
                <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8">
                  A simple Kotlin library for common Math&Physics calculations
                </p>
                <div className="text-left p-4 md:p-6 border border-border rounded-lg bg-card/50 shadow-sm">
                  <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
                    Getting Started
                  </h2>

                  <h3 className="text-base md:text-lg font-semibold mb-3">
                    Option 1: Using build.gradle.kts
                  </h3>
                  <p className="mb-3 md:mb-4 text-sm md:text-base">
                    Your minimal module level{" "}
                    <code className="text-xs md:text-sm bg-muted px-1.5 md:px-2 py-0.5 rounded font-mono">
                      build.gradle.kts
                    </code>{" "}
                    should look like this:
                  </p>
                  <CodeBlock
                    code={`plugins {
    kotlin("jvm") version "2.1.20"
}
group = "kotlin"
version = "1.0-SNAPSHOT"
repositories {
    maven { url = uri("https://jitpack.io") }
    mavenCentral()
}
dependencies {
    testImplementation(kotlin("test"))
    implementation("com.github.zahid4kh:mathstuff:1.1.0")
}
tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(17)
}`}
                    language="kotlin"
                  />

                  <h3 className="text-base md:text-lg font-semibold mt-6 mb-3">
                    Option 2: Using settings.gradle.kts
                  </h3>
                  <p className="mb-3 md:mb-4 text-sm md:text-base">
                    1. Add the JitPack repository to your{" "}
                    <code className="text-xs md:text-sm bg-muted px-1.5 md:px-2 py-0.5 rounded font-mono">
                      settings.gradle.kts
                    </code>{" "}
                    file:
                  </p>
                  <CodeBlock
                    code={`maven { url = uri("https://jitpack.io") }`}
                    language="kotlin"
                  />

                  <p className="mt-4 md:mt-6 mb-3 md:mb-4 text-sm md:text-base">
                    2. Add the dependency to your{" "}
                    <code className="text-xs md:text-sm bg-muted px-1.5 md:px-2 py-0.5 rounded font-mono">
                      build.gradle.kts
                    </code>{" "}
                    file:
                  </p>
                  <CodeBlock
                    code={`implementation("com.github.zahid4kh:mathstuff:1.1.0")`}
                    language="kotlin"
                  />

                  <h2 className="text-base md:text-lg font-semibold mt-6 mb-3 flex items-center">
                    <Calculator className="h-4 w-4 md:h-5 md:w-5 mr-2 text-muted-foreground" />
                    Basic Usage
                  </h2>
                  <CodeBlock
                    code={`fun main(){
    val side = rectArea(4f, 5f) // calculates rectangle area

    println(side) // 20.0
}`}
                    language="kotlin"
                  />
                </div>

                <p className="mt-6 md:mt-8 text-sm md:text-base text-muted-foreground flex items-center justify-center gap-2">
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="md:hidden">Open menu to view functions</span>
                  <span className="hidden md:inline">
                    Select a function from the sidebar to view its documentation
                  </span>
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
