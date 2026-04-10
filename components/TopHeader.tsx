import React from 'react';
import { Mail, Type } from 'lucide-react';

export const TopHeader: React.FC = () => {
  return (
    <div className="bg-[#07294d] text-white py-1 px-4 md:px-12 flex justify-between items-center text-xs border-b border-white/10">
      <div className="flex items-center gap-2">
        <Mail size={14} className="text-blue-400" />
        <a href="mailto:contact-uucms.helpdesk@gmail.com" className="hover:underline">
          contact-uucms.helpdesk@gmail.com
        </a>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 border-r border-white/20 pr-3">
          <button className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-sm font-bold text-[10px] hover:bg-gray-200 transition-colors" title="Black and White">A</button>
          <button className="w-6 h-6 flex items-center justify-center border border-white rounded-sm font-bold text-[10px] hover:bg-white/10 transition-colors" title="Standard">A</button>
        </div>
        <div className="flex items-center gap-1 border-r border-white/20 pr-3">
          <button className="px-2 py-0.5 hover:bg-white/10 rounded">-</button>
          <button className="px-2 py-0.5 hover:bg-white/10 rounded font-bold text-[10px]">A</button>
          <button className="px-2 py-0.5 hover:bg-white/10 rounded">+</button>
        </div>
        <div className="flex items-center gap-2 font-medium">
          <span className="cursor-pointer hover:text-yellow-400 transition-colors">ಕನ್ನಡ</span>
          <span className="opacity-50">|</span>
          <span className="cursor-pointer hover:text-yellow-400 transition-colors">English</span>
        </div>
      </div>
    </div>
  );
};
