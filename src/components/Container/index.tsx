import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps<E extends React.ElementType = "div"> = {
  as?: E;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export function Container<E extends React.ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: ContainerProps<E>) {
  const Component = as || "div";
  return (
    <Component
      className={twMerge("p-4 bg-white rounded shadow-sm", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}