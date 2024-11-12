import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Calendar, Lock } from 'lucide-react';
import useUser from '../hooks/useUser';

const Profile = () => {
  const { fetchUser, userData } = useUser();
  const [userInfo, setUserInfo] = useState({
    username: 'John Doe',
    email: 'john.doe@example.com',
    createdAt: 'January 15, 2024',
    profileImage: '/api/placeholder/150/150',
  });
  const navigate = useNavigate();

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      await fetchUser();
    };
    fetchUserData();
  }, []);

  // Update userInfo when userData is available
  useEffect(() => {
    if (userData?.data) {
      setUserInfo(userData.data);
    }
  }, [userData]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 bg-gray-900 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Profile Information</h1>
              <p className="text-sm text-gray-300 mt-1">
                Manage your personal information and account settings
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Image Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <User className="w-32 h-32 rounded-full bg-gray-300 object-cover border-4 border-white shadow-lg" />
              </div>
              <Link
                to={`/change-password`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
              >
                Change Password
                <Lock size={16} className="ml-2" />
              </Link>
            </div>

            {/* User Details Section */}
            <div className="md:col-span-2 space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <User size={16} className="mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={userInfo.username}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, username: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-md bg-white disabled:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Mail size={16} className="mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={userInfo.email}
                  disabled
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-md bg-white disabled:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              {/* Join Date Field */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Calendar size={16} className="mr-2" />
                  Member Since
                </label>
                <input
                  type="text"
                  value={userInfo.createdAt}
                  disabled
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Back to Dashboard Button */}
        <div className="p-6 bg-gray-100 border-t">
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
