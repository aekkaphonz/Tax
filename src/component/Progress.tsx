interface ProgressProps {
    totalSteps: number;
    step: number;
    className?: string;  
  }
  
  const Progress: React.FC<ProgressProps> = ({ totalSteps, step, className }) => {
    const progress = ((step - 1) / (totalSteps - 1)) * 100;
  
    return (
      <div
        className={className}  
        style={{
          height: "4px",
          background: "#ddd",
          width: "100%",
          transition: "all 0.4s ease-in",
        }}
      >
        <div
          style={{
            height: "4px",
            background: "#000",
            width: `${progress}%`,
            transition: "all 0.4s ease-in",
          }}
        ></div>
      </div>
    );
  }
  
  export default Progress;
  