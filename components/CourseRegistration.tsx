import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { InternalMarks } from './InternalMarks';
import { Attendance } from './Attendance';

interface CourseRegistrationProps {
  onBack: () => void;
}

export const CourseRegistration: React.FC<CourseRegistrationProps> = ({ onBack }) => {
  const [view, setView] = useState<'list' | 'internal-marks' | 'attendance' | 'registered-courses'>('list');
  const [selectedSemester, setSelectedSemester] = useState<any>(null);

  const semestersData: Record<string, any[]> = {
    'I': [
      { slNo: 1, paperNo: 'COURSE (PAPER) - 1', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '71108', name: 'Programming with C', credit: 4, status: 'Course Registration Approved' },
      { slNo: 2, paperNo: 'COURSE (PAPER) - 2', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '73108', name: 'LAB : Programming with C', credit: 1, status: 'Course Registration Approved' },
      { slNo: 3, paperNo: 'COURSE (PAPER) - 3', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '71109', name: 'Digital Fundamentals and Office Automation Tools', credit: 4, status: 'Course Registration Approved' },
      { slNo: 4, paperNo: 'COURSE (PAPER) - 4', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '73109', name: 'LAB : Office Automation', credit: 1, status: 'Course Registration Approved' },
      { slNo: 5, paperNo: 'COURSE (PAPER) - 5', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '71110', name: 'Mathematical Foundation', credit: 4, status: 'Course Registration Approved' },
      { slNo: 6, paperNo: 'COURSE (PAPER) - 6', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '73110', name: 'LAB : Mathematical Foundation', credit: 1, status: 'Course Registration Approved' },
      { slNo: 7, paperNo: 'COURSE (PAPER) - 7', type: 'Language', mandatory: 'Mandatory', subject: '-', code: '71101', name: 'Language English - I', credit: 3, status: 'Course Registration Approved' },
      { slNo: 8, paperNo: 'COURSE (PAPER) - 8', type: 'Language', mandatory: 'Elective', subject: '-', code: '71102', name: 'Kannada Bhasha Patrike - I', credit: 3, status: 'Course Registration Approved' },
      { slNo: 9, paperNo: 'COURSE (PAPER) - 9', type: 'Constitutional Moral Values', mandatory: 'Elective', subject: '-', code: '70125', name: 'Environmental Studies', credit: 2, status: 'Course Registration Approved' },
    ],
    'II': [
      { slNo: 1, paperNo: 'COURSE (PAPER) - 1', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '71208', name: 'Data Structures using C', credit: 4, status: 'Course Registration Approved' },
      { slNo: 2, paperNo: 'COURSE (PAPER) - 2', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '73208', name: 'LAB : Data Structures', credit: 1, status: 'Course Registration Approved' },
      { slNo: 3, paperNo: 'COURSE (PAPER) - 3', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '71209', name: 'Object Oriented Concepts using Java', credit: 4, status: 'Course Registration Approved' },
      { slNo: 4, paperNo: 'COURSE (PAPER) - 4', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '73209', name: 'LAB : Java Programming', credit: 1, status: 'Course Registration Approved' },
      { slNo: 5, paperNo: 'COURSE (PAPER) - 5', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '71210', name: 'Accounting', credit: 4, status: 'Course Registration Approved' },
      { slNo: 6, paperNo: 'COURSE (PAPER) - 6', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '73210', name: 'LAB : TALLY', credit: 1, status: 'Course Registration Approved' },
      { slNo: 7, paperNo: 'COURSE (PAPER) - 7', type: 'Language', mandatory: 'Mandatory', subject: '-', code: '71201', name: 'Language English - II', credit: 3, status: 'Course Registration Approved' },
      { slNo: 8, paperNo: 'COURSE (PAPER) - 8', type: 'Language', mandatory: 'Elective', subject: '-', code: '71202', name: 'Kannada Bhasha Patrike - II', credit: 3, status: 'Course Registration Approved' },
      { slNo: 9, paperNo: 'COURSE (PAPER) - 9', type: 'Constitutional Moral Values', mandatory: 'Elective', subject: '-', code: '70222', name: 'Indian Constitution', credit: 2, status: 'Course Registration Approved' },
    ],
    'III': [
      { slNo: 1, paperNo: 'COURSE (PAPER) - 1', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '71309', name: 'Database Management Systems', credit: 4, status: 'Course Registration Approved' },
      { slNo: 2, paperNo: 'COURSE (PAPER) - 2', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '73308', name: 'LAB - DBMS', credit: 1, status: 'Course Registration Approved' },
      { slNo: 3, paperNo: 'COURSE (PAPER) - 3', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '71310', name: 'C# and .NET Framework', credit: 4, status: 'Course Registration Approved' },
      { slNo: 4, paperNo: 'COURSE (PAPER) - 4', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '73309', name: 'LAB - C and .NET Framework', credit: 1, status: 'Course Registration Approved' },
      { slNo: 5, paperNo: 'COURSE (PAPER) - 5', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '71311', name: 'Computer Communication and Networks', credit: 4, status: 'Course Registration Approved' },
      { slNo: 6, paperNo: 'COURSE (PAPER) - 6', type: 'Discipline Core (DSC)', mandatory: 'Mandatory', subject: '-', code: '73310', name: 'LAB - Computer Networks', credit: 1, status: 'Course Registration Approved' },
      { slNo: 7, paperNo: 'COURSE (PAPER) - 7', type: 'Discipline Elective (DSE)', mandatory: 'Mandatory', subject: '-', code: '71312', name: 'Computer Science Elective 1 - Web Content Management System', credit: 2, status: 'Course Registration Approved' },
      { slNo: 8, paperNo: 'COURSE (PAPER) - 8', type: 'Language', mandatory: 'Mandatory', subject: '-', code: '71301', name: 'Language English - III', credit: 3, status: 'Course Registration Approved' },
      { slNo: 9, paperNo: 'COURSE (PAPER) - 9', type: 'Language', mandatory: 'Elective', subject: '-', code: '71302', name: 'ಕನ್ನಡ ಭಾಷಾ ಪತ್ರಿಕೆ -3', credit: 3, status: 'Course Registration Approved' },
    ]
  };

  const termDetails = [
    { slNo: 1, academicYear: '2024-25', term: 'I' },
    { slNo: 2, academicYear: '2024-25', term: 'II' },
    { slNo: 3, academicYear: '2025-26', term: 'III' },
  ];

  if (view === 'internal-marks') {
    return <InternalMarks onBack={() => setView('list')} semester={selectedSemester} />;
  }

  if (view === 'attendance') {
    return <Attendance onBack={() => setView('list')} semester={selectedSemester} />;
  }

  if (view === 'registered-courses') {
    const courses = semestersData[selectedSemester?.term] || [];
    const totalCredits = courses.reduce((acc, curr) => acc + curr.credit, 0);

    return (
      <div className="bg-[#f4f7f9] min-h-screen pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12 pt-8">
          <button 
            onClick={() => setView('list')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Course List
          </button>
          <div className="bg-white border border-gray-300 shadow-sm rounded-none overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 py-3 px-6">
              <h4 className="text-center text-lg font-bold text-[#07294d]">Registered Courses</h4>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm">
                <div>
                  <label className="text-gray-500">Student Reg No : </label>
                  <strong className="text-[#07294d]"> U24AN24S0084 </strong>
                </div>
                <div>
                  <label className="text-gray-500">Student Name : </label>
                  <strong className="text-[#07294d]"> Mahesh V </strong>
                </div>
                <div>
                  <label className="text-gray-500">Term/Semester : </label>
                  <strong className="text-[#07294d]"> {selectedSemester?.term} </strong>
                </div>
                <div>
                  <label className="text-gray-500">Program Name : </label>
                  <strong className="text-[#07294d]"> Bachelor of Computer Applications </strong>
                </div>
                <div>
                  <label className="text-gray-500">Discipline/Combination : </label>
                  <strong className="text-[#07294d]"> Computer Applications </strong>
                </div>
                <div>
                  <label className="text-gray-500">Required Semester Credits : </label>
                  <span className="text-gray-500">Minimum :</span> <strong className="text-[#07294d]">23</strong>
                  <span className="text-gray-500 ml-2">Maximum :</span> <strong className="text-[#07294d]">23</strong>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-xs">
                  <thead className="bg-[#07294d] text-white">
                    <tr>
                      <th className="border border-gray-200 px-3 py-2 text-center">Sl. No</th>
                      <th className="border border-gray-200 px-3 py-2 text-center">Course/Paper No</th>
                      <th className="border border-gray-200 px-3 py-2 text-center">Course Type</th>
                      <th className="border border-gray-200 px-3 py-2 text-center">Mandatory/Elective</th>
                      <th className="border border-gray-200 px-3 py-2 text-center">Subject Name</th>
                      <th className="border border-gray-200 px-3 py-2 text-center">Course Code</th>
                      <th className="border border-gray-200 px-3 py-2 text-center">Course Name</th>
                      <th className="border border-gray-200 px-3 py-2 text-center">Course Credit</th>
                      <th className="border border-gray-200 px-3 py-2 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((course) => (
                      <tr key={course.slNo} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-3 text-center">{course.slNo}</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">{course.paperNo}</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">{course.type}</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">{course.mandatory}</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">{course.subject}</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-blue-600 underline cursor-pointer">{course.code}</td>
                        <td className="border border-gray-200 px-3 py-3">{course.name}</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">{course.credit}</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-green-600 font-medium">{course.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-gray-50 border-t border-gray-100 p-4 flex justify-center gap-4">
              <button className="bg-blue-500 text-white px-6 py-1.5 rounded text-xs font-medium hover:bg-blue-600 transition-all">Print</button>
              <button className="bg-blue-500 text-white px-6 py-1.5 rounded text-xs font-medium hover:bg-blue-600 transition-all">Download</button>
              <button 
                onClick={() => setView('list')}
                className="bg-blue-500 text-white px-6 py-1.5 rounded text-xs font-medium hover:bg-blue-600 transition-all"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f4f7f9] min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 py-3 px-6">
            <h4 className="text-center text-lg font-bold text-[#07294d]">Student Course Details</h4>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm">
              <div>
                <label className="text-gray-500">Student Reg No : </label>
                <strong className="text-[#07294d]"> U24AN24S0084 </strong>
              </div>
              <div>
                <label className="text-gray-500">Student Name : </label>
                <strong className="text-[#07294d]"> Mahesh V </strong>
              </div>
              <div>
                <label className="text-gray-500">Program Name : </label>
                <strong className="text-[#07294d]"> Bachelor of Computer Applications </strong>
              </div>
              <div>
                <label className="text-gray-500">Scheme Name : </label>
                <strong className="text-[#07294d]"> NUUGSEP24 </strong>
              </div>
              <div>
                <label className="text-gray-500">Discipline/Combination : </label>
                <strong className="text-[#07294d]"> Computer Applications </strong>
              </div>
              <div>
                <label className="text-gray-500">Current Term/Semester : </label>
                <strong className="text-[#07294d]"> III </strong>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead className="bg-[#07294d] text-white">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-center">Sl. No</th>
                    <th className="border border-gray-200 px-4 py-2 text-center">Academic Year</th>
                    <th className="border border-gray-200 px-4 py-2 text-center">Term/Semester</th>
                    <th className="border border-gray-200 px-4 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {termDetails.map((item) => (
                    <tr key={item.slNo} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-4 text-center">{item.slNo}</td>
                      <td className="border border-gray-200 px-4 py-4 text-center">{item.academicYear}</td>
                      <td className="border border-gray-200 px-4 py-4 text-center">{item.term}</td>
                      <td className="border border-gray-200 px-4 py-4 text-center">
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                          <button 
                            onClick={() => { setSelectedSemester(item); setView('registered-courses'); }}
                            className="text-blue-600 underline hover:text-blue-800 text-xs"
                          >
                            View Registered Courses
                          </button>
                          <button 
                            onClick={() => { setSelectedSemester({ ...item, semester: item.term }); setView('internal-marks'); }}
                            className="text-blue-600 underline hover:text-blue-800 text-xs"
                          >
                            View Internal Assessment
                          </button>
                          <button 
                            onClick={() => { setSelectedSemester({ ...item, semester: item.term }); setView('attendance'); }}
                            className="text-blue-600 underline hover:text-blue-800 text-xs"
                          >
                            View Attendance
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-gray-50 border-t border-gray-100 p-4 flex justify-center">
            <button 
              onClick={onBack}
              className="bg-blue-500 text-white px-8 py-2 rounded text-sm font-medium hover:bg-blue-600 transition-all flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
