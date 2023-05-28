import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/api/auth.slice";
export const SignIn = () => {
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    //TODO
    const payload = {
      email: "test_ya@yandex.ru",
      password: "12345678",
      rememberMe: false,
    };
    dispatch(authThunks.login(payload));
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginHandler}>login</button>
    </div>
  );
};
