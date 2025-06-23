import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus,
  Folder,
  Clock,
  Download,
  Star,
  Trash2,
  Settings,
  User,
  Code2,
  TrendingUp,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const { user, signOut } = useAuth();

  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Full-stack React/Node.js e-commerce application with payment integration",
      framework: "React + Node.js",
      createdAt: "2024-01-15",
      status: "completed",
      downloads: 25
    },
    {
      id: 2,
      name: "Task Management App",
      description: "Modern task management application with real-time collaboration",
      framework: "Vue.js + Express",
      createdAt: "2024-01-12",
      status: "generating",
      downloads: 0
    },
    {
      id: 3,
      name: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts and reports",
      framework: "React + Python",
      createdAt: "2024-01-10",
      status: "completed",
      downloads: 18
    }
  ];

  const stats = [
    { label: "Total Projects", value: "24", icon: <Folder className="h-5 w-5" /> },
    { label: "Completed", value: "18", icon: <Code2 className="h-5 w-5" /> },
    { label: "Downloads", value: "156", icon: <Download className="h-5 w-5" /> },
    { label: "Success Rate", value: "94%", icon: <TrendingUp className="h-5 w-5" /> }
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
              <Code2 className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-white">CodeGen AI</span>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">{user?.email}</span>
              <Link 
                to="/generate"
                className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>New Project</span>
              </Link>
              <button className="text-gray-400 hover:text-white">
                <Settings className="h-6 w-6" />
              </button>
              <button 
                onClick={handleLogout}
                className="text-gray-400 hover:text-white"
              >
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Manage your AI-generated projects and track your progress</p>
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
                <div className="text-primary-500">{stat.icon}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-700 mb-6">
          <div className="flex space-x-8">
            {['projects', 'templates', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-primary-500 text-primary-500'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-primary-500">{project.framework}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{project.createdAt}</span>
                      </span>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-secondary-900 text-secondary-300' 
                      : 'bg-accent-900 text-accent-300'
                  }`}>
                    {project.status}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <Download className="h-4 w-4" />
                    <span>{project.downloads} downloads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-white">
                      <Star className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-400">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Add New Project Card */}
            <Link to="/generate">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: projects.length * 0.1 }}
                className="bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-xl p-6 hover:border-primary-500 transition-all flex flex-col items-center justify-center min-h-[200px] group"
              >
                <Plus className="h-12 w-12 text-gray-600 group-hover:text-primary-500 mb-4 transition-colors" />
                <h3 className="text-lg font-semibold text-gray-400 group-hover:text-white mb-2 transition-colors">
                  Create New Project
                </h3>
                <p className="text-gray-500 text-center text-sm">
                  Transform your ideas into production-ready code with AI
                </p>
              </motion.div>
            </Link>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="text-center py-12">
            <Zap className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Template Marketplace</h3>
            <p className="text-gray-400 mb-6">Browse and use pre-built templates to accelerate your development</p>
            <button className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
              Browse Templates
            </button>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="text-center py-12">
            <TrendingUp className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Analytics Dashboard</h3>
            <p className="text-gray-400 mb-6">Track your project performance and usage statistics</p>
            <button className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
              View Analytics
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;