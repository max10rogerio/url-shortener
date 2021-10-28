import { env } from "../env";

type ResponseData<T = any> = {
  data: T;
};

export const makeResponse = <T = any>(data: T): ResponseData<T> => {
  return {
    data,
  };
};

export const makeUrl = (url: string) => {
  return `http://localhost:${env.port}/${url}`;
};
