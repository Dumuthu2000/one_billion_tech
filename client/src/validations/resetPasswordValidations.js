export const validateResetPassword=(formData)=>{
    const newErrors = {};
    
    // New Password validation
    if (!formData.newPassword) {
      newErrors.newPassword = 'New Password is required';
    } else if (formData.newPassword.length < 2) {
      newErrors.newPassword = 'Password must be at least 2 characters';
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.newPassword != formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is invalid';
    }

    // Always return an object
    return newErrors;
}