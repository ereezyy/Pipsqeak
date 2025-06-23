import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus,
  Calendar,
  Droplets,
  Sun,
  Thermometer,
  Camera,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Sprout,
  Edit3,
  Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SeedTracker = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showAddModal, setShowAddModal] = useState(false);

  const trackedPlants = [
    {
      id: 1,
      name: 'Cherry Tomatoes',
      variety: 'Sweet 100',
      plantedDate: '2024-03-15',
      expectedHarvest: '2024-06-15',
      status: 'flowering',
      progress: 70,
      lastWatered: '2024-04-18',
      notes: 'First flowers appearing, looking healthy',
      location: 'Garden Bed A',
      health: 'excellent'
    },
    {
      id: 2,
      name: 'Basil',
      variety: 'Genovese',
      plantedDate: '2024-03-20',
      expectedHarvest: '2024-05-20',
      status: 'mature',
      progress: 95,
      lastWatered: '2024-04-17',
      notes: 'Ready for first major harvest',
      location: 'Container Garden',
      health: 'excellent'
    },
    {
      id: 3,
      name: 'Lettuce',
      variety: 'Buttercrunch',
      plantedDate: '2024-04-01',
      expectedHarvest: '2024-05-15',
      status: 'growing',
      progress: 45,
      lastWatered: '2024-04-18',
      notes: 'Growing well, needs regular watering',
      location: 'Raised Bed 1',
      health: 'good'
    },
    {
      id: 4,
      name: 'Carrots',
      variety: 'Nantes',
      plantedDate: '2024-04-05',
      expectedHarvest: '2024-06-20',
      status: 'germinating',
      progress: 20,
      lastWatered: '2024-04-18',
      notes: 'Seeds germinating, keep soil moist',
      location: 'Raised Bed 2',
      health: 'good'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      germinating: 'bg-blue-900/30 text-blue-300',
      growing: 'bg-secondary-900/30 text-secondary-300',
      flowering: 'bg-accent-900/30 text-accent-300',
      mature: 'bg-green-900/30 text-green-300',
      harvested: 'bg-gray-700 text-gray-300'
    };
    return colors[status] || colors.growing;
  };

  const getHealthColor = (health) => {
    const colors = {
      excellent: 'text-green-400',
      good: 'text-yellow-400',
      poor: 'text-red-400'
    };
    return colors[health] || colors.good;
  };

  const getDaysFromPlanted = (plantedDate) => {
    const planted = new Date(plantedDate);
    const today = new Date();
    const diffTime = Math.abs(today - planted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getDaysToHarvest = (harvestDate) => {
    const harvest = new Date(harvestDate);
    const today = new Date();
    const diffTime = harvest - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredPlants = trackedPlants.filter(plant => {
    if (activeTab === 'active') return plant.status !== 'harvested';
    if (activeTab === 'flowering') return plant.status === 'flowering';
    if (activeTab === 'ready') return plant.status === 'mature';
    return true;
  });

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
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link to="/planner" className="text-gray-400 hover:text-white transition-colors">
                Garden Planner
              </Link>
              <Link to="/guides" className="text-gray-400 hover:text-white transition-colors">
                Growing Guides
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Seed Tracker</h1>
            <p className="text-gray-400">Monitor your plants' progress from seed to harvest</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Track New Plant</span>
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Plants</p>
                <p className="text-2xl font-bold text-white">{trackedPlants.filter(p => p.status !== 'harvested').length}</p>
              </div>
              <Sprout className="h-8 w-8 text-secondary-500" />
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Ready to Harvest</p>
                <p className="text-2xl font-bold text-white">{trackedPlants.filter(p => p.status === 'mature').length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Days Since Started</p>
                <p className="text-2xl font-bold text-white">
                  {Math.round(trackedPlants.reduce((acc, plant) => acc + getDaysFromPlanted(plant.plantedDate), 0) / trackedPlants.length)}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-accent-500" />
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Success Rate</p>
                <p className="text-2xl font-bold text-white">94%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary-500" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="border-b border-gray-700 mb-6">
          <div className="flex space-x-8">
            {[
              { id: 'active', label: 'Active Plants', count: trackedPlants.filter(p => p.status !== 'harvested').length },
              { id: 'flowering', label: 'Flowering', count: trackedPlants.filter(p => p.status === 'flowering').length },
              { id: 'ready', label: 'Ready to Harvest', count: trackedPlants.filter(p => p.status === 'mature').length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-secondary-500 text-secondary-500'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPlants.map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{plant.name}</h3>
                  <p className="text-sm text-gray-400">{plant.variety} • {plant.location}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(plant.status)}`}>
                    {plant.status}
                  </span>
                  <div className="flex items-center space-x-1">
                    <button className="text-gray-400 hover:text-white">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-400">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Growth Progress</span>
                  <span>{plant.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-secondary-500 h-2 rounded-full transition-all"
                    style={{ width: `${plant.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Plant Details */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-400">Planted:</span>
                    <span className="text-white">{getDaysFromPlanted(plant.plantedDate)} days ago</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-400">Harvest in:</span>
                    <span className="text-white">{getDaysToHarvest(plant.expectedHarvest)} days</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Droplets className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-400">Last watered:</span>
                    <span className="text-white">Yesterday</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <TrendingUp className={`h-4 w-4 ${getHealthColor(plant.health)}`} />
                    <span className="text-gray-400">Health:</span>
                    <span className={`capitalize ${getHealthColor(plant.health)}`}>{plant.health}</span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-gray-700/50 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-300">{plant.notes}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2">
                  <Droplets className="h-4 w-4" />
                  <span>Water</span>
                </button>
                <button className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2">
                  <Camera className="h-4 w-4" />
                  <span>Photo</span>
                </button>
                <button className="flex-1 bg-secondary-500 text-white py-2 px-4 rounded-lg hover:bg-secondary-600 transition-colors flex items-center justify-center space-x-2">
                  <Edit3 className="h-4 w-4" />
                  <span>Update</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPlants.length === 0 && (
          <div className="text-center py-12">
            <Sprout className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No plants found</h3>
            <p className="text-gray-400 mb-6">Start tracking your plants to monitor their growth progress</p>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors"
            >
              Track Your First Plant
            </button>
          </div>
        )}

        {/* Quick Tips */}
        <div className="mt-12 bg-gradient-to-br from-secondary-900/20 to-primary-900/20 rounded-xl p-6 border border-secondary-500/30">
          <h3 className="text-lg font-semibold text-white mb-4">Tracking Tips</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-secondary-500 mt-0.5" />
              <div>
                <span className="text-white font-medium">Daily Updates:</span>
                <p className="text-gray-400">Log water, fertilizer, and observations daily for best results</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-secondary-500 mt-0.5" />
              <div>
                <span className="text-white font-medium">Photo Progress:</span>
                <p className="text-gray-400">Take weekly photos to track visual growth changes</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-secondary-500 mt-0.5" />
              <div>
                <span className="text-white font-medium">Weather Notes:</span>
                <p className="text-gray-400">Record weather conditions that affect plant health</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedTracker;