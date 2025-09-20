import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps<E extends React.ElementType = "div"> = {
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export function Container({
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={twMerge("p-4 bg-white rounded shadow-sm", className)}
      {...rest}
    >
      {children}
    </div>
  );
}