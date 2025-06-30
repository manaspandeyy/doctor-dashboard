import React from 'react';
import type { Appointment } from '../data/appointments';

type Props = {
  appointments: Appointment[];
};

const TodayTimeline: React.FC<Props> = ({ appointments }) => {
  const today = new Date().toDateString();

  const todaysAppointments = appointments
    .filter(appt => new Date(appt.time).toDateString() === today)
    .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

  if (todaysAppointments.length === 0) {
    return <p className="text-gray-500">No appointments scheduled for today.</p>;
  }

  return (
    <ul className="space-y-4 border-l-4 border-blue-500 pl-4 mt-6">
      {todaysAppointments.map(appt => (
        <li key={appt.id} className="relative">
          <div className="absolute -left-2 top-1 w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="bg-white rounded-lg shadow px-4 py-2">
            <p className="text-sm font-medium">{appt.patientName}</p>
            <p className="text-xs text-gray-600">
              {new Date(appt.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} — {appt.status}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodayTimeline;
