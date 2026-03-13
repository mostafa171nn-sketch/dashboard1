'use client';

import { useTheme } from '../../context/ThemeProvider';
import DarkModeToggle from '../../components/DarkModeToggle';
import { User, Bell, Shield, Palette, Save } from 'lucide-react';

export default function Settings() {
  const { darkMode } = useTheme();

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Page Header */}
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Manage your preferences and account settings.
        </p>
      </div>

      {/* Appearance Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700/50 overflow-hidden animate-fade-in stagger-1 opacity-0">
        <div className="p-6 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
                Appearance
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Customize how the dashboard looks
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <DarkModeToggle />
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700/50 overflow-hidden animate-fade-in stagger-2 opacity-0">
        <div className="p-6 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
                Profile
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Manage your personal information
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                First Name
              </label>
              <input
                type="text"
                defaultValue="Admin"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Last Name
              </label>
              <input
                type="text"
                defaultValue="User"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="admin@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-colors">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700/50 overflow-hidden animate-fade-in stagger-3 opacity-0">
        <div className="p-6 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
                Notifications
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Configure how you receive notifications
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          {[
            { label: 'Email notifications', desc: 'Receive email updates about your account' },
            { label: 'Push notifications', desc: 'Receive push notifications on your device' },
            { label: 'Weekly digest', desc: 'Get a weekly summary of your activity' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-slate-800 dark:text-white">{item.label}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-indigo-500"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700/50 overflow-hidden animate-fade-in stagger-4 opacity-0">
        <div className="p-6 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
                Security
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Manage your account security settings
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <button className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <p className="font-medium text-slate-800 dark:text-white">Change Password</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Update your password regularly</p>
          </button>
          
          <button className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <p className="font-medium text-slate-800 dark:text-white">Two-Factor Authentication</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Add an extra layer of security</p>
          </button>
          
          <button className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <p className="font-medium text-slate-800 dark:text-white">Active Sessions</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Manage your active sessions</p>
          </button>
        </div>
      </div>
    </div>
  );
}

