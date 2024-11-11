import React, { useEffect, useState } from 'react';
import { 
  User, 
  Mail, 
  Calendar,
  Lock,
  Edit2,
  Save
} from 'lucide-react';
import useProfile from '../hooks/useProfile';

const Profile = () => {
  const { fetchUser, loading, error, userData } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "John Doe",
    email: "john.doe@example.com",
    createdAt: "January 15, 2024",
    profileImage: "/api/placeholder/150/150"
  });

  // Fetch user data and set it to userInfo
  useEffect(() => {
    const fetchUserData = async () => {
      await fetchUser();
      if (userData) {
        setUserInfo(userData.data);
      }
    };
    fetchUserData();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Profile Information</h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage your personal information and account settings
              </p>
            </div>
            <button
              onClick={handleEditToggle}
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors w-full md:w-auto"
            >
              {isEditing ? (
                <>
                  <Save size={16} />
                  Save
                </>
              ) : (
                <>
                  <Edit2 size={16} />
                  Edit
                </>
              )}
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Image Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={userInfo.profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                {isEditing && (
                  <button 
                    className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md"
                  >
                    <Edit2 size={16} />
                  </button>
                )}
              </div>
              <button className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                Change Password
                <Lock size={16} className="ml-2" />
              </button>
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
                  disabled={!isEditing}
                  onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}
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
                  disabled={!isEditing}
                  onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
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
      </div>
    </div>
  );
};

export default Profile;
