import React from 'react';

//strapi function
import loginUser from '../strapi/loginUser';
import registerUser from '../strapi/registerUser';

//handle user
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user';

export default function Login() {
  const history = useHistory();
  // setup user context
  const { userLogin, alert, showAlert } = React.useContext(UserContext);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('default');
  const [isRegistered, setIsRegistered] = React.useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  const toggleLoginRegister = () => {
    setIsRegistered((prevRegister) => {
      let isRegistered = !prevRegister;
      isRegistered ? setUsername('default') : setUsername('');
      return isRegistered;
    });
  };

  const handleSubmit = async (e) => {
    showAlert({
      msg: 'loading userdata...',
    });
    e.preventDefault();
    let response;
    if (isRegistered) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }
    if (response) {
      const {
        jwt: token,
        user: { username },
      } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      showAlert({ msg: `Hi ${username} you successfully logged in!` });
      history.push('/products');
    } else {
      showAlert({
        msg: 'There was an error, please try again...',
        type: 'danger',
      });
    }
  };

  return (
    <section className='form section'>
      <h2 className='section-title'>{isRegistered ? 'Login' : 'Register'}</h2>
      <form className='login-form'>
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* end of single input */}
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* end of single input */}
        {/* single input */}
        {!isRegistered && (
          <div className='form-control'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        {/* end of single input */}
        {isEmpty && (
          <p className='form-empty'>Please fill out all form fields</p>
        )}
        {!isEmpty && (
          <button
            type='submit'
            className='btn btn-block btn-primary'
            onClick={handleSubmit}
          >
            submit
          </button>
        )}
        <p className='register-link'>
          {isRegistered ? 'need to register' : 'already registered'}
          <button type='button' onClick={toggleLoginRegister}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
}
