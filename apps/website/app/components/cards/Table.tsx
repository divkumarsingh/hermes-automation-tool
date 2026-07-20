
import { Check, Minus } from 'lucide-react';
import React from 'react';


interface RowData {
  feature: string;
  free: string | boolean;
  pro: string | boolean;
  enterprise: string | boolean;
}

const tableData: RowData[] = [
  {
    feature: 'Active Hooks',
    free: '5',
    pro: '50',
    enterprise: 'Unlimited',
  },
  {
    feature: 'Monthly Executions',
    free: '1,000',
    pro: '50,000',
    enterprise: 'Unlimited',
  },
  {
    feature: 'Custom Webhooks',
    free: true,
    pro: true,
    enterprise: true,
  },
  {
    feature: 'Premium App Integrations',
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: 'Team Collaboration',
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: 'Uptime SLA',
    free: false,
    pro: false,
    enterprise: '99.99%',
  },
  {
    feature: 'Dedicated Support',
    free: 'Community',
    pro: 'Priority',
    enterprise: '24/7 Dedicated Manager',
  },
];

export const  Table = ()=> {
  const renderCellContent = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-red-500" />
      ) : (
        <Minus className="w-5 h-5 text-gray-300" />
      );
    }
    return <span>{value}</span>;
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="overflow-x-auto rounded-lg border border-gray-200/80 shadow-sm bg-white">
        <table className="w-full border-collapse text-left text-sm text-gray-600">
          <thead>
            <tr className="bg-[#EFECEF]/60 text-xs uppercase tracking-wider text-gray-600 border-b border-gray-200">
              <th scope="col" className="py-4 px-6 font-semibold w-1/4">
                Feature
              </th>
              <th scope="col" className="py-4 px-6 font-semibold w-1/4">
                Free
              </th>
              <th scope="col" className="py-4 px-6 font-semibold w-1/4">
                Pro
              </th>
              <th scope="col" className="py-4 px-6 font-semibold w-1/4">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tableData.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50/50 transition-colors duration-150"
              >
                {/* Feature Name */}
                <td className="py-5 px-6 font-semibold text-gray-900">
                  {row.feature}
                </td>

                {/* Free Column */}
                <td className="py-5 px-6 text-gray-500">
                  {renderCellContent(row.free)}
                </td>

                {/* Pro Column (Bold values according to design) */}
                <td className="py-5 px-6 font-bold text-gray-900">
                  {renderCellContent(row.pro)}
                </td>

                {/* Enterprise Column */}
                <td className="py-5 px-6 text-gray-600">
                  {renderCellContent(row.enterprise)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}