"use client";
import signUpAction from "@/lib/actions/signUpActions";
import { useFormState } from "react-dom";

const initialState = {
  messages: {
    errors: [],
    success: "",
  },
};

function SignUp() {
  const [state, action] = useFormState(signUpAction, initialState);
  return (
    <div className="m-auto w-1/2 bg-primary">
      <form action={action} className="flex flex-col items-start gap-5 p-5">
        <div className="flex flex-col">
          <label htmlFor="username">Username:</label>
          <input className="input" type="text" id="username" name="username" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input className="input" type="email" id="email" name="email" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password:</label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
          />
        </div>

        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
      {state.messages.errors.length !== 0 &&
        state.messages.errors.map((msg: string) => <p key={msg}>{msg}</p>)}
      {state.messages.success && <p>{state.messages.success}</p>}
    </div>
  );
}

export default SignUp;
