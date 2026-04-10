import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface AttendanceRecord {
  slNo: number;
  courseCode: string;
  courseName: string;
  component: string;
  totalClasses: number;
  attendedClasses: number;
  percentage: number;
  status: string;
  shortage: string;
}

interface Semester {
  id: number;
  semester: string;
  programName: string;
  discipline: string;
  minAttendanceRequired: number;
  attendance: AttendanceRecord[];
}

export const Attendance: React.FC<{ onBack: () => void; semester?: Semester }> = ({ onBack, semester }) => {
  const [showDetailed, setShowDetailed] = useState(false);

  const allSemesters: Semester[] = [
    {
      id: 1,
      semester: 'I',
      programName: 'Bachelor of Computer Applications',
      discipline: 'Computer Applications',
      minAttendanceRequired: 75,
      attendance: [
        {
          slNo: 1,
          courseCode: '71109',
          courseName: 'Digital Fundamentals and Office Automation Tools',
          component: 'Lecture',
          totalClasses: 45,
          attendedClasses: 42,
          percentage: 93.33,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 2,
          courseCode: '70125',
          courseName: 'Environmental Studies',
          component: 'Lecture',
          totalClasses: 30,
          attendedClasses: 28,
          percentage: 93.33,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 3,
          courseCode: '71102',
          courseName: 'Kannada Bhasha Patrike - I',
          component: 'Lecture',
          totalClasses: 40,
          attendedClasses: 38,
          percentage: 95.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 4,
          courseCode: '73110',
          courseName: 'LAB : Mathematical Foundation',
          component: 'Practical',
          totalClasses: 25,
          attendedClasses: 24,
          percentage: 96.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 5,
          courseCode: '73109',
          courseName: 'LAB : Office Automation',
          component: 'Practical',
          totalClasses: 25,
          attendedClasses: 23,
          percentage: 92.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 6,
          courseCode: '73108',
          courseName: 'LAB : Programming with C',
          component: 'Practical',
          totalClasses: 30,
          attendedClasses: 30,
          percentage: 100.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 7,
          courseCode: '71101',
          courseName: 'Language English - I',
          component: 'Lecture',
          totalClasses: 45,
          attendedClasses: 44,
          percentage: 97.78,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 8,
          courseCode: '71110',
          courseName: 'Mathematical Foundation',
          component: 'Lecture',
          totalClasses: 50,
          attendedClasses: 48,
          percentage: 96.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 9,
          courseCode: '71108',
          courseName: 'Programming with C',
          component: 'Lecture',
          totalClasses: 50,
          attendedClasses: 49,
          percentage: 98.00,
          status: 'Approved',
          shortage: 'No'
        }
      ]
    },
    {
      id: 2,
      semester: 'II',
      programName: 'Bachelor of Computer Applications',
      discipline: 'Computer Applications',
      minAttendanceRequired: 75,
      attendance: [
        {
          slNo: 1,
          courseCode: '71208',
          courseName: 'Data Structures using C',
          component: 'Lecture',
          totalClasses: 38,
          attendedClasses: 34,
          percentage: 89.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 2,
          courseCode: '73208',
          courseName: 'LAB : Data Structures',
          component: 'Practical',
          totalClasses: 10,
          attendedClasses: 10,
          percentage: 80.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 3,
          courseCode: '71209',
          courseName: 'Object Oriented Concepts using Java',
          component: 'Lecture',
          totalClasses: 48,
          attendedClasses: 43,
          percentage: 81.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 4,
          courseCode: '73209',
          courseName: 'LAB : Java Programming',
          component: 'Practical',
          totalClasses: 12,
          attendedClasses: 10,
          percentage: 83.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 5,
          courseCode: '71210',
          courseName: 'Accounting',
          component: 'Lecture',
          totalClasses: 32,
          attendedClasses: 31,
          percentage: 96.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 6,
          courseCode: '73210',
          courseName: 'LAB : TALLY',
          component: 'Practical',
          totalClasses: 11,
          attendedClasses: 9,
          percentage: 81.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 7,
          courseCode: '71201',
          courseName: 'Language English - II',
          component: 'Lecture',
          totalClasses: 47,
          attendedClasses: 44,
          percentage: 83.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 8,
          courseCode: '71202',
          courseName: 'Kannada Bhasha Patrike - II',
          component: 'Lecture',
          totalClasses: 45,
          attendedClasses: 36,
          percentage: 75.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 9,
          courseCode: '70222',
          courseName: 'Indian Constitution',
          component: 'Lecture',
          totalClasses: 30,
          attendedClasses: 27,
          percentage: 80.00,
          status: 'Approved',
          shortage: 'No'
        }
      ]
    },
    {
      id: 3,
      semester: 'III',
      programName: 'Bachelor of Computer Applications',
      discipline: 'Computer Applications',
      minAttendanceRequired: 75,
      attendance: [
        {
          slNo: 1,
          courseCode: '71309',
          courseName: 'Database Management Systems',
          component: 'Lecture',
          totalClasses: 25,
          attendedClasses: 19,
          percentage: 76.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 2,
          courseCode: '73308',
          courseName: 'LAB - DBMS',
          component: 'Practical',
          totalClasses: 12,
          attendedClasses: 9,
          percentage: 75.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 3,
          courseCode: '71310',
          courseName: 'C# and .NET Framework',
          component: 'Lecture',
          totalClasses: 26,
          attendedClasses: 26,
          percentage: 75.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 4,
          courseCode: '73309',
          courseName: 'LAB - C and .NET Framework',
          component: 'Practical',
          totalClasses: 8,
          attendedClasses: 6,
          percentage: 75.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 5,
          courseCode: '71311',
          courseName: 'Computer Communication and Networks',
          component: 'Lecture',
          totalClasses: 30,
          attendedClasses: 26,
          percentage: 76.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 6,
          courseCode: '73310',
          courseName: 'LAB - Computer Networks',
          component: 'Practical',
          totalClasses: 6,
          attendedClasses: 6,
          percentage: 75.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 7,
          courseCode: '71312',
          courseName: 'Computer Science Elective 1 - Web Content Management System',
          component: 'Lecture',
          totalClasses: 20,
          attendedClasses: 18,
          percentage: 80.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 8,
          courseCode: '71301',
          courseName: 'Language English - III',
          component: 'Lecture',
          totalClasses: 50,
          attendedClasses: 49,
          percentage: 78.00,
          status: 'Approved',
          shortage: 'No'
        },
        {
          slNo: 9,
          courseCode: '71302',
          courseName: 'ಕನ್ನಡ ಭಾಷಾ ಪತ್ರಿಕೆ -3',
          component: 'Lecture',
          totalClasses: 45,
          attendedClasses: 41,
          percentage: 81.00,
          status: 'Approved',
          shortage: 'No'
        }
      ]
    }
  ];

  const currentSemester = allSemesters.find(s => s.semester === semester?.semester) || allSemesters[0];
  const attendanceData = currentSemester.attendance;

  const totalClasses = attendanceData.reduce((sum, record) => sum + record.totalClasses, 0);
  const totalAttended = attendanceData.reduce((sum, record) => sum + record.attendedClasses, 0);
  const overallPercentage = ((totalAttended / totalClasses) * 100).toFixed(2);

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 95) return 'text-green-600';
    if (percentage >= 85) return 'text-blue-600';
    if (percentage >= 75) return 'text-orange-600';
    return 'text-red-600';
  };

  const getProgressBarColor = (percentage: number) => {
    if (percentage >= 95) return 'bg-green-600';
    if (percentage >= 85) return 'bg-blue-600';
    if (percentage >= 75) return 'bg-orange-600';
    return 'bg-red-600';
  };

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
            {currentSemester.semester} term attendance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-sm">
            <div>
              <span className="font-semibold text-gray-600">Term/Semester:</span> {currentSemester.semester}
            </div>
            <div>
              <span className="font-semibold text-gray-600">Program Name:</span> {currentSemester.programName}
            </div>
            <div>
              <span className="font-semibold text-gray-600">Discipline/Combination:</span> {currentSemester.discipline}
            </div>
            <div>
              <span className="font-semibold text-gray-600">Minimum Attendance Required:</span> {currentSemester.minAttendanceRequired} %
            </div>
          </div>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse border border-gray-300 text-xs">
              <thead>
                <tr className="bg-[#07294d] text-white">
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">Sl. No</th>
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">Course Code</th>
                  <th className="py-3 px-4 font-bold border border-gray-300">Course Name</th>
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">Component</th>
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">No of classes conducted</th>
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">No of classes attended</th>
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">Attendance(%)</th>
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">Status</th>
                  <th className="py-3 px-4 font-bold border border-gray-300 text-center">Shortage of Attendance</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((record) => (
                  <tr key={record.slNo} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border border-gray-300 text-center">{record.slNo}</td>
                    <td className="py-3 px-4 border border-gray-300 text-center">{record.courseCode}</td>
                    <td className="py-3 px-4 border border-gray-300">{record.courseName}</td>
                    <td className="py-3 px-4 border border-gray-300 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                        record.component === 'Lecture' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {record.component}
                      </span>
                    </td>
                    <td className="py-3 px-4 border border-gray-300 text-center">{record.totalClasses}</td>
                    <td className="py-3 px-4 border border-gray-300 text-center">{record.attendedClasses}</td>
                    <td className="py-3 px-4 border border-gray-300 text-center">
                      <div className="flex items-center gap-2">
                        <div className="w-12 bg-gray-200 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full ${getProgressBarColor(record.percentage)}`} 
                            style={{ width: `${record.percentage}%` }}
                          ></div>
                        </div>
                        <span className={`font-medium ${getAttendanceColor(record.percentage)}`}>
                          {record.percentage.toFixed(2)}%
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 border border-gray-300 text-center">
                      <span className="text-green-600 font-medium">{record.status}</span>
                    </td>
                    <td className="py-3 px-4 border border-gray-300 text-center">
                      <span className="text-green-600 font-medium">{record.shortage}</span>
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
              {showDetailed ? 'Hide Detailed Analysis' : 'View Detailed Analysis'}
            </button>
          </div>
        </div>

        {showDetailed && (
          <div className="bg-white border border-gray-300 shadow-sm rounded-none p-6 animate-in slide-in-from-top duration-300">
            <h3 className="text-lg font-bold text-[#07294d] mb-4">Detailed Attendance Analysis</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-3 text-sm">Lecture Components</h4>
                <div className="space-y-3">
                  {attendanceData
                    .filter(record => record.component === 'Lecture')
                    .map(record => (
                      <div key={record.slNo} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-gray-700">{record.courseName}</span>
                          <span className={`text-xs font-bold ${getAttendanceColor(record.percentage)}`}>
                            {record.percentage.toFixed(2)}%
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                            <div 
                              className={`h-1.5 rounded-full ${getProgressBarColor(record.percentage)}`} 
                              style={{ width: `${record.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-[10px] text-gray-500">
                            {record.attendedClasses}/{record.totalClasses}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-900 mb-3 text-sm">Practical Components</h4>
                <div className="space-y-3">
                  {attendanceData
                    .filter(record => record.component === 'Practical')
                    .map(record => (
                      <div key={record.slNo} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-gray-700">{record.courseName}</span>
                          <span className={`text-xs font-bold ${getAttendanceColor(record.percentage)}`}>
                            {record.percentage.toFixed(2)}%
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                            <div 
                              className={`h-1.5 rounded-full ${getProgressBarColor(record.percentage)}`} 
                              style={{ width: `${record.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-[10px] text-gray-500">
                            {record.attendedClasses}/{record.totalClasses}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-900 mb-1 text-sm">Attendance Status</h4>
              <p className="text-xs text-yellow-800">
                {parseFloat(overallPercentage) >= 95 
                  ? "Excellent attendance! Keep up the great work."
                  : parseFloat(overallPercentage) >= 85
                  ? "Good attendance. Maintain this consistency."
                  : parseFloat(overallPercentage) >= 75
                  ? "Attendance needs improvement. Try to attend more classes."
                  : "Poor attendance. Immediate improvement required."
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
