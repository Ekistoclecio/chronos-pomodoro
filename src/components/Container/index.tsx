import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps<E extends React.ElementType = "div"> = {
  as?: E;
  className?: string;
  noPadding?: boolean;
} & React.ComponentPropsWithoutRef<E>;

export function Container<E extends React.ElementType = "div">({
  as,
  className,
  children,
  noPadding,
  ...rest
}: ContainerProps<E>) {
  const Component = as || "div";
  return (
    <Component
      className={twMerge(
        "p-4 bg-white rounded shadow-sm",
        noPadding && "p-0",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}