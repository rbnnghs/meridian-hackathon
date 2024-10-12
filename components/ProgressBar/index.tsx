interface ProgressBarProps {
    completed: number;
    total: number;
  }
  
  export const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
    const percentage = Math.min((completed / total) * 100, 100);
  
    return (
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div
          className="bg-green-600 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };