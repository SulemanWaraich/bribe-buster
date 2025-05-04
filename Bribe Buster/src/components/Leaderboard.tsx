import { BribeReport } from '../types';

export default function Leaderboard({ reports }: { reports: BribeReport[] }) {
  const getTopDepartments = () => {
    const departmentMap = new Map<string, number>();
    
    reports.forEach(report => {
      const total = departmentMap.get(report.department) || 0;
      departmentMap.set(report.department, total + report.amount);
    });

    return Array.from(departmentMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4">Most Corrupt Departments</h3>
      <ul className="space-y-3">
        {getTopDepartments().map(([dept, total], index) => (
          <li key={dept} className="flex justify-between">
            <span className="font-medium">
              {index + 1}. {dept}
            </span>
            <span className="text-red-600">
              {total.toLocaleString()} PKR
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}