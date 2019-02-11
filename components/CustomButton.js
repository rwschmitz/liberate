import React from 'react';
import PropTypes from 'prop-types';
import { CustomButtonTextStyles, CustomButtonStyles } from './Styles';

class CustomButton extends React.Component {
  render() {
    const { buttonFunction, copyContent, buttonType } = this.props;

    return (
      <CustomButtonStyles onPress={ buttonFunction } buttonType={ buttonType }>
        <CustomButtonTextStyles buttonType={ buttonType }>
          { copyContent }
        </CustomButtonTextStyles>
      </CustomButtonStyles>
    );
  }
}

export default CustomButton;

CustomButton.defaultProps = {
  buttonType: ''
}

CustomButton.propTypes = {
  buttonFunction: PropTypes.func.isRequired,
  copyContent: PropTypes.string.isRequired,
  buttonType: PropTypes.string
}