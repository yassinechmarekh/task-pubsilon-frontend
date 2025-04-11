import { loginType } from "@/types/auth-types";
import axios, { AxiosResponse } from "axios";

// login action
export async function login(
  data: loginType
): Promise<AxiosResponse | undefined> {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}api/auth/login`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// verfication action
export async function verifyToken(token: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}api/auth/verify-token`,
      { token },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
