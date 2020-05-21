import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import UserStayType from '../UserStayType/UserStayType';
import UserLogin from '../UserLogin/UserLogin';
import './LoginContainer.css';

const LoginContainer = ({ getPurpose, setUserName, setPassword, stayType, validateUser, validatePassword }) => {
  return (
    <section className="loginContainerWrapper">
      <section className="loginContainer">
        <Title />
        <section>
          <UserStayType
            getPurpose={ getPurpose }
          />
          <UserLogin
            setUserName={ setUserName }
            setPassword={ setPassword }
            stayType={ stayType }
            validateUser={ validateUser}
            validatePassword= { validatePassword }
          />
        </section>
      </section>
    </section>
  );
}

export default LoginContainer;

LoginContainer.propTypes = {
  getPurpose: PropTypes.func,
  setUserName: PropTypes.func,
  setPassword: PropTypes.func,
  stayType: PropTypes.string,
  validateUser: PropTypes.string,
  validatePassword: PropTypes.string,
};
