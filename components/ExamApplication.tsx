import React from 'react';
import { Home, ChevronRight, FileText, Eye, Download, Info } from 'lucide-react';

interface ExamApplicationProps {
  onBack?: () => void;
  onShowResult?: (semesterId: number) => void;
}

export const ExamApplication: React.FC<ExamApplicationProps> = ({ onBack, onShowResult }) => {
  const examApplications = [
    {
      slNo: 1,
      academicYear: '2024-25',
      examMonth: 'SEP I UG DEC JAN 25 (2251170)',
      examType: 'Regular Exam',
      programLevel: 'UG',
      programName: 'Bachelor of Computer Applications',
      notifiedTerms: 'I',
      status: 'Exam Application Approved',
      semesterId: 1
    },
    {
      slNo: 2,
      academicYear: '2024-25',
      examMonth: 'SEP UG JUN JUL 2025 (2261151)',
      examType: 'Regular Exam',
      programLevel: 'UG',
      programName: 'Bachelor of Computer Applications',
      notifiedTerms: 'II',
      status: 'Exam Application Approved',
      semesterId: 2
    },
    {
      slNo: 3,
      academicYear: '2025-26',
      examMonth: 'UG SEP JAN FEB 2026 (3261086)',
      examType: 'Regular Exam',
      programLevel: 'UG',
      programName: 'Bachelor of Computer Applications',
      notifiedTerms: 'I , III , V',
      status: 'Exam Application Approved',
      semesterId: 3
    }
  ];

  return (
    <div className="bg-[#f4f7f9] min-h-screen pb-12">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-gray-500">
          <Home size={14} className="text-blue-600" />
          <ChevronRight size={12} />
          <span className="text-blue-600 cursor-pointer hover:underline" onClick={onBack}>Home</span>
          <ChevronRight size={12} />
          <span className="text-gray-400">Fee Details</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-8">
        <div className="bg-white border border-gray-300 shadow-sm rounded-none overflow-hidden mb-6">
          <div className="bg-gray-50 border-b border-gray-200 py-3 px-6">
            <h4 className="text-center text-lg font-bold text-[#07294d]">Exam Applications</h4>
          </div>
          
          <div className="p-6">
            <div className="mb-6 space-y-2">
              <p className="text-red-600 text-xs font-medium">* Exam application form will be auto filled as per exam notification dates specified by respective university</p>
              <p className="text-red-600 text-xs font-medium">
                * If the payment is in the initiated state, please verify the status by doing this activity.
                Exam Menu -&gt; Student fee payment transaction details -&gt; Enter your USN Number -&gt; Click on <strong>check payment status</strong> button in the action column -&gt; the latest payment status will be updated.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-xs">
                <thead className="bg-[#07294d] text-white">
                  <tr>
                    <th className="border border-gray-200 px-3 py-3 text-center">Sl. No.</th>
                    <th className="border border-gray-200 px-3 py-3 text-center">Academic year</th>
                    <th className="border border-gray-200 px-3 py-3 text-center">Exam Month</th>
                    <th className="border border-gray-200 px-3 py-3 text-center">Exam Type</th>
                    <th className="border border-gray-200 px-3 py-3 text-center">Program Level</th>
                    <th className="border border-gray-200 px-3 py-3 text-center">Program Name</th>
                    <th className="border border-gray-200 px-3 py-3 text-center">Exam Notified Terms</th>
                    <th className="border border-gray-200 px-3 py-3 text-center">Status</th>
                    <th className="border border-gray-200 px-3 py-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {examApplications.map((app) => (
                    <tr key={app.slNo} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-3 py-4">{app.slNo}</td>
                      <td className="border border-gray-200 px-3 py-4">{app.academicYear}</td>
                      <td className="border border-gray-200 px-3 py-4">{app.examMonth}</td>
                      <td className="border border-gray-200 px-3 py-4">{app.examType}</td>
                      <td className="border border-gray-200 px-3 py-4">{app.programLevel}</td>
                      <td className="border border-gray-200 px-3 py-4">{app.programName}</td>
                      <td className="border border-gray-200 px-3 py-4">{app.notifiedTerms}</td>
                      <td className="border border-gray-200 px-3 py-4">{app.status}</td>
                      <td className="border border-gray-200 px-3 py-4">
                        <div className="flex flex-col gap-1 items-center">
                          <a href="#" className="text-blue-600 hover:underline">View Attendance</a>
                          <a href="#" className="text-blue-600 hover:underline">View Application</a>
                          <a 
                            href="#" 
                            className="text-blue-600 hover:underline"
                            onClick={(e) => {
                              e.preventDefault();
                              if (onShowResult) onShowResult(app.semesterId);
                            }}
                          >
                            View Result
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Info Alerts */}
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-none">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white p-1 rounded-full">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-blue-900 text-sm mb-2">Important - Pre Activity:</h5>
                <ul className="text-xs text-blue-800 space-y-1 ml-4 list-decimal">
                  <li>Please Verify all the course code before paying the fees.</li>
                  <li>The fees will be based on fee set by university
                    <ul className="ml-4 mt-1 space-y-0.5 list-disc">
                      <li>Income limit</li>
                      <li>Gender</li>
                      <li>Category</li>
                      <li>Reservation claim status of Student</li>
                      <li>Amount will be visible after university set the fee.</li>
                    </ul>
                  </li>
                  <li>QP Codes need to be sets for all courses in the curriculum.</li>
                  <li>The registered curriculum of the Student should be Approved by Principal and also admission should be approved by Registrar.</li>
                  <li>Application fee paying between start date of application pay and last date of application fee (2nd Penalty) set in exam notification.</li>
                  <li>If pay button is missing in new application here might be the following reasons:
                    <ul className="ml-4 mt-1 space-y-0.5 list-disc">
                      <li>Curriculum not set.</li>
                      <li>Curriculum not got approved.</li>
                      <li>QP Codes not set for all curriculum.</li>
                      <li>Exam fee was not set by university.</li>
                    </ul>
                  </li>
                  <li>Course registration for Eligible notification is mandatory to Apply for exam.</li>
                  <li>Special case late fee has to be set in general fee and special case last date penalty in exam notification has to be set.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-4 rounded-none">
            <div className="flex items-start gap-3">
              <div className="bg-orange-600 text-white p-1 rounded-full">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-orange-900 text-sm mb-2">Important - Post Activity:</h5>
                <p className="text-xs text-orange-800">
                  Hall Ticket will be generated based on exam application fee paid and got approved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
