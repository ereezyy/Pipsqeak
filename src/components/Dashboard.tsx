import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus,
  Seedling,
  Clock,
  Calendar,
  Star,
  Settings,
  User,
  Sprout,
  TrendingUp,
  Package,
  Book,
  Users,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('garden');
  const { user, signOut } = useAuth();

  const gardenPlots = [
    {
      id: 1,
      name: "Spring Vegetable Garden",
      description: "Tomatoes, peppers, and herbs for the spring season",
      plants: ["Cherry Tomatoes", "Bell Peppers", "Basil", "Oregano"],
      plantedDate: "2024-03-15",
      status: "growing",
      progress: 65,
      nextAction: "Water and check for pests"
    },
    {
      id: 2,
      name: "Herb Collection",
      description: "Culinary herbs for cooking and seasoning",
      plants: ["Rosemary", "Thyme", "Cilantro", "Parsley"],
      plantedDate: "2024-02-28",
      status: "mature",
      progress: 90,
      nextAction: "Ready for harvest"
    },
    {
      id: 3,
      name: "Winter Prep Garden",
      description: "Cold-weather vegetables and root crops",
      plants: ["Kale", "Carrots", "Brussels Sprouts"],
      plantedDate: "2024-04-01",
      status: "planning",
      progress: 15,
      nextAction: "Prepare soil and plant seeds"
    }
  ];

  const stats = [
    { label: "Active Plants", value: "24", icon: <Seedling className="h-5 w-5" /> },
    { label: "Gardens", value: "3", icon: <Sprout className="h-5 w-5" /> },
    { label: "Days Growing", value: "156", icon: <Calendar className="h-5 w-5" /> },
    { label: "Success Rate", value: "94%", icon: <TrendingUp className="h-5 w-5" /> }
  ];

  const recentActivity = [
    { action: "Watered", target: "Cherry Tomatoes", time: "2 hours ago" },
    { action: "Harvested", target: "Basil leaves", time: "1 day ago" },
    { action: "Planted", target: "New herb seeds", time: "3 days ago" },
    { action: "Added fertilizer", target: "Spring garden", time: "1 week ago" }
  ];

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-secondary-500" />
              <span className="text-2xl font-bold text-white">SeedMaster</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/planner" className="text-gray-300 hover:text-white transition-colors">
                Garden Planner
              </Link>
              <Link to="/guides" className="text-gray-300 hover:text-white transition-colors">
                Growing Guides
              </Link>
              <Link to="/tracker" className="text-gray-300 hover:text-white transition-colors">
                Seed Tracker
              </Link>
              <Link to="/community" className="text-gray-300 hover:text-white transition-colors">
                Community
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">{user?.email}</span>
                <Link 
                  to="/products"
                  className="bg-secondary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition-colors flex items-center space-x-2"
                >
                  <Package className="h-4 w-4" />
                  <span>Premium Seeds</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-gray-400 hover:text-white"
                >
                  <User className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Garden Dashboard</h1>
          <p className="text-gray-400">Track your plants, manage your garden, and grow with confidence</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className="text-secondary-500">{stat.icon}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-700 mb-6">
          <div className="flex space-x-8">
            {['garden', 'activity', 'calendar'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-secondary-500 text-secondary-500'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Garden Overview */}
        {activeTab === 'garden' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {gardenPlots.map((plot, index) => (
              <motion.div
                key={plot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{plot.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{plot.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {plot.plants.map((plant, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-secondary-900/30 text-secondary-300 rounded-full text-xs"
                        >
                          {plant}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    plot.status === 'mature' 
                      ? 'bg-secondary-900 text-secondary-300' 
                      : plot.status === 'growing'
                      ? 'bg-accent-900 text-accent-300'
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    {plot.status}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{plot.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-secondary-500 h-2 rounded-full transition-all"
                      style={{ width: `${plot.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>Planted {plot.plantedDate}</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-accent-400">Next: {plot.nextAction}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Add New Garden Card */}
            <Link to="/planner">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: gardenPlots.length * 0.1 }}
                className="bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-xl p-6 hover:border-secondary-500 transition-all flex flex-col items-center justify-center min-h-[280px] group"
              >
                <Plus className="h-12 w-12 text-gray-600 group-hover:text-secondary-500 mb-4 transition-colors" />
                <h3 className="text-lg font-semibold text-gray-400 group-hover:text-white mb-2 transition-colors">
                  Plan New Garden
                </h3>
                <p className="text-gray-500 text-center text-sm">
                  Start planning your next garden with our expert guidance
                </p>
              </motion.div>
            </Link>
          </div>
        )}

        {/* Recent Activity */}
        {activeTab === 'activity' && (
          <div className="max-w-4xl">
            <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex items-center space-x-4"
                >
                  <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                  <div className="flex-1">
                    <span className="text-white font-medium">{activity.action}</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-secondary-400">{activity.target}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{activity.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Calendar View */}
        {activeTab === 'calendar' && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Garden Calendar</h3>
            <p className="text-gray-400 mb-6">Track planting schedules, harvests, and garden maintenance</p>
            <button className="bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors">
              View Full Calendar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;