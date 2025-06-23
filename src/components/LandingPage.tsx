import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Zap, 
  Download, 
  DollarSign,
  ArrowRight,
  Check,
  Sparkles,
  Rocket,
  Shield,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Natural Language to Code",
      description: "Transform your ideas into production-ready applications using plain English descriptions."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Generation",
      description: "Generate complex applications in seconds, not hours. Our AI understands context and best practices."
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Export Ready Projects",
      description: "Download complete, deployable projects with all dependencies and documentation included."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Monetization Ready",
      description: "Built-in payment integration, user management, and scaling infrastructure for immediate commercialization."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for learning and small projects",
      features: [
        "5 projects per month",
        "Basic templates",
        "Community support",
        "Standard export formats"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "month",
      description: "For serious developers and small teams",
      features: [
        "Unlimited projects",
        "Premium templates",
        "Priority support",
        "Advanced export options",
        "Custom branding",
        "API access"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      description: "For teams and organizations",
      features: [
        "Everything in Professional",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "On-premise deployment",
        "Advanced analytics"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-white">CodeGen AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <Link 
                to="/products" 
                className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
              >
                View Products
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
              Transform Ideas Into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                {" "}Production Code
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The most intelligent AI-powered development platform that converts natural language 
              into fully-featured, production-ready applications. Build faster, sell easier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/products"
                className="bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Rocket className="h-5 w-5" />
                <span>View Products</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-gray-500 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Built for Professional Developers
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to transform ideas into profitable applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all"
              >
                <div className="text-primary-500 mb-4">{feature.icon}</div>
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
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">10,000+</div>
              <div className="text-gray-400">Applications Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-500 mb-2">99.9%</div>
              <div className="text-gray-400">Code Quality Score</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-2">$2M+</div>
              <div className="text-gray-400">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
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
                      {[1,2,3,4,5,6].map((i) => (
                        <div key={i} className="bg-secondary-500/30 rounded-lg p-4 flex items-center justify-center">
                          <div className="w-6 h-6 bg-secondary-400 rounded-full"></div>
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
                    <Sparkles className="h-6 w-6 text-primary-500" />
                    <span className="text-primary-400 font-semibold">5 Pack Seeds</span>
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
                    to="/products"
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
                  <Rocket className="h-8 w-8 text-accent-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Fast Shipping</h4>
                <p className="text-gray-400 text-sm">Free expedited shipping to get your seeds planted at the perfect time</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400">
              Start free and scale as you grow
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-primary-900/50 to-gray-900 border-2 border-primary-500' 
                    : 'bg-gray-900/50 border border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">/{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'border border-gray-600 text-white hover:border-gray-500'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of developers who are already building the future with AI-powered code generation.
          </p>
          <Link 
            to="/products"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
          >
            <Sparkles className="h-6 w-6" />
            <span>Shop Now</span>
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-bold text-white">CodeGen AI</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8">
            © 2025 CodeGen AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;