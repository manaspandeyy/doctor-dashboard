import React from 'react';
import type { Appointment } from '../data/appointments';

type Props = {
  appt: Appointment;
  onComplete: (id: number) => void;
  onReschedule: (id: number) => void;
};

const AppointmentCard: React.FC<Props> = ({ appt, onComplete, onReschedule }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow border-l-8 mb-4 bg-white transition
        ${appt.status === 'confirmed' ? 'border-blue-500' : ''}
        ${appt.status === 'pending' ? 'border-yellow-500' : ''}
        ${appt.status === 'completed' ? 'border-green-500' : ''}
      `}
    >
      <h2 className="text-lg font-semibold text-gray-800">{appt.patientName}</h2>
      <p className="text-gray-600">Time: {new Date(appt.time).toLocaleTimeString()}</p>
      <p className={`text-sm font-medium capitalize
        ${appt.status === 'confirmed' ? 'text-blue-600' : ''}
        ${appt.status === 'pending' ? 'text-yellow-600' : ''}
        ${appt.status === 'completed' ? 'text-green-600' : ''}
      `}>
        Status: {appt.status}
      </p>

      {appt.status !== 'completed' && (
        <div className="mt-2 flex gap-2">
          <button
            className="px-4 py-1 bg-green-500 hover:bg-green-600 text-white rounded shadow text-sm"
            onClick={() => onComplete(appt.id)}
          >
            Mark as Completed
          </button>
          <button
            className="px-4 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded shadow text-sm"
            onClick={() => onReschedule(appt.id)}
          >
            Reschedule
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;
