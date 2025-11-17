import type { FC } from "react";

export type ButtonType = {
  title: string;
};

export const Button: FC<ButtonType> = ({ title }) => {
  return (
    <div className="button_item">
      <button className="univerasl_btn">{title}</button>
    </div>
  );
};
