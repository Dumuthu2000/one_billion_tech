import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, Settings, ChevronDown } from 'lucide-react';
import useAuthenticate from '../hooks/useAuthenticate';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();
  const { handleLogout } = useAuthenticate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const username = user.data.email.toString().split('@')[0].charAt(0).toUpperCase() + 
    user.data.email.toString().split('@')[0].slice(1);

  const handleUserLogout = async(e) => {
    e.preventDefault();
    try {
      await handleLogout();
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const closeDropdown = () => {
    setIsProfileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-6 py-4">
            {/* Logo and Welcome Message */}
            <div className="flex items-center space-x-2">
              <Link 
                to="/dashboard" 
                className="text-xl font-semibold text-white hover:text-purple-200 transition-colors"
              >
                <span className="bg-gradient-to-r from-purple-200 via-purple-100 to-white bg-clip-text text-transparent">
                  {username ? `Welcome, ${username}` : 'User'}
                </span>
              </Link>
            </div>

            {/* Profile Section */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group border border-white/20"
                aria-label="Open profile menu"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
                  <User className="h-4 w-4" />
                </div>
                <span className="text-gray-100 font-medium hidden sm:block">Account</span>
                <ChevronDown className={`h-4 w-4 text-gray-200 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Enhanced Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg bg-slate-800 border border-purple-500/20 transform transition-all duration-300">
                  <div className="p-2 space-y-1">
                    <div className="px-3 py-2 text-sm text-gray-400">
                      Signed in as <br />
                      <span className="font-medium text-purple-200">{user.data.email}</span>
                    </div>
                    <div className="h-px bg-gray-700 my-2" />
                    <Link
                      to="/profile"
                      className="flex items-center px-3 py-2 text-sm text-gray-200 rounded-lg hover:bg-white/10 transition-colors"
                      onClick={closeDropdown}
                    >
                      <User className="h-4 w-4 mr-2 text-purple-400" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-3 py-2 text-sm text-gray-200 rounded-lg hover:bg-white/10 transition-colors"
                      onClick={closeDropdown}
                    >
                      <Settings className="h-4 w-4 mr-2 text-purple-400" />
                      Settings
                    </Link>
                    <div className="h-px bg-gray-700 my-2" />
                    <button
                      onClick={handleUserLogout}
                      className="flex items-center w-full px-3 py-2 text-sm text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer with subtle gradient shadow */}
      <div className="h-16 bg-gradient-to-b from-slate-900/5 to-transparent"></div>
    </>
  );
};

export default Navbar;