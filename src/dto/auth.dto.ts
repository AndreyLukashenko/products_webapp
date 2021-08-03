export interface IAuthUserDTO {
  username: string;
  password: string;
}

export interface IAuthSuccessDTO {
  success: true;
  token: string;
}

export interface IAuthErrorDTO {
  success: false,
  message: string;
}