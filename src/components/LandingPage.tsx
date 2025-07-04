import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Check,
  Sparkles,
  Shield,
  Users,
  Sprout,
  Book,
  Calendar,
  Package,
  Award,
  Sun,
  Droplets
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Premium Seed Collections",
      description: "Hand-selected, organic, non-GMO seeds from the finest varieties for maximum success."
    },
    {
      icon: <Book className="h-8 w-8" />,
      title: "Expert Growing Guides",
      description: "Step-by-step instructions from seed to harvest, with tips from master gardeners."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Gardening Community",
      description: "Connect with thousands of gardeners, share experiences, and get expert advice."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Smart Garden Planning",
      description: "AI-powered recommendations based on your location, climate, and growing preferences."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-secondary-500" />
              <span className="text-2xl font-bold text-white">SeedMaster</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
              <Link 
                to="/login" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="bg-secondary-500 text-white px-6 py-2 rounded-lg hover:bg-secondary-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Grow Your Perfect
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400">
                {" "}Garden Journey
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Premium seed collections, expert growing guides, and a thriving community 
              to help you grow the garden of your dreams. From beginner to master gardener.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup"
                className="bg-secondary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Sprout className="h-5 w-5" />
                <span>Start Growing</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="#products"
                className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-gray-500 transition-colors"
              >
                View Seed Collections
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Grow Successfully
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From premium seeds to expert guidance, we provide everything for your gardening success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-secondary-500/50 transition-all"
              >
                <div className="text-secondary-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary-500 mb-2">15,000+</div>
              <div className="text-gray-400">Gardens Started</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-2">94%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">50K+</div>
              <div className="text-gray-400">Happy Gardeners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-500 mb-2">200+</div>
              <div className="text-gray-400">Seed Varieties</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Premium Seed Collections
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hand-selected seeds for the perfect gardening experience
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 overflow-hidden relative"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                {/* Product Image/Visual */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-xl p-8 text-center">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {['🍅', '🥬', '🌿', '🥕', '🌶️', '🥒'].map((emoji, i) => (
                        <div key={i} className="bg-secondary-500/30 rounded-lg p-4 flex items-center justify-center">
                          <div className="text-2xl">{emoji}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-white font-semibold text-lg mb-2">Premium Seed Collection</div>
                    <div className="text-gray-300 text-sm">6 Varieties • Organic • Non-GMO</div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ Premium
                  </div>
                </div>
                
                {/* Product Details */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Package className="h-6 w-6 text-primary-500" />
                    <span className="text-primary-400 font-semibold">Monthly Subscription</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Premium Gardening Collection
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Whether you are a novice gardener or someone looking to expand your collection, 
                    these seeds provide the perfect opportunity to embark on a rewarding gardening journey.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-secondary-500" />
                      <span className="text-gray-300">Hand-selected premium varieties</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-secondary-500" />
                      <span className="text-gray-300">Expert growing guides included</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-secondary-500" />
                      <span className="text-gray-300">Monthly delivery subscription</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-secondary-500" />
                      <span className="text-gray-300">24/7 gardening support</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-white">$100.00</div>
                      <div className="text-gray-400 text-sm">per month</div>
                    </div>
                    <div className="text-right">
                      <div className="text-secondary-400 font-semibold">🌱 Organic Certified</div>
                      <div className="text-gray-400 text-sm">Non-GMO • Heirloom Varieties</div>
                    </div>
                  </div>
                  
                  <Link 
                    to="/signup"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform w-full justify-center"
                  >
                    <Sparkles className="h-5 w-5" />
                    <span>Start Growing Today</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Additional product highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Expert Community</h4>
                <p className="text-gray-400 text-sm">Join thousands of successful gardeners sharing tips and experiences</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Quality Guarantee</h4>
                <p className="text-gray-400 text-sm">100% germination guarantee or your money back, no questions asked</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Premium Quality</h4>
                <p className="text-gray-400 text-sm">Certified organic, non-GMO heirloom varieties for superior results</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose SeedMaster?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're more than just seeds - we're your complete gardening partner
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <Sun className="h-8 w-8 text-accent-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Climate-Specific Selection</h3>
              <p className="text-gray-400">Seeds chosen specifically for your growing zone and climate conditions for maximum success rates.</p>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <Book className="h-8 w-8 text-secondary-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Guidance</h3>
              <p className="text-gray-400">Detailed growing guides, planting schedules, and troubleshooting tips from master gardeners.</p>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <Droplets className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Ongoing Support</h3>
              <p className="text-gray-400">24/7 access to our gardening community and expert support throughout your growing season.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Garden Journey?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of gardeners who are growing successfully with our premium seeds and expert guidance.
          </p>
          <Link 
            to="/signup"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary-500 to-primary-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
          >
            <Sprout className="h-6 w-6" />
            <span>Start Growing</span>
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sprout className="h-6 w-6 text-secondary-500" />
              <span className="text-xl font-bold text-white">SeedMaster</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8">
            © 2025 SeedMaster. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;