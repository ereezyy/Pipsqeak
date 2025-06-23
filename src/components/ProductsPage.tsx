import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Code2, 
  Settings, 
  User, 
  ShoppingCart, 
  Check, 
  Sparkles,
  Crown,
  LogOut
} from 'lucide-react';
import { stripeProducts } from '../stripe-config';
import { supabase } from '../lib/supabase';

const ProductsPage = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    fetchSubscription();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate('/login');
      return;
    }
    setUser(user);
  };

  const fetchSubscription = async () => {
    try {
      const { data, error } = await supabase
        .from('stripe_user_subscriptions')
        .select('*')
        .maybeSingle();

      if (error) {
        console.error('Error fetching subscription:', error);
        return;
      }

      setSubscription(data);
    } catch (error) {
      console.error('Error fetching subscription:', error);
    }
  };

  const handlePurchase = async (priceId: string, mode: 'payment' | 'subscription') => {
    if (!user) {
      navigate('/login');
      return;
    }

    setLoading(priceId);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/login');
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price_id: priceId,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/products`,
          mode,
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.error('Checkout error:', data.error);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    } finally {
      setLoading(null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const isSubscribed = subscription && ['active', 'trialing'].includes(subscription.subscription_status);

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
              <Link 
                to="/dashboard"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              {user && (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm">{user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <LogOut className="h-6 w-6" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Premium Products</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock the full potential of your gardening journey with our premium seed collections
          </p>
        </div>

        {/* Current Subscription Status */}
        {isSubscribed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-secondary-900/20 border border-secondary-500/50 rounded-xl p-6"
          >
            <div className="flex items-center space-x-3">
              <Crown className="h-6 w-6 text-secondary-500" />
              <div>
                <h3 className="text-lg font-semibold text-white">Active Subscription</h3>
                <p className="text-secondary-300">
                  You have an active subscription to our premium products
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stripeProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  ${product.price.toFixed(2)}
                  {product.mode === 'subscription' && (
                    <span className="text-lg text-gray-400">/month</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                  <span className="text-gray-300">Premium quality seeds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                  <span className="text-gray-300">Expert growing guides</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                  <span className="text-gray-300">24/7 support</span>
                </div>
                {product.mode === 'subscription' && (
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                    <span className="text-gray-300">Monthly seed deliveries</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => handlePurchase(product.priceId, product.mode)}
                disabled={loading === product.priceId || (isSubscribed && product.mode === 'subscription')}
                className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                  isSubscribed && product.mode === 'subscription'
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-105'
                } ${loading === product.priceId ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading === product.priceId ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </>
                ) : isSubscribed && product.mode === 'subscription' ? (
                  <>
                    <Crown className="h-5 w-5" />
                    <span>Already Subscribed</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    <span>
                      {product.mode === 'subscription' ? 'Subscribe Now' : 'Buy Now'}
                    </span>
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Our Seeds?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-white mb-2">Premium Quality</h4>
                <p className="text-gray-400 text-sm">
                  Hand-selected seeds from the finest varieties, ensuring high germination rates and healthy plants.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Expert Support</h4>
                <p className="text-gray-400 text-sm">
                  Get access to our team of gardening experts who can help you succeed with your growing journey.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Satisfaction Guaranteed</h4>
                <p className="text-gray-400 text-sm">
                  We stand behind our products with a 100% satisfaction guarantee on all seed purchases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;