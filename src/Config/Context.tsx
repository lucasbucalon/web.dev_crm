import { ReactNode, createContext, useState } from "react";

export const AuthContext = createContext<{
  logado: boolean;
  setLogado: (logado: boolean) => void;
}>({ logado: false, setLogado: () => {} });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [logado, setLogado] = useState(false);
  return (
    <AuthContext.Provider value={{ logado, setLogado }}>
      {children}
    </AuthContext.Provider>
  );
};
