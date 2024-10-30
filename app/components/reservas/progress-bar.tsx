interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  steps: Array<{
    title: string;
    description: string;
  }>;
}

export function ProgressBar({ currentStep, totalSteps, steps }: ProgressBarProps) {
  return (
    <div className="w-full py-4">
      <div className="flex justify-between mb-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center w-1/${totalSteps} ${
              index === currentStep
                ? 'text-primary-600'
                : index < currentStep
                ? 'text-green-600'
                : 'text-gray-400'
            }`}
          >
            <div className="relative flex items-center justify-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  index === currentStep
                    ? 'border-primary-600 bg-primary-50'
                    : index < currentStep
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-300 bg-white'
                }`}
              >
                {index < currentStep ? (
                  '✓'
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={`absolute left-full w-full h-0.5 ${
                    index < currentStep ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
            <span className="mt-2 text-sm font-medium">{step.title}</span>
            <span className="text-xs">{step.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 