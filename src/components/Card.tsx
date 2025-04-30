import type { ComponentPropsWithoutRef } from "react";
import { TextButton } from "./TextButton";
import { twMerge } from "tailwind-merge";

export const Card = (
  props: ComponentPropsWithoutRef<"div"> & {
    color?: string;
    buttonText?: string;
  }
) => {
  const { color, buttonText, className, children } = props;

  return (
    <div className={twMerge("group relative p-8 md:p-10 z-0", className)}>
      <div
        className={twMerge(
          "absolute bg-fuchsia-500 size-16 top-1.5 right-1.5 rounded-xl blur-lg opacity-0 -z-10 group-hover:opacity-100 transition duration-300",
          color === "lime" && "bg-lime-500",
          color === "cyan" && "bg-cyan-500",
          color === "violet" && "bg-violet-500"
        )}
      ></div>
      <div
        className={twMerge(
          "absolute bg-fuchsia-500 size-16 top-1.5 right-1.5 rounded-xl -z-10 group-hover:bg-fuchsia-400 transition duration-300",
          color === "lime" && "bg-lime-500 group-hover:bg-lime-400",
          color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400",
          color === "violet" && "bg-violet-500 group-hover:bg-violet-400"
        )}
      ></div>
      <div className="absolute inset-0 bg-zinc-800 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)] -z-10"></div>
      <div>{children}</div>
      <div className="flex justify-between mt-12">
        <TextButton color={color}>{buttonText || "Learn More"}</TextButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-8 text-zinc-500 -translate-x-2 group-hover:text-zinc-300 group-hover:translate-x-0 transition duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};
