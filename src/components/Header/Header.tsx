import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { signOut } from "../../store/action-creators/auth";
import { SignInModal } from "../Modals/SignIn/SignInModal";
import { SignUpModal } from "../Modals/SignUp/SignUpModal";
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isOpenModalSignIn, setIsOpenModalSignIn] = useState(false);
  const [isOpenModalSignUp, setIsOpenModalSignUp] = useState(false);

  const { isAuthorized, username } = useTypedSelector(state => state.auth);
  const dispatch = useDispatch();

  console.log(isOpenModalSignIn);

  return (
    <>
      <header>
        <div className={`container ${styles['header-container']}`}>
          <NavLink to={ROUTES.HOME}>
            <span className={styles['header-logo']}>LOGO</span>
          </NavLink>
          {isAuthorized ? (
            <div className={styles['header-authorized']}>
              <span className={styles['header-authorized__username']}>{username}</span>
              <button 
                className={styles['header-authorized__button']}
                onClick={() => {
                  dispatch(signOut());
                }}
              >
                Sign out
              </button>
            </div>
          ) : (
            <button 
              className={styles['header-unauthorized__button']}
              onClick={() => setIsOpenModalSignIn(true)}
            >
              Sign In
            </button>
          )}
        </div>
      </header>
      <SignInModal 
        isOpen={isOpenModalSignIn} 
        onRequestClose={() => {
          console.log('test test test');
          setIsOpenModalSignIn(false);
        }}
        onSignUp={() => {
          setIsOpenModalSignIn(false);
          setIsOpenModalSignUp(true);
        }} 
      />
      <SignUpModal 
        isOpen={isOpenModalSignUp} 
        onRequestClose={() => setIsOpenModalSignUp(false)}
        onSignIn={() => {
          setIsOpenModalSignUp(false);
          setIsOpenModalSignIn(true);
        }}
      />
    </>
  )
}

export default Header;