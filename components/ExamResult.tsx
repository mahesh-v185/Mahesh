import React, { useState } from 'react';
import { Home, ChevronRight, Printer, ArrowLeft, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExamResultProps {
  onBack: () => void;
  semesterId?: number;
}

export const ExamResult: React.FC<ExamResultProps> = ({ onBack, semesterId = 1 }) => {
  const [slide, setSlide] = useState(1);

  const semestersData: Record<number, any> = {
    1: {
      examMonth: 'SEP I UG DEC JAN 25',
      publishedOn: '19-03-25 AT 18:26',
      term: 'I',
      original: [
        { slNo: 1, code: '71101', name: 'Language English - I', max: 100, min: 40, see: 49, ia: 18, scored: 67, credits: 3, grade: 7, points: 21, letter: 'A+', status: 'Pass' },
        { slNo: 2, code: '71102', name: 'Kannada Bhasha Patrike - I', max: 100, min: 40, see: 64, ia: 19, scored: 83, credits: 3, grade: 8.5, points: 25.5, letter: 'A++', status: 'Pass' },
        { slNo: 3, code: '71108', name: 'Programming with C', max: 100, min: 40, see: 56, ia: 20, scored: 76, credits: 4, grade: 8, points: 32, letter: 'A++', status: 'Pass' },
        { slNo: 4, code: '71109', name: 'Digital Fundamentals and Office Automation Tools', max: 100, min: 40, see: 15, ia: 18, scored: 33, credits: 4, grade: 0, points: 0, letter: 'F', status: 'Fail' },
        { slNo: 5, code: '71110', name: 'Mathematical Foundation', max: 100, min: 40, see: 12, ia: 20, scored: 32, credits: 4, grade: 0, points: 0, letter: 'F', status: 'Fail' },
        { slNo: 6, code: '70125', name: 'Environmental Studies', max: 50, min: 20, see: 17, ia: 7, scored: 24, credits: 2, grade: 5, points: 10, letter: 'B', status: 'Pass' },
        { slNo: 7, code: '73108', name: 'LAB : Programming with C', max: 50, min: 20, see: 37, ia: 10, scored: 47, credits: 1, grade: 9.5, points: 9.5, letter: 'O', status: 'Pass' },
        { slNo: 8, code: '73109', name: 'LAB : Office Automation', max: 50, min: 20, see: 40, ia: 8, scored: 48, credits: 1, grade: 10, points: 10, letter: 'O', status: 'Pass' },
        { slNo: 9, code: '73110', name: 'LAB : Mathematical Foundation', max: 50, min: 20, see: 35, ia: 8, scored: 43, credits: 1, grade: 9, points: 9, letter: 'O', status: 'Pass' },
      ],
      reevaluated: [
        { slNo: 1, code: '71101', name: 'Language English - I', max: 100, min: 40, see: 49, ia: 18, scored: 67, credits: 3, grade: 7, points: 21, letter: 'A+', status: 'Pass' },
        { slNo: 2, code: '71102', name: 'Kannada Bhasha Patrike - I', max: 100, min: 40, see: 64, ia: 19, scored: 83, credits: 3, grade: 8.5, points: 25.5, letter: 'A++', status: 'Pass' },
        { slNo: 3, code: '71108', name: 'Programming with C', max: 100, min: 40, see: 56, ia: 20, scored: 76, credits: 4, grade: 8, points: 32, letter: 'A++', status: 'Pass' },
        { slNo: 4, code: '71109', name: 'Digital Fundamentals and Office Automation Tools', max: 100, min: 40, see: 40, ia: 18, scored: 58, credits: 4, grade: 6, points: 24, letter: 'A', status: 'Pass', reevaluated: true },
        { slNo: 5, code: '71110', name: 'Mathematical Foundation', max: 100, min: 40, see: 55, ia: 20, scored: 75, credits: 4, grade: 8, points: 32, letter: 'A++', status: 'Pass', reevaluated: true },
        { slNo: 6, code: '70125', name: 'Environmental Studies', max: 50, min: 20, see: 17, ia: 7, scored: 24, credits: 2, grade: 5, points: 10, letter: 'B', status: 'Pass' },
        { slNo: 7, code: '73108', name: 'LAB : Programming with C', max: 50, min: 20, see: 37, ia: 10, scored: 47, credits: 1, grade: 9.5, points: 9.5, letter: 'O', status: 'Pass' },
        { slNo: 8, code: '73109', name: 'LAB : Office Automation', max: 50, min: 20, see: 40, ia: 8, scored: 48, credits: 1, grade: 10, points: 10, letter: 'O', status: 'Pass' },
        { slNo: 9, code: '73110', name: 'LAB : Mathematical Foundation', max: 50, min: 20, see: 35, ia: 8, scored: 43, credits: 1, grade: 9, points: 9, letter: 'O', status: 'Pass' },
      ],
      summary: {
        original: { result: 'FAIL', sgpa: '5.84', cgpa: '5.84', grade: 'C' },
        reevaluated: { result: 'PASS', sgpa: '7.52', cgpa: '7.52', grade: 'A+' }
      }
    },
    2: {
      examMonth: 'SEP UG JUN JUL 2025',
      publishedOn: '01-09-25 AT 17:10',
      term: 'II',
      original: [
        { slNo: 1, code: '71201', name: 'Language English - II', max: 100, min: 40, see: 46, ia: 16, scored: 62, credits: 3, grade: 6.5, points: 19.5, letter: 'A+', status: 'Pass' },
        { slNo: 2, code: '71202', name: 'Kannada Bhasha Patrike - II', max: 100, min: 40, see: 52, ia: 17, scored: 69, credits: 3, grade: 7, points: 21, letter: 'A+', status: 'Pass' },
        { slNo: 3, code: '71208', name: 'Data Structures using C', max: 100, min: 40, see: 46, ia: 20, scored: 66, credits: 4, grade: 7, points: 28, letter: 'A+', status: 'Pass' },
        { slNo: 4, code: '71209', name: 'Object Oriented Concepts using Java', max: 100, min: 40, see: 49, ia: 18, scored: 67, credits: 4, grade: 7, points: 28, letter: 'A+', status: 'Pass' },
        { slNo: 5, code: '71210', name: 'Accounting', max: 100, min: 40, see: 53, ia: 18, scored: 71, credits: 4, grade: 7.5, points: 30, letter: 'A++', status: 'Pass' },
        { slNo: 6, code: '70222', name: 'Indian Constitution', max: 50, min: 20, see: 29, ia: 8, scored: 37, credits: 2, grade: 7.5, points: 15, letter: 'A++', status: 'Pass' },
        { slNo: 7, code: '73208', name: 'LAB : Data Structures', max: 50, min: 20, see: 30, ia: 10, scored: 40, credits: 1, grade: 8.5, points: 8.5, letter: 'A++', status: 'Pass' },
        { slNo: 8, code: '73209', name: 'LAB : Java Programming', max: 50, min: 20, see: 35, ia: 9, scored: 44, credits: 1, grade: 9, points: 9, letter: 'O', status: 'Pass' },
        { slNo: 9, code: '73210', name: 'LAB : TALLY', max: 50, min: 20, see: 39, ia: 9, scored: 48, credits: 1, grade: 10, points: 10, letter: 'O', status: 'Pass' },
      ],
      summary: {
        original: { result: 'PASS', sgpa: '8.25', cgpa: '-', grade: 'A+', promotion: 'Eligible' }
      }
    },
    3: {
      examMonth: 'UG SEP JAN FEB 2026',
      publishedOn: '04-04-26 AT 14:44',
      term: 'III',
      original: [
        { slNo: 1, code: '71301', name: 'Language English - III', max: 100, min: 40, see: 50, ia: 15, scored: 65, credits: 3, grade: 7, points: 21, letter: 'A+', status: 'Pass' },
        { slNo: 2, code: '71302', name: 'ಕನ್ನಡ ಭಾಷಾ ಪತ್ರಿಕೆ -3', max: 100, min: 40, see: 50, ia: 19, scored: 69, credits: 3, grade: 7, points: 21, letter: 'A+', status: 'Pass' },
        { slNo: 3, code: '71309', name: 'Database Management Systems', max: 100, min: 40, see: 50, ia: 10, scored: 60, credits: 4, grade: 6.5, points: 26, letter: 'A+', status: 'Pass' },
        { slNo: 4, code: '71310', name: 'C# and .NET Framework', max: 100, min: 40, see: 47, ia: 20, scored: 67, credits: 4, grade: 7, points: 28, letter: 'A+', status: 'Pass' },
        { slNo: 5, code: '71311', name: 'Computer Communication and Networks', max: 100, min: 40, see: 40, ia: 18, scored: 58, credits: 4, grade: 6, points: 24, letter: 'A', status: 'Pass' },
        { slNo: 6, code: '71312', name: 'Computer Science Elective 1 - Web Content Management System', max: 50, min: 20, see: 28, ia: 10, scored: 38, credits: 2, grade: 8, points: 16, letter: 'A++', status: 'Pass' },
        { slNo: 7, code: '73308', name: 'LAB - DBMS', max: 50, min: 20, see: 40, ia: 10, scored: 50, credits: 1, grade: 10, points: 10, letter: 'O', status: 'Pass' },
        { slNo: 8, code: '73309', name: 'LAB - C and .NET Framework', max: 50, min: 20, see: 40, ia: 8, scored: 48, credits: 1, grade: 10, points: 10, letter: 'O', status: 'Pass' },
        { slNo: 9, code: '73310', name: 'LAB - Computer Networks', max: 50, min: 20, see: 40, ia: 10, scored: 50, credits: 1, grade: 10, points: 10, letter: 'O', status: 'Pass' },
      ],
      summary: {
        original: { result: 'PASS', sgpa: '7.22', cgpa: '7.36', grade: 'A+' }
      }
    }
  };

  const currentSemester = semestersData[semesterId] || semestersData[1];
  const hasReevaluation = !!currentSemester.reevaluated;
  const currentData = (hasReevaluation && slide === 2) ? currentSemester.reevaluated : currentSemester.original;
  const currentSummary = (hasReevaluation && slide === 2) ? currentSemester.summary.reevaluated : currentSemester.summary.original;

  return (
    <div className="bg-[#f4f7f9] min-h-screen pb-12 overflow-hidden">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-gray-500">
          <Home size={14} className="text-blue-600" />
          <ChevronRight size={12} />
          <span className="text-blue-600 cursor-pointer hover:underline" onClick={onBack}>Home</span>
          <ChevronRight size={12} />
          <span className="text-blue-600 cursor-pointer hover:underline" onClick={onBack}>Exam</span>
          <ChevronRight size={12} />
          <span className="text-gray-400">Exam Result</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-8">
        <div className="bg-white border border-gray-300 shadow-sm rounded-none overflow-hidden mb-6">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <div className="w-10"></div>
              <h2 className="text-2xl font-bold text-center text-[#07294d]">Nrupathunga University</h2>
              <div className="flex gap-2">
                {hasReevaluation && (
                  <>
                    <button 
                      onClick={() => setSlide(1)}
                      className={`w-3 h-3 rounded-full transition-all ${slide === 1 ? 'bg-blue-600 scale-125' : 'bg-gray-300'}`}
                    ></button>
                    <button 
                      onClick={() => setSlide(2)}
                      className={`w-3 h-3 rounded-full transition-all ${slide === 2 ? 'bg-blue-600 scale-125' : 'bg-gray-300'}`}
                    ></button>
                  </>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 text-sm">
              <div>
                <label className="text-gray-500 block mb-1">Exam Month:</label>
                <strong className="text-[#07294d]">{currentSemester.examMonth}</strong>
              </div>
              <div>
                <label className="text-gray-500 block mb-1">Exam Type:</label>
                <strong className="text-[#07294d]">Regular Exam</strong>
              </div>
              <div>
                <label className="text-gray-500 block mb-1">Program Level:</label>
                <strong className="text-[#07294d]">UG</strong>
              </div>
              <div>
                <label className="text-gray-500 block mb-1">Program Name:</label>
                <strong className="text-[#07294d]">Bachelor of Computer Applications</strong>
              </div>
              <div>
                <label className="text-gray-500 block mb-1">Student Reg No:</label>
                <strong className="text-[#07294d]">U24AN24S0017</strong>
              </div>
              <div>
                <label className="text-gray-500 block mb-1">Student Name:</label>
                <strong className="text-[#07294d]">Mahesh V</strong>
              </div>
              <div>
                <label className="text-gray-500 block mb-1">Term/Semester:</label>
                <div className="flex gap-2 items-center">
                  <select className="border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500" defaultValue={currentSemester.term}>
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                  </select>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600">View</button>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <p className="text-blue-600 font-bold text-sm">Result Published on {currentSemester.publishedOn}</p>
              {hasReevaluation && (
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSlide(slide === 1 ? 2 : 1)}
                    className="flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 transition-all bg-blue-50 px-4 py-2 rounded border border-blue-200"
                  >
                    {slide === 1 ? 'Slide to Re-evaluation Result' : 'Slide to Original Result'}
                    <ChevronRight size={16} className={slide === 2 ? 'rotate-180' : ''} />
                  </button>
                </div>
              )}
            </div>

            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${semesterId}-${slide}`}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse border border-gray-200 text-xs">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-200 px-2 py-3 text-center">Sl.No.</th>
                          <th className="border border-gray-200 px-2 py-3 text-center">Course Code</th>
                          <th className="border border-gray-200 px-2 py-3 text-left">Course Name</th>
                          <th className="border border-gray-200 px-2 py-3 text-center">Maximum Marks</th>
                          <th className="border border-gray-200 px-2 py-3 text-center">Minimum Marks</th>
                          <th className="border border-gray-200 px-2 py-3 text-center">SEE Marks</th>
                          <th className="border border-gray-200 px-2 py-3 text-center">IA Marks</th>
                          <th className="border border-gray-200 px-2 py-3 text-center">Marks Scored</th>
                          <th className="border border-gray-200 px-2 py-3 text-center">Credits</th>
                          <th className="border border-gray-200 px-2 py-3 text-center">Grade</th>
                          <th className="border border-gray-200 px-2 py-3 text-center">Credit Points</th>
                          <th className="border border-gray-200 px-2 py-3 text-center">Letter Grade</th>
                          <th className="border border-gray-200 px-2 py-3 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentData.map((row: any) => (
                          <tr key={row.slNo} className="hover:bg-gray-50">
                            <td className="border border-gray-200 px-2 py-3 text-center">{row.slNo}</td>
                            <td className="border border-gray-200 px-2 py-3 text-center">{row.code}</td>
                            <td className="border border-gray-200 px-2 py-3">{row.name}</td>
                            <td className="border border-gray-200 px-2 py-3 text-center">{row.max}</td>
                            <td className="border border-gray-200 px-2 py-3 text-center">{row.min}</td>
                            <td className="border border-gray-200 px-2 py-3 text-center">
                              {row.see}
                              {row.reevaluated && <span className="text-[#13f1ab] ml-1 font-bold">★</span>}
                            </td>
                            <td className="border border-gray-200 px-2 py-3 text-center">{row.ia}</td>
                            <td className="border border-gray-200 px-2 py-3 text-center">{row.scored}</td>
                            <td className="border border-gray-200 px-2 py-3 text-center">{row.credits}</td>
                            <td className="border border-gray-200 px-2 py-3 text-center">{row.grade}</td>
                            <td className="border border-gray-200 px-2 py-3 text-center">{row.points}</td>
                            <td className={`border border-gray-200 px-2 py-3 text-center font-bold ${row.status === 'Fail' ? 'text-red-600' : ''}`}>{row.letter}</td>
                            <td className={`border border-gray-200 px-2 py-3 text-center font-medium ${row.status === 'Fail' ? 'text-red-600' : 'text-green-600'}`}>{row.status}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-gray-50 font-bold">
                        <tr>
                          <td colSpan={13} className="border border-gray-200 px-4 py-4">
                            <div className="flex flex-wrap gap-x-8 gap-y-2 items-center">
                              <span>Result : <span className={currentSummary.result === 'FAIL' ? 'text-red-600' : 'text-green-600'}>{currentSummary.result}</span></span>
                              <span>SGPA : {currentSummary.sgpa}</span>
                              <span>CGPA : {currentSummary.cgpa}</span>
                              <span>Term Grade : {currentSummary.grade}</span>
                              {currentSummary.promotion && <span>Promotion Status : {currentSummary.promotion}</span>}
                            </div>
                            <div className="mt-4 flex flex-wrap gap-4 text-[10px] font-normal text-gray-500">
                              <div className="flex items-center gap-1"><span className="text-[#13f1ab] text-lg">★</span> :- Re-evaluation</div>
                              <div className="flex items-center gap-1"><span className="text-red-600 text-lg">^</span> :- Retotaling</div>
                              <div className="flex items-center gap-1"><span className="text-[#ed7409] text-lg">#</span> :- Challenge Evaluation</div>
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <button className="bg-blue-500 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-600 transition-all flex items-center gap-2">
                <Printer size={16} /> Print
              </button>
              <button 
                onClick={onBack}
                className="bg-red-500 text-white px-6 py-2 rounded text-sm font-medium hover:bg-red-600 transition-all flex items-center gap-2"
              >
                <ArrowLeft size={16} /> Back
              </button>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-4">
              <p className="text-xs text-orange-800 italic">
                *Note: This cannot be treated as original marks sheet. This result published here is for the immediate information of student. Original marks sheet will be issued by respective university
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
