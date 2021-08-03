import { Formik } from 'formik';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { signUp } from '../../../store/action-creators/auth';
import styles from './SignUpModal.module.scss';

interface ISignUpModalProps {
  isOpen: boolean;
  onRequestClose?: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
  onSignIn: () => void;
}

export const SignUpModal: React.FC<ISignUpModalProps> = ({ isOpen, onRequestClose, onSignIn }) => {
  const { error, loading } = useTypedSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <Modal
      className={styles['sign-up-modal']}
      overlayClassName={styles['sign-up-modal_overlay']}
      isOpen={isOpen}
    >
      <span className={`material-icons ${styles['sign-in-modal_close']}`} onClick={onRequestClose}>cancel</span>
      <div className={styles['sign-up']}>
        <div className={styles['sign-up-content']}>
          <NavLink to={ROUTES.HOME}>
            <span className={styles['sign-up__logo']}>LOGO</span>
          </NavLink>
          <p className={styles['sign-up__title']}>By signing up, you agree to our <span className={styles['terms-and-policy']}>terms & policy</span></p>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={values => {
              dispatch(signUp(values));
            }}
          >
            {(formProps) => {
              return (
                <form className={styles['sign-up-form']} onSubmit={formProps.handleSubmit}>
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
                    {loading ? 'Loading...' : 'Sign Up'}
                  </button>
                  {error && <span className={styles['form-error']}>{error}</span>}
                </form>
              )
            }}
          </Formik>
          <div className={styles['sign-up-has_account']}>
            <p className={styles['has_account-label']}>Already have an account?</p>
            <button
              className={styles['has_account-button']}
              onClick={onSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}