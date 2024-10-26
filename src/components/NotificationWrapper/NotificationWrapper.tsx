/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const NotificationWrapper = ({ className }: Props): JSX.Element => {
  return (
    <div
      className={`w-8 h-8 bg-[url(https://c.animaapp.com/2fHzREgW/img/notification-2.svg)] bg-[100%_100%] ${className}`}
    />
  );
};
