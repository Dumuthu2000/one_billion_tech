export const validateChangePassword=(formData)=>{
    const newErrors = {};
    
    // Current password validation
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }
    
    // New Password validation
    if (!formData.newPassword) {
      newErrors.newPassword = 'New Password is required';
    } else if (formData.newPassword.length < 2) {
      newErrors.newPassword = 'Password must be at least 2 characters';
    }
    
    // Confirm password validation
    if (!formData.confirmNewPassword) {
      newErrors.confirmNewPassword = 'New Password is required';
    } else if (formData.newPassword != formData.confirmNewPassword) {
      newErrors.confirmNewPassword = 'Confirm password is invalid';
    }

    // Always return an object
    return newErrors;
}