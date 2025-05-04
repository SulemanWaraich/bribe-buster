
import { BribeReport } from '../types';

export default function Leaderboard({ reports }: { reports: BribeReport[] }) {
  const getTopDepartments = () => {
    const departmentMap = new Map<string, number>();

    reports.forEach((report) => {
      const total = departmentMap.get(report.department) || 0;
      departmentMap.set(report.department, total + report.amount);
    });

    return Array.from(departmentMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-5">
        Top 5 Corrupt Departments
      </h3>
      <ul className="divide-y divide-gray-200">
        {getTopDepartments().map(([dept, total], index) => (
          <li key={dept} className="py-2 flex items-center justify-between">
            <span className="text-gray-700 font-medium">
              <span className="text-sm text-gray-500 mr-1">#{index + 1}</span> {dept}
            </span>
            <span className="text-red-600 font-semibold">{total.toLocaleString()} PKR</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
