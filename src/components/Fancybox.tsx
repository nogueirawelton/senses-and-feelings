import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { ComponentProps, ReactNode, useEffect, useRef } from "react";

interface FancyBoxProps extends ComponentProps<"div"> {
  children: ReactNode;
}

function Fancybox({ children, ...props }: FancyBoxProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    NativeFancybox.bind(container, "[data-fancybox]");

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <div {...props} ref={containerRef}>
      {children}
    </div>
  );
}

export default Fancybox;
