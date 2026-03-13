'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeProvider';
import Cards from '../components/Cards';
import Charts from '../components/Charts';
import UserTable from '../components/UserTable';
import api from '../lib/api';
import { Loader2, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  const { darkMode } = useTheme();
  const [users, setUsers] = useState([]);
  const [sales, setSales] = useState([]);
  const [roleStats, setRoleStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [usersData, salesData, roleData] = await Promise.all([
          api.getUsers(),
          api.getSales(),
          api.getRoleStats(),
        ]);

        setUsers(usersData);
        setSales(salesData);
        setRoleStats(roleData);
      } catch (err) {
        setError('Failed to load dashboard data. Please try again.');
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mx-auto mb-4" />
          <p className="text-slate-500 dark:text-slate-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-900/20 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-rose-500" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Welcome back! Here&apos;s what&apos;s happening with your business.
        </p>
      </div>

      {/* Stats Cards */}
      <Cards users={users} sales={sales} />

      {/* Charts */}
      <Charts sales={sales} roleStats={roleStats} darkMode={darkMode} />

      {/* User Table */}
      <UserTable users={users} />
    </div>
  );
}

