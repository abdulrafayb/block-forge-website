import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Tag = (
  props: ComponentPropsWithoutRef<"div"> & { color?: string }
) => {
  const { color, className, children } = props;

  return (
    <div
      className={twMerge(
        "bg-fuchsia-500/15 inline-flex py-1.5 px-3 text-fuchsia-500 text-xs font-heading font-extrabold uppercase tracking-wider rounded-full",
        color === "lime" && "bg-lime-500/15 text-lime-500",
        color === "cyan" && "bg-cyan-500/15 text-cyan-500",
        color === "violet" && "bg-violet-500/15 text-violet-500",
        className
      )}
    >
      {children}
    </div>
  );
};
