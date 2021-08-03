import { Dispatch } from "react"
import cookies from 'js-cookie';
import { service } from "../../api";
import { AuthAction, AuthActionTypes } from "../../types/auth"
import { TOKEN_NAME } from "../../constants";
import { IAuthErrorDTO, IAuthSuccessDTO, IAuthUserDTO } from "../../dto/auth.dto";

export const signIn = (values: IAuthUserDTO) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.SUBMIT });
      const { data }: { data: IAuthSuccessDTO | IAuthErrorDTO } = await service.post('/login/', values);
      if(data.success) {
        cookies.set(TOKEN_NAME, data.token);
        dispatch({ type: AuthActionTypes.SIGN_IN_SUCCESS, payload: values.username });
      } else {
        dispatch({ type: AuthActionTypes.SUBMIT_ERROR, payload: data.message });
      }
    } catch (e) {
      dispatch({ type: AuthActionTypes.SUBMIT_ERROR, payload: 'Server error. Try later.' });
    }
  }
}

export const signUp = (values: IAuthUserDTO) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.SUBMIT });
      const { data }: { data: IAuthSuccessDTO | IAuthErrorDTO } = await service.post('/register/', values);
      if(data.success) {
        cookies.set(TOKEN_NAME, data.token);
        dispatch({ type: AuthActionTypes.SIGN_UP_SUCCESS, payload: values.username });
      } else {
        dispatch({ type: AuthActionTypes.SUBMIT_ERROR, payload: data.message });
      }
    } catch (e) {
      dispatch({ type: AuthActionTypes.SUBMIT_ERROR, payload: 'Server error. Try later.' });
    }
  }
}

export const signOut = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    cookies.remove(TOKEN_NAME);
    dispatch({ type: AuthActionTypes.SIGN_OUT });
  }
}