import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const ChangePassword = () => {
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const [errors, setErrors] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handlePasswordChange = (e, field) => {
    setPasswords(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // Clear errors when user starts typing
    setErrors(prev => ({
      ...prev,
      [field]: ''
    }));
  };

  const validatePasswords = () => {
    let isValid = true;
    const newErrors = {};

    if (!passwords.current) {
      newErrors.current = 'Current password is required';
      isValid = false;
    }

    if (!passwords.new) {
      newErrors.new = 'New password is required';
      isValid = false;
    } else if (passwords.new.length < 8) {
      newErrors.new = 'Password must be at least 8 characters long';
      isValid = false;
    }

    if (!passwords.confirm) {
      newErrors.confirm = 'Please confirm your new password';
      isValid = false;
    } else if (passwords.new !== passwords.confirm) {
      newErrors.confirm = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');

    if (!validatePasswords()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSuccessMessage('Password changed successfully!');
      setIsSubmitting(false);
      setPasswords({ current: '', new: '', confirm: '' });
    }, 1500);
  };

  const renderPasswordInput = (field, label, placeholder) => (
    <div className="space-y-2">
      <label className="flex items-center text-sm font-medium text-gray-700">
        <Lock size={16} className="mr-2" />
        {label}
      </label>
      <div className="relative">
        <input
          type={showPasswords[field] ? "text" : "password"}
          placeholder={placeholder}
          value={passwords[field]}
          onChange={(e) => handlePasswordChange(e, field)}
          className={`w-full p-3 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors
            ${errors[field] ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'}`}
        />
        <button
          type="button"
          onClick={() => togglePasswordVisibility(field)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPasswords[field] ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
      {errors[field] && (
        <div className="flex items-center text-red-600 text-sm mt-1">
          <AlertCircle size={14} className="mr-1" />
          {errors[field]}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-xl mx-auto">
        {/* Back button */}
        <Link to={`/profile`} className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Profile
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Change Password</h1>
            <p className="text-sm text-gray-500 mt-1">
              Please enter your current password and choose a new password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {renderPasswordInput('current', 'Current Password', 'Enter your current password')}
            {renderPasswordInput('new', 'New Password', 'Enter your new password')}
            {renderPasswordInput('confirm', 'Confirm New Password', 'Confirm your new password')}

            {/* Success Message */}
            {successMessage && (
              <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md">
                <CheckCircle size={16} className="mr-2" />
                {successMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Changing Password...
                </span>
              ) : (
                'Change Password'
              )}
            </button>
          </form>

          {/* Password Requirements */}
          <div className="px-6 pb-6">
            <div className="bg-gray-50 rounded-md p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
                  Minimum 8 characters long
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
                  At least one uppercase letter
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
                  At least one number
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
                  At least one special character
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;