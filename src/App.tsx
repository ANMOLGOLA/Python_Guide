import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';
import { topics } from './data/pythonData';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Sidebar />
      <main className="flex-1 lg:pl-64">
        <div className="max-w-5xl mx-auto px-4 py-8 md:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            {topics.map((topic) => (
              <Route 
                key={topic.id} 
                path={`/topic/${topic.id}`} 
                element={<TopicPage topic={topic} />} 
              />
            ))}
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
