export const validateLogin = (formData) => {
  const newErrors = {};

  // Email validation
  if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Please enter a valid email';
  }

  // Password validation
  if (!formData.password) {
    newErrors.password = 'Password is required';
  } else if (formData.password.length < 5) {
    newErrors.password = 'Password must be at least 5 characters';
  } else if (!/[A-Z]/.test(formData.password)) {
    newErrors.password = 'Password must contain at least one uppercase letter';
  } else if (!/[@#$%]/.test(formData.password)) {
    newErrors.password =
      'Password must contain at least one special character (@, #, $, %)';
  }

  // Always return an object
  return newErrors;
};
