import { IconType } from "react-icons/lib";

interface LoginButtonProps {
  ButtonIcon: IconType; // Pass ButtonIcon as a prop
}

const LoginButton = ({ ButtonIcon }: LoginButtonProps) => {
  const handleLogin = () => {
    //Handle login here
    console.log("Login button is clicked");
  };

  return (
    <button
      className="flex items-center justify-center rounded-md bg-primary px-3 py-2 text-white hover:bg-info focus:outline-none focus:ring-2 focus:ring-info focus:ring-offset-2"
      type="submit"
      onClick={handleLogin}
    >
      <ButtonIcon className="mr-1 h-4 w-4" />
      Login
    </button>
  );
};

export default LoginButton;
