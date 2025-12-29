import React, { useState } from 'react';
import { generateCreativeBrief } from '../services/geminiService';
import { ProjectBrief } from '../types';
import { Sparkles, Loader2, FileText, Clock, DollarSign, CheckCircle } from 'lucide-react';

const Consultation: React.FC = () => {
  const [desc, setDesc] = useState('');
  const [industry, setIndustry] = useState('');
  const [brief, setBrief] = useState<ProjectBrief | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!desc || !industry) return;

    setLoading(true);
    setError('');
    setBrief(null);

    try {
      const result = await generateCreativeBrief(desc, industry);
      setBrief(result);
    } catch (err) {
      setError("Unable to generate brief. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultation" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-lumina-card/50 to-lumina-dark z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Form */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-indigo-400 mb-4">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold tracking-wider uppercase text-sm">AI Creative Consultant</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Start Your Project</h2>
              <p className="text-gray-400 text-lg">
                Not sure where to start? Describe your idea, and our AI will draft a preliminary production brief and cost estimation for you instantly.
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-6 glass-panel p-8 rounded-2xl">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Industry</label>
                <select 
                  value={industry} 
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white transition-all"
                  required
                >
                  <option value="" disabled>Select your industry</option>
                  <option value="Consumer Electronics">Consumer Electronics</option>
                  <option value="Medical Device">Medical Device</option>
                  <option value="Industrial Engineering">Industrial Engineering</option>
                  <option value="Software/SaaS">Software / SaaS</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Project Vision</label>
                <textarea 
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="e.g. I need a 30-second video showing how our new solar panel installs on a roof and withstands hail."
                  className="w-full h-32 bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white transition-all resize-none"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles className="w-4 h-4" />}
                {loading ? 'Analyzing Requirement...' : 'Generate Creative Brief'}
              </button>
              
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            </form>
          </div>

          {/* Right Column: Result */}
          <div className="flex flex-col justify-center">
            {brief ? (
              <div className="glass-panel p-8 rounded-2xl border border-indigo-500/30 animate-float">
                <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileText className="text-indigo-400" /> Preliminary Brief
                  </h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 font-mono">
                    AI GENERATED
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">Executive Summary</h4>
                    <p className="text-gray-300 leading-relaxed">{brief.summary}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-black/30 rounded-lg">
                      <div className="flex items-center gap-2 text-indigo-400 mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">Timeline</span>
                      </div>
                      <p className="font-mono text-white">{brief.estimatedTimeline}</p>
                    </div>
                    <div className="p-4 bg-black/30 rounded-lg">
                      <div className="flex items-center gap-2 text-indigo-400 mb-2">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">Est. Budget</span>
                      </div>
                      <p className="font-mono text-white">{brief.budgetTier}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">Recommended Style</h4>
                    <p className="text-indigo-300">{brief.recommendedStyle}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">Requirements</h4>
                    <ul className="space-y-2">
                      {brief.technicalRequirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full mt-4 py-3 border border-indigo-500/50 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-colors">
                    Save & Contact Sales
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[400px] border-2 border-dashed border-gray-800 rounded-2xl flex flex-col items-center justify-center text-center p-8 opacity-50">
                <Sparkles className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-600 mb-2">Ready to Visualize</h3>
                <p className="text-gray-500 max-w-sm">
                  Complete the form to receive an instant AI-generated project strategy and estimation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;