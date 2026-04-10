import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface InternalMark {
  slNo: number;
  courseCode: string;
  courseName: string;
  component: string;
  maximumMarks: number;
  marksScored: number;
}

interface Semester {
  id: number;
  semester: string;
  discipline: string;
  marks: InternalMark[];
}

interface InternalMarksProps {
  onBack: () => void;
  semester?: Semester;
}

export const InternalMarks: React.FC<InternalMarksProps> = ({ onBack, semester }) => {
  const [showDetailed, setShowDetailed] = useState(false);

  const allSemesters: Semester[] = [
    {
      id: 1,
      semester: 'I',
      discipline: 'Computer Applications',
      marks: [
        {
          slNo: 1,
          courseCode: '71109',
          courseName: 'Digital Fundamentals and Office Automation Tools',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 18.00
        },
        {
          slNo: 2,
          courseCode: '70125',
          courseName: 'Environmental Studies',
          component: 'Lecture',
          maximumMarks: 10,
          marksScored: 7.00
        },
        {
          slNo: 3,
          courseCode: '71102',
          courseName: 'Kannada Bhasha Patrike - I',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 19.00
        },
        {
          slNo: 4,
          courseCode: '73110',
          courseName: 'LAB : Mathematical Foundation',
          component: 'Practical',
          maximumMarks: 10,
          marksScored: 8.00
        },
        {
          slNo: 5,
          courseCode: '73109',
          courseName: 'LAB : Office Automation',
          component: 'Practical',
          maximumMarks: 10,
          marksScored: 8.00
        },
        {
          slNo: 6,
          courseCode: '73108',
          courseName: 'LAB : Programming with C',
          component: 'Practical',
          maximumMarks: 10,
          marksScored: 10.00
        },
        {
          slNo: 7,
          courseCode: '71101',
          courseName: 'Language English - I',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 18.00
        },
        {
          slNo: 8,
          courseCode: '71110',
          courseName: 'Mathematical Foundation',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 20.00
        },
        {
          slNo: 9,
          courseCode: '71108',
          courseName: 'Programming with C',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 20.00
        }
      ]
    },
    {
      id: 2,
      semester: 'II',
      discipline: 'Computer Applications',
      marks: [
        {
          slNo: 1,
          courseCode: '71210',
          courseName: 'Accounting',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 18.00
        },
        {
          slNo: 2,
          courseCode: '71208',
          courseName: 'Data Structures using C',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 20.00
        },
        {
          slNo: 3,
          courseCode: '70222',
          courseName: 'Indian Constitution',
          component: 'Lecture',
          maximumMarks: 10,
          marksScored: 8.00
        },
        {
          slNo: 4,
          courseCode: '71202',
          courseName: 'Kannada Bhasha Patrike - II',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 12.00
        },
        {
          slNo: 5,
          courseCode: '73208',
          courseName: 'LAB : Data Structures',
          component: 'Practical',
          maximumMarks: 10,
          marksScored: 10.00
        },
        {
          slNo: 6,
          courseCode: '73209',
          courseName: 'LAB : Java Programming',
          component: 'Practical',
          maximumMarks: 10,
          marksScored: 9.00
        },
        {
          slNo: 7,
          courseCode: '73210',
          courseName: 'LAB : TALLY',
          component: 'Practical',
          maximumMarks: 10,
          marksScored: 9.00
        },
        {
          slNo: 8,
          courseCode: '71201',
          courseName: 'Language English - II',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 16.00
        },
        {
          slNo: 9,
          courseCode: '71209',
          courseName: 'Object Oriented Concepts using Java',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 18.00
        }
      ]
    },
    {
      id: 3,
      semester: 'III',
      discipline: 'Computer Applications',
      marks: [
        {
          slNo: 1,
          courseCode: '71310',
          courseName: 'C# and .NET Framework',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 20.00
        },
        {
          slNo: 2,
          courseCode: '71311',
          courseName: 'Computer Communication and Networks',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 15.00
        },
        {
          slNo: 3,
          courseCode: '71312',
          courseName: 'Computer Science Elective 1 - Web Content Management System',
          component: 'Lecture',
          maximumMarks: 10,
          marksScored: 5.00
        },
        {
          slNo: 4,
          courseCode: '71309',
          courseName: 'Database Management Systems',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 10.00
        },
        {
          slNo: 5,
          courseCode: '73309',
          courseName: 'LAB - C and .NET Framework',
          component: 'Practical',
          maximumMarks: 10,
          marksScored: 5.00
        },
        {
          slNo: 6,
          courseCode: '73310',
          courseName: 'LAB - Computer Networks',
          component: 'Practical',
          maximumMarks: 10,
          marksScored: 10.00
        },
        {
          slNo: 7,
          courseCode: '73308',
          courseName: 'LAB - DBMS',
          component: 'Practical',
          maximumMarks: 10,
          marksScored: 10.00
        },
        {
          slNo: 8,
          courseCode: '71301',
          courseName: 'Language English - III',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 15.00
        },
        {
          slNo: 9,
          courseCode: '71302',
          courseName: 'ಕನ್ನಡ ಭಾಷಾ ಪತ್ರಿಕೆ -3',
          component: 'Lecture',
          maximumMarks: 20,
          marksScored: 12.00
        }
      ]
    }
  ];

  const currentSemester = allSemesters.find(s => s.semester === semester?.semester) || allSemesters[0];
  const internalMarks = currentSemester.marks;

  const totalMaximum = internalMarks.reduce((sum, mark) => sum + mark.maximumMarks, 0);
  const totalScored = internalMarks.reduce((sum, mark) => sum + mark.marksScored, 0);
  const percentage = ((totalScored / totalMaximum) * 100).toFixed(2);

  return (
    <div className="bg-[#f4f7f9] min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Course List
        </button>

        <div className="bg-white border border-gray-300 shadow-sm rounded-none p-6 mb-6">
          <h2 className="text-xl font-bold text-[#07294d] mb-6 border-b pb-2">
            {currentSemester.semester} term internal marks
          </h2>
          
          <div className="mb-4 text-sm">
            <span className="font-semibold text-gray-600">Discipline/Combination:</span> {currentSemester.discipline}
          </div>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse border border-gray-300 text-xs">
              <thead>
                <tr className="bg-[#07294d] text-white">
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">Sl. No</th>
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">Course Code</th>
                  <th className="py-3 px-4 font-bold border border-gray-300">Course Name</th>
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">Component</th>
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">Maximum Marks</th>
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">Marks Scored</th>
                </tr>
              </thead>
              <tbody>
                {internalMarks.map((mark) => (
                  <tr key={mark.slNo} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border border-gray-300 text-center">{mark.slNo}</td>
                    <td className="py-3 px-4 border border-gray-300 text-center">{mark.courseCode}</td>
                    <td className="py-3 px-4 border border-gray-300">{mark.courseName}</td>
                    <td className="py-3 px-4 border border-gray-300 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                        mark.component === 'Lecture' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {mark.component}
                      </span>
                    </td>
                    <td className="py-3 px-4 border border-gray-300 text-center">{mark.maximumMarks}</td>
                    <td className="py-3 px-4 border border-gray-300 text-center font-medium">
                      <span className={mark.marksScored >= mark.maximumMarks * 0.8 ? 'text-green-600' : 'text-orange-600'}>
                        {mark.marksScored.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setShowDetailed(!showDetailed)}
              className="bg-[#07294d] text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-900 transition-colors"
            >
              {showDetailed ? 'Hide Detailed Marks' : 'View Detailed Marks'}
            </button>
          </div>
        </div>

        {showDetailed && (
          <div className="bg-white border border-gray-300 shadow-sm rounded-none p-6 animate-in slide-in-from-top duration-300">
            <h3 className="text-lg font-bold text-[#07294d] mb-4">Detailed Performance Analysis</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-3 text-sm">Lecture Components</h4>
                <div className="space-y-2">
                  {internalMarks
                    .filter(mark => mark.component === 'Lecture')
                    .map(mark => (
                      <div key={mark.slNo} className="flex justify-between items-center">
                        <span className="text-xs text-gray-700">{mark.courseName}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="bg-blue-600 h-1.5 rounded-full" 
                              style={{ width: `${(mark.marksScored / mark.maximumMarks) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-[10px] font-medium text-gray-600">
                            {mark.marksScored}/{mark.maximumMarks}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-900 mb-3 text-sm">Practical Components</h4>
                <div className="space-y-2">
                  {internalMarks
                    .filter(mark => mark.component === 'Practical')
                    .map(mark => (
                      <div key={mark.slNo} className="flex justify-between items-center">
                        <span className="text-xs text-gray-700">{mark.courseName}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="bg-green-600 h-1.5 rounded-full" 
                              style={{ width: `${(mark.marksScored / mark.maximumMarks) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-[10px] font-medium text-gray-600">
                            {mark.marksScored}/{mark.maximumMarks}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
