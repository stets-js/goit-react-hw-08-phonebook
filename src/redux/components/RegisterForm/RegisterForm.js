import { useDispatch } from 'react-redux';
import { register } from '../../auth/authOperations';
import css from '../RegisterForm/RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <h1 className={css.formTitle}>Registration</h1>
      <label className={css.label}>
        <p className={css.title}>
          Username <sup className={css.sup}>*</sup>
        </p>
        <input type="text" name="name" className={css.input} />
      </label>
      <label className={css.label}>
        <p className={css.title}>
          Email <sup className={css.sup}>*</sup>
        </p>
        <input type="email" name="email" className={css.input} />
      </label>
      <label className={css.label}>
        <p className={css.title}>
          Password <sup className={css.sup}>*</sup>
        </p>
        <input type="password" name="password" className={css.input} />
      </label>
      <button type="submit" className={css.btn}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
