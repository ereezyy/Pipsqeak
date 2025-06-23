import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus,
  MapPin,
  Calendar,
  Thermometer,
  Droplets,
  Sun,
  Seedling,
  Book,
  CheckCircle,
  AlertCircle,
  Clock,
  Sprout
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GardenPlanner = () => {
  const [selectedSeason, setSelectedSeason] = useState('spring');
  const [selectedZone, setSelectedZone] = useState('zone-6');
  const [planType, setPlanType] = useState('vegetable');

  const seasons = [
    { id: 'spring', name: 'Spring', icon: '🌱', temp: '60-75°F' },
    { id: 'summer', name: 'Summer', icon: '☀️', temp: '75-85°F' },
    { id: 'fall', name: 'Fall', icon: '🍂', temp: '50-70°F' },
    { id: 'winter', name: 'Winter', icon: '❄️', temp: '35-50°F' }
  ];

  const plantTypes = [
    { id: 'vegetable', name: 'Vegetables', icon: '🥕' },
    { id: 'herbs', name: 'Herbs', icon: '🌿' },
    { id: 'flowers', name: 'Flowers', icon: '🌸' },
    { id: 'fruits', name: 'Fruits', icon: '🍓' }
  ];

  const recommendedPlants = {
    spring: {
      vegetable: [
        { name: 'Tomatoes', difficulty: 'medium', days: '70-85', spacing: '24-36"' },
        { name: 'Lettuce', difficulty: 'easy', days: '45-55', spacing: '6-12"' },
        { name: 'Radishes', difficulty: 'easy', days: '25-30', spacing: '2-4"' },
        { name: 'Peas', difficulty: 'easy', days: '55-70', spacing: '4-6"' }
      ],
      herbs: [
        { name: 'Basil', difficulty: 'easy', days: '60-90', spacing: '12-18"' },
        { name: 'Cilantro', difficulty: 'easy', days: '40-50', spacing: '6-8"' },
        { name: 'Parsley', difficulty: 'easy', days: '70-90', spacing: '8-12"' },
        { name: 'Oregano', difficulty: 'medium', days: '80-90', spacing: '12-15"' }
      ]
    }
  };

  const gardenTips = [
    {
      icon: <Sun className="h-5 w-5" />,
      title: "Sunlight Requirements",
      description: "Most vegetables need 6-8 hours of direct sunlight daily"
    },
    {
      icon: <Droplets className="h-5 w-5" />,
      title: "Watering Schedule",
      description: "Water deeply 2-3 times per week rather than daily shallow watering"
    },
    {
      icon: <Thermometer className="h-5 w-5" />,
      title: "Soil Temperature",
      description: "Check soil temperature before planting - it should be consistently above 50°F"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Companion Planting",
      description: "Plant tomatoes with basil, and lettuce with radishes for better growth"
    }
  ];

  const currentPlants = recommendedPlants[selectedSeason]?.[planType] || [];

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
              <Link 
                to="/dashboard"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <Link 
                to="/guides"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Growing Guides
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Planning Panel */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Garden Planner</h1>
              <p className="text-gray-400">Plan your perfect garden with expert recommendations</p>
            </div>

            {/* Season Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Choose Your Season
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {seasons.map((season) => (
                  <button
                    key={season.id}
                    onClick={() => setSelectedSeason(season.id)}
                    className={`p-4 rounded-lg border text-center transition-all ${
                      selectedSeason === season.id
                        ? 'border-secondary-500 bg-secondary-900/20 text-white'
                        : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-2xl mb-2">{season.icon}</div>
                    <div className="font-medium">{season.name}</div>
                    <div className="text-xs text-gray-400">{season.temp}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Plant Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                What Do You Want to Grow?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {plantTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPlanType(type.id)}
                    className={`p-4 rounded-lg border text-center transition-all ${
                      planType === type.id
                        ? 'border-secondary-500 bg-secondary-900/20 text-white'
                        : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="font-medium">{type.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recommended Plants */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Recommended for {seasons.find(s => s.id === selectedSeason)?.name} {plantTypes.find(p => p.id === planType)?.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentPlants.map((plant, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-secondary-500/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{plant.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        plant.difficulty === 'easy' 
                          ? 'bg-secondary-900/30 text-secondary-300'
                          : 'bg-accent-900/30 text-accent-300'
                      }`}>
                        {plant.difficulty}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Days to harvest: {plant.days}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>Plant spacing: {plant.spacing}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-secondary-500/20 text-secondary-300 py-2 rounded-lg hover:bg-secondary-500/30 transition-colors flex items-center justify-center space-x-2">
                      <Plus className="h-4 w-4" />
                      <span>Add to Garden</span>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Create Garden Plan Button */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">Ready to Start?</h3>
              <p className="text-gray-400 mb-4">
                Create a custom garden plan based on your selections and get detailed planting instructions.
              </p>
              <button className="bg-gradient-to-r from-secondary-500 to-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center space-x-2">
                <Seedling className="h-5 w-5" />
                <span>Create Garden Plan</span>
              </button>
            </div>
          </div>

          {/* Tips & Info Panel */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Book className="h-5 w-5 text-secondary-500" />
                <span>Garden Tips</span>
              </h3>
              <div className="space-y-4">
                {gardenTips.map((tip, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="text-secondary-500 mt-1">{tip.icon}</div>
                    <div>
                      <h4 className="font-medium text-white text-sm">{tip.title}</h4>
                      <p className="text-gray-400 text-sm">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Growing Zone</h3>
              <div className="space-y-3">
                <select 
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                >
                  <option value="zone-3">Zone 3 (-30°F to -40°F)</option>
                  <option value="zone-4">Zone 4 (-20°F to -30°F)</option>
                  <option value="zone-5">Zone 5 (-10°F to -20°F)</option>
                  <option value="zone-6">Zone 6 (0°F to -10°F)</option>
                  <option value="zone-7">Zone 7 (10°F to 0°F)</option>
                  <option value="zone-8">Zone 8 (20°F to 10°F)</option>
                  <option value="zone-9">Zone 9 (30°F to 20°F)</option>
                </select>
                <p className="text-gray-400 text-sm">
                  Your growing zone determines which plants will thrive in your climate.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary-900/20 to-primary-900/20 rounded-xl p-6 border border-secondary-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">Premium Seeds Available</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get access to premium seed varieties with your subscription.
              </p>
              <Link 
                to="/products"
                className="inline-flex items-center space-x-2 bg-secondary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition-colors"
              >
                <Seedling className="h-4 w-4" />
                <span>View Premium Seeds</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenPlanner;