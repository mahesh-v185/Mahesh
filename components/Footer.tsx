import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07294d] text-white">
      {/* Disclaimer Section */}
      <div className="py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] opacity-80 leading-relaxed">
            <span className="font-bold mr-1">Disclaimer:</span>
            Please note this page also provides links to websites/web pages of Govt. Ministries/Departments/Organisations. The content of these websites are owned by the respective organisations and they may be contacted for any further information or suggestion
          </p>
        </div>
      </div>

      {/* Help Desk Section */}
      <div className="py-4 px-4 border-b border-white/10 bg-[#062444]">
        <div className="max-w-7xl mx-auto text-center space-y-1">
          <p className="text-[11px]">
            <span className="font-bold text-blue-300 mr-1">Technical Help Desk Number:</span>
            080-24411500 (10AM-5.30PM)
          </p>
          <p className="text-[11px]">
            <span className="font-bold text-blue-300 mr-1">Email:</span>
            uucms.helpdesk@karnataka.gov.in
          </p>
          <div className="pt-2">
            <p className="text-[10px] opacity-70">
              <span className="font-bold mr-1">For Payment Related Queries, please contact:</span>
              +91-022-24994200, +91-022-49142595 
              <span className="font-bold ml-2 mr-1 text-blue-300">Email:</span> info_ndml@ndml.in
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-4 px-4 bg-[#051e38]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] opacity-60">
            Copyright © 2021 all rights reserved. Designed & Developed by Centre for Smart Governance (V_ADM_4.10_A1.7_E_0.3)
            <span className="ml-1 font-bold">S4</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
