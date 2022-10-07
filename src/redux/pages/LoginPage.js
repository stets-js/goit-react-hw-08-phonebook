import LoginForm from 'redux/components/LoginForm/LoginForm';
import css from '../auth/authPage.module.css';
import example from '../auth/example.png';

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <div className={css.exampleBox}>
        <img src={example} alt="example" className={css.exampleImg}></img>
        <p className={css.exampleText}>JUST TRY OUR NEW PHONEBOOK</p>
      </div>
    </>
  );
};

export default LoginPage;
