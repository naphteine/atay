import { PropsWithChildren, createContext, useContext, useState } from "react";

type Auth = true | false;

type AuthState = {
  auth: Auth;
  setAuth(auth: Auth): void;
};

const AuthContext = createContext<AuthState | null>(null);

const useAuth = (): AuthState => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Please use AuthProvider in parent component");
  }

  return context;
};

export const AuthProvider = (props: PropsWithChildren) => {
  const [auth, setAuth] = useState<Auth>(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default useAuth;
