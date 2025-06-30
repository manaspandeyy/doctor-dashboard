import AppointmentCard from '../components/AppointmentCard';
import RescheduleModal from '../components/RescheduleModal';
import { useState, useEffect } from 'react';
import TodayTimeline from '../components/TodayTimeline';
import { appointments as dummyAppointments } from '../data/appointments';
import type { Appointment } from '../data/appointments';

const Dashboard = () => {
  const [appointments, setAppointments] = useState<Appointment[]>(dummyAppointments);
  const [filterStatus, setFilterStatus] = useState<'all' | 'confirmed' | 'pending' | 'completed'>('all');
  const [rescheduleId, setRescheduleId] = useState<number | null>(null);
  const [newTime, setNewTime] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  const filteredAppointments = filterStatus === 'all'
    ? appointments
    : appointments.filter((appt) => appt.status === filterStatus);

  const handleMarkCompleted = (id: number) => {
    const updated: Appointment[] = appointments.map((appt) =>
      appt.id === id ? { ...appt, status: 'completed' as const } : appt
    );
    setAppointments(updated);
  };

  const handleReschedule = () => {
    if (!newTime || rescheduleId === null) return;

    const updated = appointments.map((appt) =>
      appt.id === rescheduleId ? { ...appt, time: newTime } : appt
    );

    setAppointments(updated);
    setRescheduleId(null);
    setNewTime('');
  };

  const statusCounts = {
    confirmed: appointments.filter(a => a.status === 'confirmed').length,
    pending: appointments.filter(a => a.status === 'pending').length,
    completed: appointments.filter(a => a.status === 'completed').length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800 font">Doctor Dashboard</h1>


        <div className="mb-4 text-sm font-medium">
          <span className="mr-4 text-blue-600">Confirmed: <strong>{statusCounts.confirmed}</strong></span>
          <span className="mr-4 text-red-600">Pending: <strong>{statusCounts.pending}</strong></span>
          <span className="text-green-600">Completed: <strong>{statusCounts.completed}</strong></span>
        </div>

        <div className="mb-6">
          <label className="mr-2 font-medium">Filter by status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="border border-gray-300 bg-white px-3 py-1 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="all">All</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <h2 className="text-lg font-semibold mt-8 mb-4">Today's Scheduled Patients </h2>
        <TodayTimeline appointments={appointments} />

        {isLoading ? (
          <div className="text-center py-10">
            <div className="h-8 w-8 mx-auto border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 mt-2">Loading appointments...</p>
          </div>
        ) : filteredAppointments.length === 0 ? (
          <p className="text-gray-500 text-center py-6">No appointments found for selected status.</p>
        ) : (
          filteredAppointments.map((appt) => (
            <AppointmentCard
              key={appt.id}
              appt={appt}
              onComplete={handleMarkCompleted}
              onReschedule={setRescheduleId}
            />
          ))
        )}

        {rescheduleId !== null && (
          <RescheduleModal
            newTime={newTime}
            onTimeChange={setNewTime}
            onCancel={() => {
              setRescheduleId(null);
              setNewTime('');
            }}
            onSave={handleReschedule}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
