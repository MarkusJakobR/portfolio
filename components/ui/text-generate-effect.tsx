"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

type WordPart = {
  text: string;
  highlight?: boolean;
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: WordPart[];
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  // let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.flatMap((word, idx) => {
        return word.text.split(" ").map((subWord, subIdx) => (
          <motion.span
            key={`${word.text}-${idx}-${subIdx}`}
            className={cn(
              "opacity-0",
              word.highlight ? "text-accent" : "text-primary"
            )}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {subWord}{" "}
          </motion.span>
        ));
      })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-[600]", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-primary text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
