import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps<E extends React.ElementType = "div"> = {
  as?: E;
  className?: string;
  noBackground?: boolean;
} & React.ComponentPropsWithoutRef<E>;

export function Container<E extends React.ElementType = "div">({
  as,
  className,
  children,
  noBackground,
  ...rest
}: ContainerProps<E>) {
  const Component = as || "div";
  return (
    <Component
      className={twMerge(
        "p-4 bg-white rounded shadow-sm",
        noBackground && "bg-transparent",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}