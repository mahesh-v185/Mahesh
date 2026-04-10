import React from 'react';
import { ChevronRight, Home, Eye, Upload, FileUp, RefreshCw, Award } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="bg-[#f4f7f9] min-h-[600px] pb-12">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-gray-500">
          <Home size={14} className="text-blue-600" />
          <ChevronRight size={12} />
          <span className="text-blue-600 cursor-pointer hover:underline">Dashboard</span>
          <ChevronRight size={12} />
          <span className="text-gray-400">View Activities</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-8">
        <div className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold text-[#07294d] mb-12">Welcome to UUCMS</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#07294d] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-blue-900 transition-all flex items-center gap-2 shadow-md">
                <Eye size={16} /> View My Admission Details
              </button>
              <button className="bg-[#07294d] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-blue-900 transition-all flex items-center gap-2 shadow-md">
                <Upload size={16} /> Upload My Photo and Signature
              </button>
              <button className="bg-[#07294d] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-blue-900 transition-all flex items-center gap-2 shadow-md">
                <FileUp size={16} /> Upload Documents
              </button>
              <button className="bg-[#07294d] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-blue-900 transition-all flex items-center gap-2 shadow-md">
                <RefreshCw size={16} /> Admission Updates
              </button>
              <button className="bg-[#07294d] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-blue-900 transition-all flex items-center gap-2 shadow-md">
                <Award size={16} /> Apply For Honours
              </button>
            </div>
          </div>
          
          {/* Notification Area */}
          <div className="bg-gray-50 border-t border-gray-100 p-4">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white px-3 py-1 rounded text-[10px] font-bold whitespace-nowrap">
                NOTIFICATIONS
              </div>
              <marquee className="text-xs text-green-800 font-medium">
                • Admissions for Academic Year 2026-27 are now open for all state universities. • Last date for Examination Fee payment for 2nd and 4th Semester is extended to April 15th. • New module for Faculty Research Grant applications is now live.
              </marquee>
            </div>
          </div>
        </div>

        {/* Flowbits Button */}
        <div className="mt-8">
          <button className="bg-[#07294d] text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-900 transition-all shadow-md">
            Flowbits
          </button>
        </div>
      </div>
    </div>
  );
};
