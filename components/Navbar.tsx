import React, { useState } from 'react';
import { Menu, X, ChevronDown, UserCircle } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#' },
  { 
    name: 'Student', 
    href: '#', 
    submenu: [
      'Student Profile', 'Profile Edit List', 'Scholarship', 'Hostel Notifications', 
      'Placement News', 'Defence/Govt Recruitment', 'Internship & Training', 
      'Cultural/Sports', 'Other Notifications', 'Revalidate Aadhaar', 'Bus Pass'
    ] 
  },
  { 
    name: 'Academics', 
    href: '#', 
    submenu: ['Course Registration', 'Academic Calender Of Events', 'View Timetable', 'Proctor/Counsellor System'] 
  },
  { 
    name: 'Exam', 
    href: '#', 
    submenu: [
      'Exam Applications', 'Student Fee Payment Transaction Details', 'Exam Re-evaluation', 
      'Rejection of Results', 'Challenge Valuation', 'Convocation', 'Student Services'
    ] 
  },
  { name: 'Reports', href: '#', submenu: ['Admission Payment Transaction History'] },
  { name: 'Help Desk', href: '#', submenu: ['Raise Compliant', 'View Compliant'] },
];

interface NavbarProps {
  onNavigate?: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleSubItemClick = (e: React.MouseEvent, sub: string) => {
    if (onNavigate) {
      e.preventDefault();
      if (sub === 'Course Registration') {
        onNavigate('course-registration');
      } else if (sub === 'Exam Applications') {
        onNavigate('exam-applications');
      }
      setIsOpen(false);
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('dashboard');
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-[#07294d] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex justify-between h-12">
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={(e) => item.name === 'Home' && handleHomeClick(e)}
                  className="px-4 py-3 text-sm font-medium hover:bg-white hover:text-[#07294d] transition-all flex items-center gap-1"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={14} />}
                </button>
                
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute left-0 w-64 bg-white text-[#07294d] shadow-xl border-t-2 border-[#07294d] py-2">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        onClick={(e) => handleSubItemClick(e, sub)}
                        className="block px-4 py-2 text-xs hover:bg-gray-100 hover:text-blue-700 transition-colors border-b border-gray-50 last:border-0"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block text-[10px] text-right opacity-80 max-w-[200px] leading-tight">
              Mahesh V (Nrupathunga University (Main Campus)...)
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <UserCircle size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#07294d] border-t border-white/10 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <button 
                  className="w-full text-left text-white block px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
                  onClick={(e) => {
                    if (item.name === 'Home') {
                      handleHomeClick(e);
                      setIsOpen(false);
                    } else {
                      setActiveDropdown(activeDropdown === item.name ? null : item.name);
                    }
                  }}
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} className={activeDropdown === item.name ? 'rotate-180' : ''} />}
                </button>
                {item.submenu && activeDropdown === item.name && (
                  <div className="pl-6 space-y-1 bg-white/5 py-2">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        onClick={(e) => handleSubItemClick(e, sub)}
                        className="text-gray-300 block px-3 py-1.5 text-sm hover:text-white"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
