import React from 'react';
import PropTypes from 'prop-types';
import { TextStyles, TextInputStyles, ViewStyles } from '../components/Styles';
import CustomButton from '../components/CustomButton';

class Landing extends React.Component {
  render() {

    const { createAccountAndSetupUser, username, email, inputEmail, inputPassword, inputUsername, password, signOut } = this.props;

    return (
      <ViewStyles>
        <TextStyles>Email</TextStyles>
        <TextInputStyles
          autoComplete="email"
          keyboardAppearance="dark"
          keyboardType="email-address"
          onChangeText={ (userCreatedEmail) => inputEmail(userCreatedEmail) }
          value={ email }
        />
        <TextStyles>Password</TextStyles>
        <TextInputStyles
          autoComplete="password"
          keyboardAppearance="dark"
          onChangeText={ (userCreatedPassword) => inputPassword(userCreatedPassword) }
          secureTextEntry={ true }
          textContentType="password"
          value={ password }
        />
        <TextStyles>Username</TextStyles>
        <TextInputStyles
          autoComplete="off"
          keyboardAppearance="dark"
          onChangeText={ (userCreatedDisplayName) => inputUsername(userCreatedDisplayName) }
          textContentType="username"
          value={ username }
        />
        <CustomButton
          buttonFunction={ () => createAccountAndSetupUser({ email, password, username }) }
          buttonType="emphasis"
          copyContent="Create Account"
        />
      </ViewStyles>
    );
  }
}

export default Landing;

Landing.propTypes = {
  createAccountAndSetupUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  inputEmail: PropTypes.func.isRequired,
  inputPassword: PropTypes.func.isRequired,
  inputUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired
}
