import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  BookOpen, 
  Code2, 
  Terminal, 
  Layers, 
  Settings, 
  Cpu, 
  Database, 
  ShieldAlert,
  Home,
  ChevronRight
} from 'lucide-react';
import { topics } from '../data/pythonData';

const Sidebar: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    basics: Terminal,
    control_flow: Layers,
    functions: Settings,
    data_structures: Database,
    comprehensions: Code2,
    file_handling: BookOpen,
    oop: Cpu,
    exceptions: ShieldAlert
  };

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 overflow-y-auto hidden lg:block z-30">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Code2 className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight">PyMastery</span>
        </Link>

        <nav className="space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-50'
              }`
            }
          >
            <Home size={18} />
            <span>Overview</span>
          </NavLink>

          <div className="mt-8 mb-4 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Curriculum
          </div>

          {topics.map((topic) => {
            const Icon = iconMap[topic.id] || BookOpen;
            return (
              <NavLink
                key={topic.id}
                to={`/topic/${topic.id}`}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2 rounded-lg transition-colors group ${
                    isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} />
                  <span>{topic.title}</span>
                </div>
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
