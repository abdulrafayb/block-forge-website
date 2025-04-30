import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const TextButton = (
  props: ComponentPropsWithoutRef<"button"> & { color?: string }
) => {
  const { color, children } = props;

  return (
    <button
      className={twMerge(
        "text-fuchsia-500 text-sm font-heading font-extrabold uppercase tracking-wider",
        color === "lime" && "text-lime-500",
        color === "cyan" && "text-cyan-500",
        color === "violet" && "text-violet-500"
      )}
    >
      {children}
    </button>
  );
};
