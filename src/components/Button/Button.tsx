import { LoadButton } from "./Button.styled";
import { IButtonProps } from "./Button.types";

export const Button: React.FC<IButtonProps> = ({ onHandleClickButtonLoad }) => {
  return <LoadButton onClick={onHandleClickButtonLoad}>Load more</LoadButton>;
};
