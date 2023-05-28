import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/api/auth.slice";

export const SignUp = () => {
  const dispatch = useAppDispatch();
  console.log("пробуем");

  const registerHandler = () => {
    //TODO
    const payload = {
      email: "test_ya@yandex.ru",
      password: "12345678",
    };
    dispatch(authThunks.register(payload));
  };
  //dispatch(appActions.setIsLoading({ isLoading: false }));

  return (
    <div>
      <h1>Register</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  );
};
