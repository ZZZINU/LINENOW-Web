import axios, { AxiosError } from 'axios';

const instance = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: '',
  withCredentials: false, //크로스 도메인 요청 시 쿠키, HTTP 인증 및 클라이언트 SSL 인증서를 사용하도록 허용한다.
});

interface BaseDTO<T> {
  status: string;
  code: number;
  data: T;
  message: string;
}

export interface EmptyDTO {
  status: string;
  code: number;
  message: string;
}

// 공통 응답 처리 함수
const handleResponse = <T>(response: BaseDTO<T>): EmptyDTO => {
  console.log(
    `code: ${response.code} (${response.status})\nmessage: ${response.message}`
  );

  return {
    status: response.status,
    message: response.message,
    code: response.code,
  };
};

export const getResponse = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await instance.get<BaseDTO<T>>(url, {
      headers: {
        Authorization: `Bearer `,
      },
    });

    console.log(
      `[GET] ${url}
      code: ${response.data.code} (${response.data.status})
      message: ${response.data.message}`
    );

    const data = response.data.data;
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;

    console.error('Response error:', axiosError);
    return null;
  }
};

export const deleteResponse = async (url: string): Promise<EmptyDTO | null> => {
  try {
    const response = await instance.delete<BaseDTO<EmptyDTO>>(url, {
      headers: {
        Authorization: `Bearer `,
      },
    });

    return handleResponse(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Response error:', axiosError);
    return null;
  }
};

export const postResponse = async (url: string): Promise<EmptyDTO | null> => {
  try {
    const response = await instance.post<BaseDTO<EmptyDTO>>(url, {
      headers: {
        Authorization: `Bearer `,
      },
    });

    return handleResponse(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Response error:', axiosError);
    return null;
  }
};
