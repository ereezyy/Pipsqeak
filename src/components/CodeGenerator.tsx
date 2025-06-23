import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send,
  Download,
  Copy,
  Settings,
  Play,
  Save,
  Sparkles,
  Code2,
  FileText,
  Package,
  Zap,
  CheckCircle,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CodeGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [framework, setFramework] = useState('react');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [activeTab, setActiveTab] = useState('preview');

  const frameworks = [
    { id: 'react', name: 'React + TypeScript', icon: '⚛️' },
    { id: 'vue', name: 'Vue.js', icon: '💚' },
    { id: 'angular', name: 'Angular', icon: '🅰️' },
    { id: 'nodejs', name: 'Node.js + Express', icon: '🟢' },
    { id: 'python', name: 'Python + FastAPI', icon: '🐍' },
    { id: 'nextjs', name: 'Next.js', icon: '▲' }
  ];

  const examplePrompts = [
    "Create a modern e-commerce product page with cart functionality",
    "Build a real-time chat application with user authentication",
    "Design a dashboard with data visualization charts",
    "Make a task management app with drag-and-drop features",
    "Create a blog platform with content management system"
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI code generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockCode = `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GeneratedApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data or initialize app
    const initializeApp = async () => {
      // Your generated application logic here
      setLoading(false);
    };
    
    initializeApp();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-100 p-8"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Generated Application
        </h1>
        
        {/* Your generated UI components will appear here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Generated content based on your prompt */}
        </div>
      </div>
    </motion.div>
  );
};

export default GeneratedApp;`;

    setGeneratedCode(mockCode);
    setIsGenerating(false);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedCode], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-app.tsx';
    a.click();
    URL.revokeObjectURL(url);
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
              <Link 
                to="/dashboard"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <button className="text-gray-400 hover:text-white">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-8rem)]">
          {/* Input Panel */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">AI Code Generator</h1>
              <p className="text-gray-400">Describe your application and watch AI build it for you</p>
            </div>

            {/* Framework Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Choose Framework
              </label>
              <div className="grid grid-cols-2 gap-3">
                {frameworks.map((fw) => (
                  <button
                    key={fw.id}
                    onClick={() => setFramework(fw.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      framework === fw.id
                        ? 'border-primary-500 bg-primary-900/20 text-white'
                        : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{fw.icon}</span>
                      <span className="font-medium">{fw.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Describe Your Application
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Create a modern e-commerce platform with product catalog, shopping cart, user authentication, and payment integration..."
                className="w-full h-40 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none"
              />
            </div>

            {/* Example Prompts */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Try These Examples
              </label>
              <div className="space-y-2">
                {examplePrompts.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(example)}
                    className="w-full text-left p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 hover:border-gray-500 hover:text-white transition-all text-sm"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  <span>Generate Code</span>
                  <Send className="h-5 w-5" />
                </>
              )}
            </button>
          </div>

          {/* Output Panel */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex space-x-4">
                {['preview', 'code', 'files'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {generatedCode && (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleCopyCode}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleDownload}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            <div className="h-full overflow-auto">
              {!generatedCode && !isGenerating && (
                <div className="flex items-center justify-center h-96 text-gray-500">
                  <div className="text-center">
                    <Code2 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg mb-2">Ready to Generate</p>
                    <p className="text-sm">Enter your prompt and click generate to see the magic happen</p>
                  </div>
                </div>
              )}

              {isGenerating && (
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="animate-pulse">
                      <Zap className="h-16 w-16 text-primary-500 mx-auto mb-4" />
                    </div>
                    <p className="text-white text-lg mb-2">Generating Your Application</p>
                    <p className="text-gray-400 text-sm">AI is analyzing your requirements and creating production-ready code...</p>
                    <div className="mt-6 space-y-2 text-left max-w-sm">
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary-500" />
                        <span className="text-gray-300">Analyzing requirements</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary-500" />
                        <span className="text-gray-300">Generating component structure</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-accent-500 animate-spin" />
                        <span className="text-gray-300">Creating production code</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {generatedCode && activeTab === 'code' && (
                <pre className="p-4 text-sm text-gray-300 font-code overflow-auto">
                  <code>{generatedCode}</code>
                </pre>
              )}

              {generatedCode && activeTab === 'preview' && (
                <div className="p-4">
                  <div className="bg-white rounded-lg p-6 min-h-96">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Generated Application Preview</h3>
                    <p className="text-gray-600 mb-6">Your application has been generated successfully!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Features Included:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Modern responsive design</li>
                          <li>• Component-based architecture</li>
                          <li>• TypeScript support</li>
                          <li>• Production-ready code</li>
                        </ul>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Ready to Deploy:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Optimized build configuration</li>
                          <li>• Dependencies included</li>
                          <li>• Documentation provided</li>
                          <li>• Best practices implemented</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {generatedCode && activeTab === 'files' && (
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <FileText className="h-4 w-4" />
                      <span className="font-code text-sm">src/App.tsx</span>
                      <span className="text-xs text-gray-500">Main component</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <FileText className="h-4 w-4" />
                      <span className="font-code text-sm">src/components/</span>
                      <span className="text-xs text-gray-500">Reusable components</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <FileText className="h-4 w-4" />
                      <span className="font-code text-sm">src/styles/</span>
                      <span className="text-xs text-gray-500">Styling files</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Package className="h-4 w-4" />
                      <span className="font-code text-sm">package.json</span>
                      <span className="text-xs text-gray-500">Dependencies</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <FileText className="h-4 w-4" />
                      <span className="font-code text-sm">README.md</span>
                      <span className="text-xs text-gray-500">Documentation</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeGenerator;