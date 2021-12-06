import * as React from "react";
import tailwind from "tailwind-react-native-classnames";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export function withTailwind(Component) {
  function ComponentWithTailwind({ className, style, ...rest }) {
    const classes = className
      ? Array.isArray(className)
        ? className.flat().filter(Boolean).join(" ")
        : className
      : "";

    return (
      <Component style={[tailwind`${classes}`, style && style]} {...rest} />
    );
  }

  ComponentWithTailwind.displayName = `withTailWind(${getDisplayName(
    Component
  )})`;

  return ComponentWithTailwind;
}
