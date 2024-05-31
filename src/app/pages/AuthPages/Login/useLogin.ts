/** @format */

import authClient from "@/app/services/authClient";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Credentials {
  email: string;
  password: string;
  deviceToken: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const {
    mutate: login,
    isPending: loading,
    isError: error,
    isSuccess,
  } = useMutation({
    mutationFn: (credentials: Credentials) => authClient.login(credentials),
    onSuccess: () => {
      console.log("Logged in");
      toast.success("Logged in Successfully", {
        style: {
          background: "#fff",
          color: " hsl( 187, 73%, 39%)",
          border: "none",
        },
      });
      toast.dismiss();
      navigate("/home");
    },

    onError: () => {
      toast.success("Logged in Unsuccessfull", {
        style: {
          background: "#fff",
          color: " red ",
          border: "none",
        },
      });
      toast.dismiss();
    },
  });
  return { loading, login, error, isSuccess };
};
