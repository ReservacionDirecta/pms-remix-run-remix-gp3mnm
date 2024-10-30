interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <input
        className={`
          w-full
          rounded-lg
          border
          border-gray-200
          bg-white
          px-4
          py-2.5
          text-gray-800
          transition-colors
          placeholder:text-gray-400
          focus:border-primary-500
          focus:outline-none
          focus:ring-2
          focus:ring-primary-500/20
          disabled:cursor-not-allowed
          disabled:bg-gray-50
          disabled:text-gray-500
          dark:border-gray-700
          dark:bg-gray-900
          dark:text-white
          dark:placeholder:text-gray-500
          dark:focus:border-primary-400
          ${error ? 'border-error-500 focus:border-error-500 focus:ring-error-500/20' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-error-500">{error}</p>
      )}
    </div>
  );
} 