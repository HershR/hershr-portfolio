import React, { useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [text, setText] = React.useState("Hello World");
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete(); // Call the onComplete function after typing is done
        }, 1000); // Adjust the delay before calling onComplete (1000ms = 1 second)
      }
    }, 100); // Adjust the speed of typing here (100ms per character)
    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <div className="fixed bg-background inset-0 z-50 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold ">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px]  bg-accent rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-secondary shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
}
