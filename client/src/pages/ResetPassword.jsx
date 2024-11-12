import React, { useState } from 'react';
import useAuthenticate from '../hooks/useAuthenticate';
import { useNavigate, useSearchParams } from 'react-router-dom'; //For access URL query string parameters

const ResetPassword = () => {
    const{ resetPasswordAPI, loading, error } = useAuthenticate();
    const [searchParams] = useSearchParams();  // Get the URL search parameter
    const[formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    // Get token and email from URL query string parameters
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    const handleChnage=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmitForm=async(e)=>{
        e.preventDefault();
        try {
            await resetPasswordAPI({...formData, token, email});
            navigate('/login');
        } catch (error) {
            console.error("Password reset error:", error);
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full mx-auto">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Reset Password</h2>
                    
                    {/* {message && <p className="text-green-600">{message}</p>}
                    {error && <p className="text-red-600">{error}</p>} */}
                    
                    <form  className="space-y-6" onSubmit={handleSubmitForm}>
                        <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                New Password
                            </label>
                            <input
                                name='newPassword'
                                id="newPassword"
                                type="password"
                                onChange={handleChnage}
                                value={formData.newPassword}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
                                placeholder="Enter new password"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <input
                                name='confirmPassword'
                                id="confirmPassword"
                                type="password"
                                onChange={handleChnage}
                                value={formData.confirmPassword}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
                                placeholder="Confirm new password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
