export interface Appointment {
  id: number;
  patientName: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed';
}

export const appointments: Appointment[] = [
  {
    id: 1,
    patientName: 'Manas Pandey',
    time: '2025-07-01T10:00',
    status: 'confirmed',
  },
  {
    id: 2,
    patientName: 'Shweta Sharma',
    time: '2025-07-01T11:30',
    status: 'pending',
  },
  {
    id: 3,
    patientName: 'Prateek Singh',
    time: '2025-07-01T14:00',
    status: 'completed',
  },
];
