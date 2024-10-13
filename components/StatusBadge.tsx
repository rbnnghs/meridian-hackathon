import React from 'react';
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/solid';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let colorClass = 'bg-gray-200 text-gray-800';
  let Icon = InformationCircleIcon;

  switch (status.toLowerCase()) {
    case 'critical':
      colorClass = 'bg-red-100 text-red-800';
      Icon = ExclamationCircleIcon;
      break;
    case 'endangered':
      colorClass = 'bg-yellow-100 text-yellow-800';
      Icon = ExclamationCircleIcon;
      break;
    case 'vulnerable':
      colorClass = 'bg-blue-100 text-blue-800';
      Icon = CheckCircleIcon;
      break;
    default:
      colorClass = 'bg-gray-200 text-gray-800';
      Icon = InformationCircleIcon;
  }

  return (
    <span className={`inline-flex items-center px-1.5 py-1.5 rounded-sm text-xs font-medium ${colorClass}`}>
      <Icon className="w-4 h-4 mr-1" aria-hidden="true" />
      {status}
    </span>
  );
};

export default StatusBadge;