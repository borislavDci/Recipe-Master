"use client";
import { IconType } from "react-icons/lib";

interface LoginButtonProps {
  onClick: () => void;
  ButtonIcon: IconType; // Pass ButtonIcon as a prop
}

const LoginButton = ({ onClick, ButtonIcon }: LoginButtonProps) => {
  return (
    <button
      className="flex items-center justify-center rounded-md bg-primary px-3 py-2 text-white hover:bg-info focus:outline-none focus:ring-2 focus:ring-info focus:ring-offset-2"
      onClick={onClick}
    >
      <ButtonIcon className="mr-1 h-4 w-4" />
      Login
    </button>
  );
};

export default LoginButton;
