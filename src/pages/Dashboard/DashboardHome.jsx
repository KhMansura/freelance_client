import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const DashboardHome = () => {
  // Demo Data - In a real app, fetch these counts from backend
  const stats = [
    { id: 1, name: 'Total Jobs Posted', value: '12', color: 'bg-primary' },
    { id: 2, name: 'Active Applications', value: '48', color: 'bg-secondary' },
    { id: 3, name: 'Earnings', value: '$2,400', color: 'bg-accent' },
  ];

  const chartData = [
    { name: 'Jan', jobs: 4 },
    { name: 'Feb', jobs: 7 },
    { name: 'Mar', jobs: 5 },
    { name: 'Apr', jobs: 10 },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className={`${stat.color} p-6 rounded-[2rem] text-white shadow-xl shadow-base-300`}>
            <p className="opacity-80 font-medium">{stat.name}</p>
            <h3 className="text-4xl font-black">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-base-100 p-8 rounded-[2.5rem] border border-base-300 shadow-sm">
        <h3 className="text-xl font-bold mb-6">Posting Activity</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: '#f2f2f2'}} />
              <Bar dataKey="jobs" fill="#570df8" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;