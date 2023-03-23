import { request } from "@/utils/http";

//登录
export const LoginApi = <T>(params: API.GET_USER) =>
  request.post<T>("/user/login", params, { timeout: 15000 });
