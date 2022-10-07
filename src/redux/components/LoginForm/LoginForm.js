import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { logIn } from '../../auth/authOperations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <p className={css.title}>Email</p>
        <input type="email" name="email" className={css.input} />
      </label>
      <label className={css.label}>
        <p className={css.title}>Password</p>
        <input type="password" name="password" className={css.input} />
      </label>
      <button type="submit" className={css.btn}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
