'use client';

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Charts = ({ sales, roleStats, darkMode }) => {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);

  // Line Chart Data
  const lineChartData = {
    labels: sales.map((s) => s.month),
    datasets: [
      {
        label: 'Monthly Sales',
        data: sales.map((s) => s.sales),
        fill: true,
        borderColor: '#6366f1',
        backgroundColor: darkMode 
          ? 'rgba(99, 102, 241, 0.1)' 
          : 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#6366f1',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // Bar Chart Data
  const barChartData = {
    labels: roleStats.map((r) => r.role),
    datasets: [
      {
        label: 'Users per Role',
        data: roleStats.map((r) => r.count),
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderColor: [
          '#6366f1',
          '#ec4899',
          '#10b981',
          '#f59e0b',
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  // Common options for both charts
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: darkMode ? '#1e293b' : '#fff',
        titleColor: darkMode ? '#f1f5f9' : '#1e293b',
        bodyColor: darkMode ? '#cbd5e1' : '#64748b',
        borderColor: darkMode ? '#334155' : '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        usePointStyle: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: darkMode ? '#94a3b8' : '#64748b',
        },
      },
      y: {
        grid: {
          color: darkMode ? '#334155' : '#e2e8f0',
        },
        ticks: {
          color: darkMode ? '#94a3b8' : '#64748b',
        },
      },
    },
  };

  // Line Chart specific options
  const lineOptions = {
    ...commonOptions,
    plugins: {
      ...commonOptions.plugins,
      tooltip: {
        ...commonOptions.plugins.tooltip,
        callbacks: {
          label: (context) => `Sales: $${context.parsed.y.toLocaleString()}`,
        },
      },
    },
  };

  // Bar Chart specific options
  const barOptions = {
    ...commonOptions,
    plugins: {
      ...commonOptions.plugins,
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          color: darkMode ? '#f1f5f9' : '#1e293b',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Line Chart */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700/50 animate-fade-in stagger-4 opacity-0">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
          Monthly Sales
        </h3>
        <div className="h-72">
          <Line ref={lineChartRef} data={lineChartData} options={lineOptions} />
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700/50 animate-fade-in stagger-5 opacity-0">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
          Users by Role
        </h3>
        <div className="h-72">
          <Bar ref={barChartRef} data={barChartData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default Charts;

