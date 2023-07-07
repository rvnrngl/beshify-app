import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsClipboard, BsGithub, BsCheck2 } from "react-icons/bs";

function App() {
  const [theme, setTheme] = useState(null);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // check if windows prefer theme is dark mode
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // chnage theme to dark or light mode
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // toggle theme
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  //beshifying the text
  const handleChange = (event) => {
    const text = event.target.value;
    const beshifiedText = text.replace(/\s/g, "🤸");
    setInput(text);
    setOutput(beshifiedText);
  };

  //copying text
  const handleCopy = () => {
    if (input.length > 0) {
      navigator.clipboard.writeText(output);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center gap-2 px-5">
        <div className="bg-white shadow-lg dark:bg-gray-600 w-full max-w-[400px] text-center rounded-lg p-5">
          {/* title */}
          <h1 className="text-3xl md:text-4xl py-3 text-teal-500 text-center font-sharpie font-extrabold">
            🤸‍♀️ BeshiFy 🤸‍♀️
          </h1>
          <div className="text-gray-800 dark:text-gray-200 rounded-lg overflow-hidden mb-4">
            {/* input */}
            <div className="flex py-2 gap-3 mb-4">
              <input
                type="text"
                placeholder="Enter text here"
                value={input}
                onChange={handleChange}
                className="w-full rounded-lg text-md outline-none border border-gray-400 dark:border-none bg-gray-50 dark:bg-gray-700 text-black dark:text-gray-200 ml-1 p-3"
              />
            </div>
            {/* output */}
            <div className="border border-gray-400 dark:border-none rounded-lg overflow-hidden">
              <div className="bg-gray-300 dark:bg-gray-700 flex justify-between px-4 py-3 rounded-tl-lg rounded-tr-lg">
                <span>Beshified text</span>
                <button onClick={handleCopy}>
                  {isCopied === true ? (
                    <BsCheck2 size={18} />
                  ) : (
                    <BsClipboard size={18} />
                  )}
                </button>
              </div>
              <div className="bg-gray-50 text-left dark:bg-gray-950 p-4 min-h-[150px]">
                {output}
              </div>
            </div>
          </div>
          <button onClick={handleTheme} className="bg-teal-500 p-2 rounded-lg">
            {theme === "dark" ? (
              <MdLightMode className="text-gray-200" size={25} />
            ) : (
              <MdDarkMode className=" text-gray-800" size={25} />
            )}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-800 text-lg dark:text-gray-200">
            Created by{" "}
            <a
              href="https://github.com/rvnrngl"
              target="_blank"
              className=" hover:text-teal-500 hover:underline"
            >
              Raven Ringel
            </a>
          </p>
          <a
            href="https://github.com/rvnrngl/beshify-app"
            target="_blank"
            className="flex items-center text-gray-800 hover:text-teal-500 dark:hover:text-teal-500 dark:text-gray-200 underline gap-1"
          >
            View source code in
            <BsGithub />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
