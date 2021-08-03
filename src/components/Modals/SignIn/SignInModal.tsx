import { Formik } from 'formik';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { signIn } from '../../../store/action-creators/auth';
import styles from './SignInModal.module.scss';

interface ISignInModalProps {
  isOpen: boolean;
  onRequestClose?: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
  onSignUp: () => void;
}

export const SignInModal: React.FC<ISignInModalProps> = ({ isOpen, onRequestClose, onSignUp }) => {
  const { error, loading } = useTypedSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <Modal
      className={styles['sign-in-modal']}
      overlayClassName={styles['sign-in-modal_overlay']}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <span className={`material-icons ${styles['sign-in-modal_close']}`} onClick={onRequestClose}>cancel</span>
      <div className={styles['sign-in']}>
        <div className={styles['sign-in-content']}>
          <NavLink to={ROUTES.HOME}>
            <span className={styles['sign-in__logo']}>LOGO</span>
          </NavLink>
          <p className={styles['sign-in__title']}>Login with your email & password</p>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={values => {
              dispatch(signIn(values));
            }}
          >
            {(formProps) => {
              return (
                <form className={styles['sign-in-form']} onSubmit={formProps.handleSubmit}>
                  <input
                    className={styles['form-input']}
                    name='username' 
                    placeholder='Username'
                    value={formProps.values.username}
                    onChange={formProps.handleChange}
                    onBlur={formProps.handleBlur}
                  />
                  <input
                    className={styles['form-input']}
                    name='password' 
                    placeholder='Password'
                    value={formProps.values.password}
                    onChange={formProps.handleChange}
                    onBlur={formProps.handleBlur}
                  />
                  <button
                    className={styles['form-submit_button']}
                    type='submit'
                  >
                    {loading ? 'Loading...' : 'Sign In'}
                  </button>
                  {error && <span className={styles['form-error']}>{error}</span>}
                </form>
              )
            }}
          </Formik>
          <div className={styles['sign-in-has_account']}>
            <p className={styles['has_account-label']}>Don't have any account?</p>
            <button
              className={styles['has_account-button']}
              onClick={onSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
        </div>
        
    </Modal>
  )
}