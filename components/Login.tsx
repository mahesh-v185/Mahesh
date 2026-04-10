import React, { useState, useEffect } from 'react';
import { User, Lock, Eye, EyeOff, RefreshCw } from 'lucide-react';
import { Banner } from './Banner';

interface LoginProps {
  onLoginSuccess: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('Student');
  const [captcha, setCaptcha] = useState('');

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'U24AN24S0017' && password === 'Mahi_143') {
      onLoginSuccess();
    } else {
      setError('Invalid username or password');
    }
  };

  const tabs = ['State Admin', 'University', 'College/PG Center', 'Student', 'KSOU Reg Centre'];

  return (
    <div className="min-h-screen bg-gray-100">
      <Banner />
      <div className="flex items-center justify-center p-4">
        <div className="bg-[#07294D] p-6 rounded-xl shadow-2xl w-full max-w-lg text-white">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 bg-gray-300 p-1 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
                    activeTab === tab ? 'bg-[#EF731B] text-white' : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'Student' && (
            <div className="flex justify-center gap-4 mb-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="studentType" defaultChecked className="accent-[#EF731B]" /> Regular Student
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="studentType" className="accent-[#EF731B]" /> KSOU Student
              </label>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 bg-[#07294D] border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF731B]"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 bg-[#07294D] border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF731B]"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="text-right text-xs">
              <a href="#" className="text-[#EF731B] hover:underline">Forgot Password?</a>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Enter Captcha</label>
              <div className="flex gap-2">
                <input type="text" value={captcha} readOnly className="w-24 py-2 text-center bg-gray-200 text-black font-bold rounded-md tracking-widest" />
                <button type="button" onClick={generateCaptcha} className="p-2 bg-gray-600 rounded-md hover:bg-gray-500">
                  <RefreshCw size={18} />
                </button>
                <input type="text" className="flex-1 py-2 px-3 bg-[#07294D] border border-gray-500 rounded-md" placeholder="Enter Captcha" />
              </div>
            </div>

            {error && <p className="text-red-400 text-xs text-center">{error}</p>}

            <button
              type="submit"
              className="w-full bg-[#EF731B] text-white py-2 rounded-md font-bold hover:bg-[#d66518] transition-colors"
            >
              Log In
            </button>
          </form>

          <div className="text-center mt-6 text-sm">
            <a href="#" className="text-[#EF731B] hover:underline font-medium">New Candidate Registration?</a>
          </div>
        </div>
      </div>
    </div>
  );
};
