import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { RoleOption } from './types';
import Link from 'next/link';
interface RoleCardProps {
  role: RoleOption;
}

export const RoleCard: React.FC<RoleCardProps> = ({ role }) => {
  return (
    <Link 
      href={role.href}
      className="group relative flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-cyan-500 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer overflow-hidden"
    >
      {/* Decorative Background Blob */}
      <div className={`absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-linear-to-br ${role.primaryColor} opacity-10 dark:opacity-20 rounded-full blur-2xl group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500`} />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-linear-to-br ${role.primaryColor} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
          {role.visualIcon}
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-700 dark:group-hover:text-cyan-400 transition-colors">
          {role.title}
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          {role.description}
        </p>

        <div className="space-y-3 mb-8 flex-1">
          {role.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0">
                <CheckCircle2 size={18} />
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <div className="w-full py-3 px-4 rounded-lg bg-cyan-800 dark:bg-cyan-700 text-white font-semibold text-center border border-slate-200 dark:border-slate-600 group-hover:bg-cyan-900 dark:group-hover:bg-cyan-600 group-hover:text-white group-hover:border-brand-600 dark:group-hover:border-cyan-500 transition-all duration-300 flex items-center justify-center gap-2">
            {role.buttonText}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};