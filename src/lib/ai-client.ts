// AI Client for code generation
class AIClient {
  private openaiKey: string;
  private openrouterKey: string;
  private geminiKey: string;

  constructor() {
    this.openaiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
    this.openrouterKey = import.meta.env.VITE_OPENROUTER_API_KEY || '';
    this.geminiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
  }

  async generateCode(prompt: string, framework: string): Promise<{ 
    code: string; 
    files: Array<{ name: string; content: string; type: string }>;
    preview: string;
  }> {
    try {
      const response = await this.callOpenRouter(prompt, framework);
      return this.parseAIResponse(response, framework);
    } catch (error) {
      console.error('AI generation failed:', error);
      return this.generateFallbackCode(prompt, framework);
    }
  }

  private async callOpenRouter(prompt: string, framework: string): Promise<string> {
    const systemPrompt = `You are an expert full-stack developer. Generate production-ready code based on the user's request. 
    Framework: ${framework}
    
    Return a JSON object with:
    - code: Main component/app code
    - files: Array of additional files needed
    - description: Brief description of what was built
    
    Make the code modern, clean, and fully functional.`;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.openrouterKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.2-90b-vision-instruct',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 4000
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  }

  private parseAIResponse(response: string, framework: string): {
    code: string;
    files: Array<{ name: string; content: string; type: string }>;
    preview: string;
  } {
    try {
      // Try to extract JSON from response
      const jsonMatch = response.match(/```json\n([\s\S]*?)\n```/) || 
                       response.match(/\{[\s\S]*\}/);
      
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        return {
          code: parsed.code || response,
          files: parsed.files || [],
          preview: parsed.description || 'Generated application'
        };
      }
    } catch (e) {
      console.warn('Failed to parse AI response as JSON, using raw response');
    }

    // Fallback: extract code blocks
    const codeBlocks = response.match(/```[\w]*\n([\s\S]*?)\n```/g) || [];
    const mainCode = codeBlocks[0]?.replace(/```[\w]*\n/, '').replace(/\n```$/, '') || response;

    return {
      code: mainCode,
      files: this.generateDefaultFiles(framework),
      preview: 'AI-generated application'
    };
  }

  private generateFallbackCode(prompt: string, framework: string): {
    code: string;
    files: Array<{ name: string; content: string; type: string }>;
    preview: string;
  } {
    const templates = {
      react: `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GeneratedApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Generated based on: ${prompt}
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Generated Application
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
            <p className="text-gray-600">Your requested functionality will be implemented here.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
            <p className="text-gray-600">Additional features based on your prompt.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
            <p className="text-gray-600">More functionality will be added here.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GeneratedApp;`,
      vue: `<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Generated Vue App</h1>
      <!-- Generated based on: ${prompt} -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Vue Component</h3>
          <p class="text-gray-600">Your Vue application features here.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeneratedApp',
  data() {
    return {
      loading: false,
      data: []
    }
  }
}
</script>`,
      nodejs: `const express = require('express');
const cors = require('cors');
const app = express();

// Generated based on: ${prompt}

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Generated API is running' });
});

app.get('/api/data', (req, res) => {
  res.json({ 
    message: 'Your generated API endpoint',
    data: [],
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`
    };

    return {
      code: templates[framework as keyof typeof templates] || templates.react,
      files: this.generateDefaultFiles(framework),
      preview: `Generated ${framework} application based on your prompt`
    };
  }

  private generateDefaultFiles(framework: string): Array<{ name: string; content: string; type: string }> {
    const baseFiles = [
      {
        name: 'README.md',
        content: `# Generated Application\n\nThis application was generated using AI-powered code generation.\n\n## Getting Started\n\n\`\`\`bash\nnpm install\nnpm run dev\n\`\`\``,
        type: 'documentation'
      },
      {
        name: 'package.json',
        content: JSON.stringify({
          name: 'generated-app',
          version: '1.0.0',
          scripts: {
            dev: framework === 'nodejs' ? 'node index.js' : 'vite',
            build: 'vite build'
          },
          dependencies: framework === 'react' ? {
            react: '^18.2.0',
            'react-dom': '^18.2.0',
            'framer-motion': '^10.16.4'
          } : {}
        }, null, 2),
        type: 'config'
      }
    ];

    return baseFiles;
  }
}

export const aiClient = new AIClient();