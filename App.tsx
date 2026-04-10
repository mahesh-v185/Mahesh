import React, { useState } from 'react';
import { TopHeader } from './components/TopHeader';
import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { CourseRegistration } from './components/CourseRegistration';
import { ExamApplication } from './components/ExamApplication';
import { ExamResult } from './components/ExamResult';
import { Footer } from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'course-registration' | 'exam-applications' | 'exam-result'>('dashboard');
  const [selectedSemesterId, setSelectedSemesterId] = useState<number>(1);

  return (
    <div className="min-h-screen bg-[#f4f7f9] text-slate-800">
      <TopHeader />
      <Banner />
      <Navbar onNavigate={(view) => setCurrentView(view as any)} />
      <div className="bg-white py-1 px-4 md:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-end">
          <p className="text-[10px] md:text-xs text-gray-600 font-medium">
            Mahesh V (Nrupathunga University (Main Campus) (Government Science College Autonomous Bengaluru), Bengaluru )
          </p>
        </div>
      </div>
      <main>
        {currentView === 'dashboard' ? (
          <Dashboard />
        ) : currentView === 'course-registration' ? (
          <CourseRegistration onBack={() => setCurrentView('dashboard')} />
        ) : currentView === 'exam-applications' ? (
          <ExamApplication 
            onBack={() => setCurrentView('dashboard')} 
            onShowResult={(id) => {
              setSelectedSemesterId(id);
              setCurrentView('exam-result');
            }} 
          />
        ) : (
          <ExamResult 
            onBack={() => setCurrentView('exam-applications')} 
            semesterId={selectedSemesterId}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
