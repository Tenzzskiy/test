import React, { FC } from "react";

interface TextProps {
  text: string;
}
export const Text: FC<TextProps> = ({ text }) => <span>{text}</span>;
