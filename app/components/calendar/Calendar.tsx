import { useState } from "react";

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  roomId: string;
}

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Implementación del calendario */}
    </div>
  );
} 