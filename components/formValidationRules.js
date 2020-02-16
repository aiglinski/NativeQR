const validate = ({Email, password}) => {
  const errors = {};

  if (!Email.value) {
    errors.Email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(Email.value)) {
    errors.Email = 'Email address is invalid';
  }

  if (!password.value) {
    errors.password = 'Password is required';
  }

  return errors;
};

export default validate;
