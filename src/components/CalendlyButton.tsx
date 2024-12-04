import React from "react";
import { PopupButton } from "react-calendly";

interface CalendlyButtonProps {
  url: string;
  text?: string;
}

export const CalendlyButton: React.FC<CalendlyButtonProps> = ({
  url,
  text = "Start Building",
}) => {
  return (
    <div className="all-[unset] box-border inline-flex h-14 items-center justify-center p-4">
      <PopupButton
        url={url}
        rootElement={document.getElementById("root")!}
        text={text}
        styles={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "inherit",
          fontWeight: "bold",
          padding: "0",
          width: "100%",
        }}
      />
    </div>
  );
};
