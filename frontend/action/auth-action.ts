import { loginType } from "@/types/auth-types";
import axios, { AxiosResponse } from "axios";

// login action
export async function login(
  data: loginType
): Promise<AxiosResponse | undefined> {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
      data
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
