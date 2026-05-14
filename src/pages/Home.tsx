import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookCheck, Code, Zap } from 'lucide-react';
import { topics } from '../data/pythonData';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Master Python Through <span className="text-blue-600">Practice</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 max-w-2xl mx-auto"
        >
          The ultimate guide for students who know the basics but want to achieve mastery. 
          Step-by-step progression with over 160+ curated questions.
        </motion.p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
            <BookCheck className="text-blue-600 w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Gradual Progression</h3>
          <p className="text-slate-500 text-sm">Questions range from Basic to Hard, ensuring you never feel overwhelmed while building logic.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="bg-emerald-100 p-3 rounded-xl w-fit mb-4">
            <Code className="text-emerald-600 w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Deep Explanations</h3>
          <p className="text-slate-500 text-sm">Every question comes with a detailed solution, key points, and concepts to remember.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="bg-purple-100 p-3 rounded-xl w-fit mb-4">
            <Zap className="text-purple-600 w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Core Concepts</h3>
          <p className="text-slate-500 text-sm">Detailed breakdown of Python properties and built-in features for every single topic.</p>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          Start Your Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/topic/${topic.id}`}
                className="group flex items-center justify-between p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{topic.title}</h3>
                  <p className="text-slate-500 text-sm">{topic.questions.length} Practice Questions</p>
                </div>
                <ArrowRight className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
