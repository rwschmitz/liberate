import React from 'react';
import PropTypes from 'prop-types';
import { TextStyles, ViewStyles } from '../components/Styles';
import CustomButton from '../components/CustomButton';

class Dashboard extends React.Component {
  render() {

    const { displayName, signOut } = this.props;

    return (
      <ViewStyles>
        <TextStyles textType="emphasis">How are you today, { displayName }?</TextStyles>
        <CustomButton
          buttonFunction={ () => signOut() }
          buttonType=""
          copyContent="Sign out"
        />
      </ViewStyles>
    );
  }
}

export default Dashboard;

Dashboard.propTypes = {
  displayName: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired
}
