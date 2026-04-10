import React from 'react';

export const Banner: React.FC = () => {
  return (
    <div className="bg-white py-4 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        <div className="flex justify-center">
          <img 
            src="https://uucms.karnataka.gov.in/Content/images/index_kan/UUCMS_Logo-01.png" 
            alt="UUCMS Logo" 
            className="h-16 md:h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/uucms-logo/200/80";
            }}
          />
        </div>
        <div className="flex justify-center">
          <img 
            src="https://uucms.karnataka.gov.in/Content/images/index_eng/sid_cm_eng.png" 
            alt="Chief Minister" 
            className="h-16 md:h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/cm/200/80";
            }}
          />
        </div>
        <div className="flex justify-center">
          <img 
            src="https://uucms.karnataka.gov.in/Content/images/index_eng/new_min_eng.png" 
            alt="Higher Education Minister" 
            className="h-16 md:h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/minister/200/80";
            }}
          />
        </div>
        <div className="flex justify-center">
          <img 
            src="https://uucms.karnataka.gov.in/Content/images/index_eng/gok-logo-uucms-en.png" 
            alt="GOK Logo" 
            className="h-16 md:h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/gok-logo/200/80";
            }}
          />
        </div>
      </div>
    </div>
  );
};
