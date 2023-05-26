import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/api/auth.slice";

export const SignUp = () => {
  const dispatch = useAppDispatch();
  console.log("пробуем");

  const registerHandler = () => {
    dispatch(authThunks.register("nya-admin@nya.nya", "1"));
  };

  return (
    <div>
      <h1>Register</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  );
};
