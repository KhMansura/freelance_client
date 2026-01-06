
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    const [acceptedTasks, setAcceptedTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                // Fetch all jobs for the current user
                const jobsRes = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`, {
                    params: { email: user?.email }
                });
                
                // Fetch accepted tasks for the current user
                const tasksRes = await axios.get(`${import.meta.env.VITE_API_URL}/accepted-tasks`, {
                    params: { email: user?.email }
                });

                setJobs(jobsRes.data);
                setAcceptedTasks(tasksRes.data);
            } catch (err) {
                console.error("Dashboard fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        if (user?.email) fetchDashboardData();
    }, [user]);

    // Calculate Real Stats for Overview Cards
    const totalEarnings = jobs.reduce((sum, job) => sum + (parseFloat(job.minPrice) || 0), 0);
    const stats = [
        { id: 1, name: 'Jobs Posted', value: jobs.length, color: 'bg-primary' },
        { id: 2, name: 'Accepted Tasks', value: acceptedTasks.length, color: 'bg-secondary' },
        { id: 3, name: 'Potential Revenue', value: `$${totalEarnings}`, color: 'bg-accent' },
    ];

    // Prepare Dynamic Chart Data
    const categoryCounts = jobs.reduce((acc, job) => {
        acc[job.category] = (acc[job.category] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.keys(categoryCounts).map(cat => ({
        name: cat.split(' ')[0], 
        count: categoryCounts[cat]
    }));

    const COLORS = ['#570df8', '#f000b8', '#37cdbe', '#3d4451'];

    if (loading) return <div className="flex justify-center p-20"><span className="loading loading-spinner loading-lg"></span></div>;

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-black italic uppercase">Dashboard <span className="text-primary">Overview</span></h2>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.id} className={`${stat.color} p-8 rounded-[2rem] text-white shadow-xl`}>
                        <p className="opacity-80 font-bold uppercase text-xs tracking-widest">{stat.name}</p>
                        <h3 className="text-5xl font-black mt-2">{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Dynamic Chart Section */}
                <div className="bg-base-100 p-8 rounded-[2.5rem] border border-base-300 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 italic uppercase">Jobs by Category</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="count" radius={[10, 10, 0, 0]}>
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Dynamic Data Table */}
                <div className="bg-base-100 p-8 rounded-[2.5rem] border border-base-300 shadow-sm overflow-hidden">
                    <h3 className="text-xl font-bold mb-6 italic uppercase">Recent Activity</h3>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr className="text-primary font-black uppercase text-xs">
                                    <th>Job Title</th>
                                    <th>Category</th>
                                    <th>Price Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.slice(0, 5).map((job) => (
                                    <tr key={job._id} className="hover:bg-base-200 transition-colors">
                                        <td className="font-bold text-sm">{job.title}</td>
                                        <td><span className="badge badge-ghost badge-sm">{job.category}</span></td>
                                        <td className="font-mono text-xs">${job.minPrice} - ${job.maxPrice}</td>
                                    </tr>
                                ))}
                                {jobs.length === 0 && <tr><td colSpan="3" className="text-center opacity-50 italic">No jobs found</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;