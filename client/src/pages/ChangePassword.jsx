import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import useUser from '../hooks/useUser';
import {validateChangePassword} from '../validations/changePasswordValidations';

const ChangePassword = () => {
  const{ changePasswordAPI, success } = useUser();

  const[formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const[errors, setErrors] = useState({});
  const navigate = useNavigate();

  //Handling user input changes
  const hanldeChange=(e)=>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  //Calling API
  const passwordChangeHandler=async(e)=>{
    e.preventDefault();

    //Validate form data
    const validationErrors = validateChangePassword(formData);
    setErrors(validationErrors); 

    //Check there is no validation errors
    if(Object.keys(validationErrors).length === 0){
      try {
        const {confirmNewPassword, ...newFormData} = formData
        await changePasswordAPI(newFormData);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  // Clear errors when form data changes
  useEffect(() => {
    setErrors({});
  }, [formData]);
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
          <form className="p-6 space-y-6" onSubmit={passwordChangeHandler}>
            {/* Current Password */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Lock size={16} className="mr-2" />
                Current Password
              </label>
              <input
                id='currentPassword'
                name='currentPassword'
                type="password"
                onChange={hanldeChange}
                value={formData.currentPassword}
                placeholder="Enter your current password"
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.currentPassword ? 'border-red-300' : 'border-gray-300'}`}              />
              {errors.currentPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.currentPassword}</p>
              )}
            </div>

            {/* New Password */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Lock size={16} className="mr-2" />
                New Password
              </label>
              <input
                id='newPassword'
                name='newPassword'
                type="password"
                placeholder="Enter your new password"
                onChange={hanldeChange}
                value={formData.newPassword}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.newPassword ? 'border-red-300' : 'border-gray-300'}`}              />
              {errors.newPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.newPassword}</p>
              )}
            </div>

            {/* Confirm New Password */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Lock size={16} className="mr-2" />
                Confirm New Password
              </label>
              <input
                id='confirmNewPassword'
                name='confirmNewPassword'
                type="password"
                placeholder="Confirm your new password"
                onChange={hanldeChange}
                value={formData.confirmNewPassword}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.confirmNewPassword ? 'border-red-300' : 'border-gray-300'}`}
              />
              {errors.confirmNewPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmNewPassword}</p>
              )}
            </div>

            {/* Success Message */}
            {success && (
              <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md">
              <CheckCircle size={16} className="mr-2" />
              Password changed successfully!
            </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Change Password
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
