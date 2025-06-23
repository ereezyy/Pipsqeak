import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  MessageCircle,
  Heart,
  Share2,
  Camera,
  TrendingUp,
  Award,
  MapPin,
  Calendar,
  Search,
  Filter,
  Sprout,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Community = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const posts = [
    {
      id: 1,
      author: {
        name: 'Sarah Green',
        avatar: '👩‍🌾',
        level: 'Expert Gardener',
        location: 'Portland, OR'
      },
      timestamp: '2 hours ago',
      category: 'success',
      content: 'Just harvested my first batch of cherry tomatoes from the SeedMaster premium collection! The flavor is incredible - so much better than store-bought. Here\'s my harvest after 75 days of growth.',
      image: '🍅',
      likes: 24,
      comments: 8,
      tags: ['tomatoes', 'harvest', 'premium-seeds']
    },
    {
      id: 2,
      author: {
        name: 'Mike Chen',
        avatar: '👨‍🌾',
        level: 'Growing Enthusiast',
        location: 'Austin, TX'
      },
      timestamp: '4 hours ago',
      category: 'question',
      content: 'My basil leaves are turning yellow at the tips. I\'ve been following the watering schedule from the growing guide. Anyone else experienced this? Could it be over-fertilization?',
      image: '🌿',
      likes: 12,
      comments: 15,
      tags: ['basil', 'troubleshooting', 'help-needed']
    },
    {
      id: 3,
      author: {
        name: 'Emma Rodriguez',
        avatar: '👩',
        level: 'Beginner',
        location: 'Phoenix, AZ'
      },
      timestamp: '6 hours ago',
      category: 'tip',
      content: 'Pro tip for desert gardeners: I\'ve been using shade cloth during the hottest part of the day and my lettuce is thriving! The micro-climate makes such a difference.',
      image: '🥬',
      likes: 18,
      comments: 6,
      tags: ['lettuce', 'desert-gardening', 'shade-cloth']
    },
    {
      id: 4,
      author: {
        name: 'David Park',
        avatar: '👨',
        level: 'Master Gardener',
        location: 'Seattle, WA'
      },
      timestamp: '1 day ago',
      category: 'success',
      content: 'Year 3 with SeedMaster and I\'ve never had better harvests! Here\'s my complete herb garden - all from the premium herb collection. The oregano and thyme are particularly impressive this season.',
      image: '🌿',
      likes: 31,
      comments: 12,
      tags: ['herbs', 'year-review', 'oregano', 'thyme']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: 156 },
    { id: 'success', name: 'Success Stories', count: 42 },
    { id: 'question', name: 'Questions', count: 38 },
    { id: 'tip', name: 'Tips & Tricks', count: 29 },
    { id: 'photo', name: 'Garden Photos', count: 47 }
  ];

  const topGardeners = [
    { name: 'Lisa Thompson', avatar: '👩‍🌾', posts: 47, likes: 892, level: 'Master Gardener' },
    { name: 'James Wilson', avatar: '👨‍🌾', posts: 38, likes: 743, level: 'Expert Gardener' },
    { name: 'Maria Santos', avatar: '👩', posts: 35, likes: 654, level: 'Expert Gardener' },
    { name: 'Alex Kumar', avatar: '👨', posts: 29, likes: 521, level: 'Advanced Gardener' }
  ];

  const getCategoryIcon = (category) => {
    const icons = {
      success: '🏆',
      question: '❓',
      tip: '💡',
      photo: '📸'
    };
    return icons[category] || '📝';
  };

  const getCategoryColor = (category) => {
    const colors = {
      success: 'bg-green-900/30 text-green-300',
      question: 'bg-blue-900/30 text-blue-300',
      tip: 'bg-accent-900/30 text-accent-300',
      photo: 'bg-purple-900/30 text-purple-300'
    };
    return colors[category] || 'bg-gray-700 text-gray-300';
  };

  const filteredPosts = posts.filter(post => 
    selectedCategory === 'all' || post.category === selectedCategory
  );

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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Community</h1>
                <p className="text-gray-400">Connect with fellow gardeners and share your growing journey</p>
              </div>
              <button className="bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Share Update</span>
              </button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                    selectedCategory === category.id
                      ? 'bg-secondary-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                >
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{post.author.avatar}</div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-white">{post.author.name}</h3>
                          <span className="text-sm text-secondary-400">{post.author.level}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <MapPin className="h-3 w-3" />
                          <span>{post.author.location}</span>
                          <span>•</span>
                          <span>{post.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {getCategoryIcon(post.category)} {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="text-gray-300 mb-4 leading-relaxed">{post.content}</p>

                  {/* Post Image */}
                  <div className="bg-gradient-to-br from-secondary-900/20 to-primary-900/20 rounded-lg p-8 mb-4 text-center">
                    <div className="text-6xl mb-2">{post.image}</div>
                    <p className="text-gray-400 text-sm">Garden photo</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-secondary-400 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Users className="h-5 w-5 text-secondary-500" />
                <span>Community Stats</span>
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Gardeners</span>
                  <span className="text-white font-semibold">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Posts This Week</span>
                  <span className="text-white font-semibold">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Seeds Planted</span>
                  <span className="text-white font-semibold">12,439</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Success Stories</span>
                  <span className="text-white font-semibold">892</span>
                </div>
              </div>
            </div>

            {/* Top Gardeners */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Award className="h-5 w-5 text-accent-500" />
                <span>Top Gardeners</span>
              </h3>
              <div className="space-y-4">
                {topGardeners.map((gardener, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-lg">{gardener.avatar}</div>
                    <div className="flex-1">
                      <div className="font-medium text-white">{gardener.name}</div>
                      <div className="text-sm text-gray-400">{gardener.level}</div>
                    </div>
                    <div className="text-right text-sm">
                      <div className="text-secondary-400">{gardener.likes} likes</div>
                      <div className="text-gray-500">{gardener.posts} posts</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary-500" />
                <span>Trending Topics</span>
              </h3>
              <div className="space-y-2">
                {['#spring-planting', '#tomato-tips', '#companion-planting', '#organic-fertilizer', '#pest-control'].map((topic, index) => (
                  <button key={index} className="block w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Premium Promotion */}
            <div className="bg-gradient-to-br from-secondary-900/20 to-primary-900/20 rounded-xl p-6 border border-secondary-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">Join Premium Community</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get access to exclusive growing tips, expert Q&A sessions, and premium seed varieties.
              </p>
              <Link 
                to="/products"
                className="inline-flex items-center space-x-2 bg-secondary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition-colors w-full justify-center"
              >
                <Sprout className="h-4 w-4" />
                <span>Upgrade Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;