'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import Charts from '../../components/Charts';
import api from '../../lib/api';
import { Loader2, AlertTriangle, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

export default function Analytics() {
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
        setError('Failed to load analytics data. Please try again.');
        console.error('Error fetching analytics data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate analytics metrics
  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'Active').length;
  const totalSales = sales.reduce((acc, curr) => acc + curr.sales, 0);
  const avgMonthlySales = totalSales / 12;
  const maxSale = Math.max(...sales.map(s => s.sales));
  const maxSaleMonth = sales.find(s => s.sales === maxSale)?.month;

  const analyticsCards = [
    {
      title: 'Total Revenue',
      value: `$${totalSales.toLocaleString()}`,
      icon: DollarSign,
      gradient: 'from-emerald-500 to-teal-600',
      description: 'Annual total sales',
    },
    {
      title: 'Avg Monthly Sales',
      value: `$${avgMonthlySales.toLocaleString()}`,
      icon: TrendingUp,
      gradient: 'from-indigo-500 to-purple-600',
      description: 'Average per month',
    },
    {
      title: 'Peak Month',
      value: maxSaleMonth || 'N/A',
      icon: Activity,
      gradient: 'from-pink-500 to-rose-600',
      description: `$${maxSale.toLocaleString()} revenue`,
    },
    {
      title: 'User Engagement',
      value: `${((activeUsers / totalUsers) * 100).toFixed(0)}%`,
      icon: Users,
      gradient: 'from-amber-500 to-orange-600',
      description: 'Active users rate',
    },
  ];

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mx-auto mb-4" />
          <p className="text-slate-500 dark:text-slate-400">Loading analytics...</p>
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
          Analytics
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Detailed insights and metrics about your business performance.
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsCards.map((card, index) => (
          <div
            key={card.title}
            className={`card-hover bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700/50 animate-fade-in stagger-${index + 1} opacity-0`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${card.gradient} shadow-lg`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              {card.title}
            </h3>
            <p className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
              {card.value}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <Charts sales={sales} roleStats={roleStats} darkMode={darkMode} />

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Role Distribution */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">
            User Role Distribution
          </h3>
          <div className="space-y-4">
            {roleStats.map((stat, index) => {
              const percentage = (stat.count / totalUsers) * 100;
              const colors = ['bg-indigo-500', 'bg-pink-500', 'bg-emerald-500', 'bg-amber-500'];
              return (
                <div key={stat.role}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600 dark:text-slate-300">{stat.role}</span>
                    <span className="text-slate-800 dark:text-white font-medium">{stat.count} ({percentage.toFixed(0)}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${colors[index % colors.length]} rounded-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Monthly Performance */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">
            Monthly Performance
          </h3>
          <div className="space-y-3">
            {sales.slice(-6).map((sale, index) => {
              const percentage = (sale.sales / maxSale) * 100;
              return (
                <div key={sale.month} className="flex items-center gap-4">
                  <span className="w-12 text-sm text-slate-500 dark:text-slate-400">{sale.month}</span>
                  <div className="flex-1 h-6 bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden relative">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                    <span className="absolute inset-0 flex items-center justify-end pr-3 text-xs font-medium text-white">
                      ${sale.sales.toLocaleString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

