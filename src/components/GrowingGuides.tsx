import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Book,
  Search,
  Filter,
  Clock,
  Droplets,
  Sun,
  Thermometer,
  Scissors,
  AlertTriangle,
  CheckCircle,
  Sprout,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GrowingGuides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGuide, setSelectedGuide] = useState(null);

  const categories = [
    { id: 'all', name: 'All Guides', count: 24 },
    { id: 'vegetables', name: 'Vegetables', count: 12 },
    { id: 'herbs', name: 'Herbs', count: 8 },
    { id: 'flowers', name: 'Flowers', count: 4 }
  ];

  const guides = [
    {
      id: 1,
      title: 'Complete Tomato Growing Guide',
      category: 'vegetables',
      difficulty: 'medium',
      duration: '75-85 days',
      image: '🍅',
      summary: 'Learn to grow juicy, flavorful tomatoes from seed to harvest',
      readTime: '8 min read',
      steps: [
        {
          title: 'Starting Seeds',
          time: 'Weeks 1-2',
          description: 'Start tomato seeds indoors 6-8 weeks before last frost date.',
          tips: ['Use seed starting mix', 'Keep soil temperature at 70-75°F', 'Provide 14-16 hours of light daily']
        },
        {
          title: 'Transplanting',
          time: 'Week 6-8',
          description: 'Transplant seedlings outdoors after danger of frost has passed.',
          tips: ['Harden off plants for 7-10 days', 'Choose sunny location', 'Space plants 24-36 inches apart']
        },
        {
          title: 'Care & Maintenance',
          time: 'Ongoing',
          description: 'Regular watering, fertilizing, and support are essential.',
          tips: ['Water deeply 2-3 times per week', 'Mulch around plants', 'Provide support with cages or stakes']
        },
        {
          title: 'Harvest',
          time: 'Week 10-12',
          description: 'Pick tomatoes when they begin to show color and ripen indoors.',
          tips: ['Harvest before first frost', 'Store green tomatoes in cool, dark place', 'Enjoy fresh or preserve']
        }
      ],
      requirements: {
        sunlight: '6-8 hours direct sun',
        water: '1-2 inches per week',
        temperature: '60-75°F',
        spacing: '24-36 inches'
      }
    },
    {
      id: 2,
      title: 'Herb Garden Basics',
      category: 'herbs',
      difficulty: 'easy',
      duration: '40-60 days',
      image: '🌿',
      summary: 'Start your culinary herb garden with these easy-to-grow varieties',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'Lettuce & Leafy Greens',
      category: 'vegetables',
      difficulty: 'easy',
      duration: '45-55 days',
      image: '🥬',
      summary: 'Grow fresh salads year-round with successive plantings',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Marigold Companion Planting',
      category: 'flowers',
      difficulty: 'easy',
      duration: '50-70 days',
      image: '🌼',
      summary: 'Use marigolds to protect your vegetables from pests naturally',
      readTime: '4 min read'
    }
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedGuide) {
    return (
      <div className="min-h-screen bg-gray-900">
        <nav className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="flex items-center space-x-2">
                <Sprout className="h-8 w-8 text-secondary-500" />
                <span className="text-2xl font-bold text-white">SeedMaster</span>
              </Link>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setSelectedGuide(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ← Back to Guides
                </button>
                <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{selectedGuide.image}</div>
            <h1 className="text-4xl font-bold text-white mb-4">{selectedGuide.title}</h1>
            <p className="text-xl text-gray-400 mb-6">{selectedGuide.summary}</p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{selectedGuide.readTime}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Thermometer className="h-4 w-4" />
                <span>{selectedGuide.duration}</span>
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                selectedGuide.difficulty === 'easy' 
                  ? 'bg-secondary-900/30 text-secondary-300'
                  : 'bg-accent-900/30 text-accent-300'
              }`}>
                {selectedGuide.difficulty}
              </span>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Growing Requirements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <Sun className="h-6 w-6 text-accent-500 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Sunlight</div>
                <div className="text-white font-medium">{selectedGuide.requirements.sunlight}</div>
              </div>
              <div className="text-center">
                <Droplets className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Water</div>
                <div className="text-white font-medium">{selectedGuide.requirements.water}</div>
              </div>
              <div className="text-center">
                <Thermometer className="h-6 w-6 text-red-500 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Temperature</div>
                <div className="text-white font-medium">{selectedGuide.requirements.temperature}</div>
              </div>
              <div className="text-center">
                <ArrowRight className="h-6 w-6 text-secondary-500 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Spacing</div>
                <div className="text-white font-medium">{selectedGuide.requirements.spacing}</div>
              </div>
            </div>
          </div>

          {/* Step-by-step Guide */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Step-by-Step Guide</h3>
            {selectedGuide.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                      <span className="text-sm text-secondary-400 font-medium">{step.time}</span>
                    </div>
                    <p className="text-gray-400 mb-4">{step.description}</p>
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-white">Pro Tips:</h5>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start space-x-2 text-sm text-gray-400">
                            <CheckCircle className="h-4 w-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Next Steps */}
          <div className="mt-8 bg-gradient-to-br from-secondary-900/20 to-primary-900/20 rounded-xl p-6 border border-secondary-500/30">
            <h3 className="text-lg font-semibold text-white mb-2">Ready to Start Growing?</h3>
            <p className="text-gray-400 mb-4">
              Get the premium seeds you need to follow this guide successfully.
            </p>
            <Link 
              to="/products"
              className="inline-flex items-center space-x-2 bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors"
            >
              <Sprout className="h-5 w-5" />
              <span>Get Premium Seeds</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Growing Guides</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expert guides to help you grow healthy, productive plants from seed to harvest
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500"
            />
          </div>
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-secondary-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-secondary-500/50 transition-all cursor-pointer"
              onClick={() => setSelectedGuide(guide)}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{guide.image}</div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  guide.difficulty === 'easy' 
                    ? 'bg-secondary-900/30 text-secondary-300'
                    : 'bg-accent-900/30 text-accent-300'
                }`}>
                  {guide.difficulty}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{guide.summary}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{guide.readTime}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Thermometer className="h-4 w-4" />
                  <span>{guide.duration}</span>
                </span>
              </div>
              
              <button className="w-full mt-4 bg-secondary-500/20 text-secondary-300 py-2 rounded-lg hover:bg-secondary-500/30 transition-colors flex items-center justify-center space-x-2">
                <Book className="h-4 w-4" />
                <span>Read Guide</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Premium Call-to-Action */}
        <div className="mt-12 bg-gradient-to-br from-secondary-900/20 to-primary-900/20 rounded-xl p-8 border border-secondary-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Want More Expert Guidance?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Get access to premium growing guides, personalized planting schedules, and expert support with our premium seed subscription.
          </p>
          <Link 
            to="/products"
            className="inline-flex items-center space-x-2 bg-secondary-500 text-white px-8 py-4 rounded-lg hover:bg-secondary-600 transition-colors font-semibold"
          >
            <Sprout className="h-5 w-5" />
            <span>Upgrade to Premium</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GrowingGuides;