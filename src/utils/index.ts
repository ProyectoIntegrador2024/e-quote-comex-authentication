export interface IBodyResponse {
  success: boolean;
  code: number;
  message?: string;
  errors?: string[];
  data?: any;
}

export const response = (
  statusCode: number,
  success: boolean,
  message: string,
  data: any = null,
) => {
  const response: IBodyResponse = {
    code: statusCode,
    success: success,
  };
  if (message) {
    response.message = message;
  }
  if (data) {
    response.data = data;
  }

  return response;
};
