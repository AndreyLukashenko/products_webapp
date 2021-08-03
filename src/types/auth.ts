export interface IAuthState {
  username: string;
  isAuthorized: boolean;
  loading: boolean;
  error: null | string;
}

export enum AuthActionTypes {
  SUBMIT = 'SUBMIT',
  SUBMIT_ERROR = 'SUBMIT_ERROR',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_OUT = 'SIGN_OUT',
}

interface IAuthSubmitAction {
  type: AuthActionTypes.SUBMIT;
}

interface IAuthSubmitErrorAction {
  type: AuthActionTypes.SUBMIT_ERROR;
  payload: string;
}

interface IAuthSignUpSuccessAction {
  type: AuthActionTypes.SIGN_IN_SUCCESS;
  payload: string;
}

interface IAuthSignInSuccessAction {
  type: AuthActionTypes.SIGN_UP_SUCCESS;
  payload: string;
}

interface IAuthSignOutAction {
  type: AuthActionTypes.SIGN_OUT;
}

export type AuthAction = IAuthSubmitAction | IAuthSubmitErrorAction | IAuthSignUpSuccessAction | IAuthSignInSuccessAction | IAuthSignOutAction;