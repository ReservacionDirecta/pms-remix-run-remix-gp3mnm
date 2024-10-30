interface DateSelectorProps {
  checkIn: string;
  checkOut: string;
  onChange: (dates: { checkIn: string; checkOut: string }) => void;
}

export function DateSelector({ checkIn, checkOut, onChange }: DateSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Check-in
        </label>
        <input
          type="date"
          className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={checkIn}
          onChange={(e) => onChange({ checkIn: e.target.value, checkOut })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Check-out
        </label>
        <input
          type="date"
          className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={checkOut}
          onChange={(e) => onChange({ checkIn, checkOut: e.target.value })}
        />
      </div>
    </div>
  );
} 