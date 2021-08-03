import { AuthAction, AuthActionTypes, IAuthState } from "../../types/auth";
import cookies from 'js-cookie';
import { TOKEN_NAME } from "../../constants";

const initialState: IAuthState = {
  username: '',
  isAuthorized: cookies.get(TOKEN_NAME) ? true : false,
  loading: false,
  error: null,
}

export const authReducer = (state = initialState, action: AuthAction): IAuthState => {
  switch(action.type) {
    case AuthActionTypes.SUBMIT: {
      return { username: '', isAuthorized: false, loading: true, error: null };
    }
    case AuthActionTypes.SUBMIT_ERROR: {
      return { username: '', isAuthorized: false, loading: false, error: action.payload };
    }
    case AuthActionTypes.SIGN_IN_SUCCESS: {
      return { username: action.payload, isAuthorized: true, loading: false, error: null };
    }
    case AuthActionTypes.SIGN_UP_SUCCESS: {
      return { username: '', isAuthorized: true, loading: false, error: null };
    }
    case AuthActionTypes.SIGN_OUT: {
      return { username: '', isAuthorized: false, loading: false, error: null };
    }
    default:
      return state;
  }
}