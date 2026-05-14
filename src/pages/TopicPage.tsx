import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, ChevronUp, Info, Lightbulb, AlertTriangle } from 'lucide-react';
import { Topic } from '../types';

interface TopicPageProps {
  topic: Topic;
}

const TopicPage: React.FC<TopicPageProps> = ({ topic }) => {
  const [openSolution, setOpenSolution] = useState<number | null>(null);

  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
          Module {topic.id.replace('_', ' ')}
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900">{topic.title}</h1>
        <p className="text-lg text-slate-600">{topic.description}</p>
      </header>

      {/* Concept Guide Section */}
      <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="bg-slate-900 p-6 text-white">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Info className="text-blue-400" />
            Concept Mastery Guide
          </h2>
        </div>
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Lightbulb className="text-amber-500" size={20} />
                Properties to Understand
              </h3>
              <ul className="space-y-3">
                {topic.properties.map((prop, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{prop}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="text-rose-500" size={20} />
                Things to Remember
              </h3>
              <ul className="space-y-3">
                {topic.remember.map((item, i) => (
                  <li key={i} className="flex gap-3 bg-rose-50 p-3 rounded-lg text-rose-800 text-sm leading-relaxed border border-rose-100">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">Key Learning Points</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topic.keyPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-blue-800 text-sm">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          Practice Lab
          <span className="text-sm font-normal text-slate-500 ml-2">({topic.questions.length} questions)</span>
        </h2>
        
        <div className="space-y-4">
          {topic.questions.map((q, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl border transition-all ${
                openSolution === index ? 'border-blue-400 ring-4 ring-blue-50' : 'border-slate-200'
              }`}
            >
              <button 
                onClick={() => setOpenSolution(openSolution === index ? null : index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      q.difficulty === 'basic' ? 'bg-emerald-100 text-emerald-700' :
                      q.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-rose-100 text-rose-700'
                    }`}>
                      {q.difficulty}
                    </span>
                    <span className="text-slate-400 font-mono text-xs">Question #{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 leading-snug">{q.question}</h3>
                </div>
                {openSolution === index ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>

              <AnimatePresence>
                {openSolution === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 space-y-4 border-t border-slate-100">
                      <div className="mt-4">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Solution</p>
                        <pre className="bg-slate-900 text-blue-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                          <code>{q.solution}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Explanation</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{q.explanation}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopicPage;
