import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../auth/authOperations';
import css from '../RegisterForm/RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const inputChangeName = e => {
    setName(e.target.value);
  };
  const inputChangeEmail = e => {
    setEmail(e.target.value);
  };
  const inputChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    formReset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <h1 className={css.formTitle}>Registration</h1>
      <label className={css.label}>
        <p className={css.title}>
          Username <sup className={css.sup}>*</sup>
        </p>
        <input
          type="text"
          name="name"
          className={css.input}
          onChange={inputChangeName}
          value={name}
        />
      </label>
      <label className={css.label}>
        <p className={css.title}>
          Email <sup className={css.sup}>*</sup>
        </p>
        <input
          type="email"
          name="email"
          value={email}
          className={css.input}
          onChange={inputChangeEmail}
        />
      </label>
      <label className={css.label}>
        <p className={css.title}>
          Password <sup className={css.sup}>*</sup>
        </p>
        <input
          type="password"
          name="password"
          value={password}
          className={css.input}
          onChange={inputChangePassword}
        />
      </label>
      <button type="submit" className={css.btn}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
