"use client";
import { IconType } from "react-icons/lib";

interface LoginButtonProps {
  onClick: () => void;
  ButtonIcon: IconType; // Pass ButtonIcon as a prop
}

const LoginButton = ({ onClick, ButtonIcon }: LoginButtonProps) => {
  return (
    <button
      className="flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white hover:bg-info focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={onClick}
    >
      <ButtonIcon className="mr-2 h-6 w-6" />
      Login
    </button>
  );
};

export default LoginButton;
