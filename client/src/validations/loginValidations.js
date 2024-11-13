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
  }

  // Always return an object
  return newErrors;
};
