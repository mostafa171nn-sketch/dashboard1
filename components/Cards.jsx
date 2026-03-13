'use client';

import { Users, DollarSign, Activity, TrendingUp, TrendingDown } from 'lucide-react';

const Cards = ({ users, sales }) => {
  // Calculate metrics from data
  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'Active').length;
  const totalSales = sales.reduce((acc, curr) => acc + curr.sales, 0);

  const cards = [
    {
      title: 'Total Users',
      value: totalUsers,
      icon: Users,
      change: '+12%',
      trend: 'up',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Total Sales',
      value: `$${(totalSales / 1000).toFixed(1)}k`,
      icon: DollarSign,
      change: '+8%',
      trend: 'up',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Active Users',
      value: activeUsers,
      icon: Activity,
      change: '-3%',
      trend: 'down',
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={card.title}
          className={`card-hover bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700/50 animate-fade-in stagger-${index + 1} opacity-0`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${card.gradient} shadow-lg shadow-indigo-500/20`}>
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${
              card.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'
            }`}>
              {card.trend === 'up' ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {card.change}
            </div>
          </div>
          <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
            {card.title}
          </h3>
          <p className="text-3xl font-bold text-slate-800 dark:text-white">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;

