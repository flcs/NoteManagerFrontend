import React, { createContext, useState, useEffect, useContext } from "react";
import Loading from "../components/Loading";
import * as auth from "../services/auth";

interface ILoginData {
  email: string;
  password: string;
}

interface IUser {
  _id: string;
  name: string;
}

interface IAuthContextData {
  signed: boolean;
  loading: boolean;
  user: IUser | null;
  signIn(data: ILoginData): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

type Props = { children: React.ReactNode };

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = async () => {
      const storagedUser = await localStorage.getItem("@RNAuth:user");

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    };

    loadStorageData();
  }, []);

  const signIn = async (data: ILoginData) => {
    const response = await auth.signIn(data);
    setUser(response.data.user);
    await localStorage.setItem("@RNAuth:token", response.data.token);
    await localStorage.setItem(
      "@RNAuth:user",
      JSON.stringify(response.data.user)
    );
  };

  const signOut = async () => {
    await localStorage.clear();
    setUser(null);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
};

export { AuthProvider, useAuth };
