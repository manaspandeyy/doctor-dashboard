# Doctor Dashboard

A responsive doctor appointment dashboard built using **React**, **TypeScript**, and **Tailwind CSS**.  
The dashboard supports appointment viewing, filtering, status updates, and rescheduling — all with a clean, component-based design.

---

## 🔧 Setup Instructions

To run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/manaspandeyy/doctor-dashboard.git
cd doctor-dashboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev


Key Features
Filter appointments by status (confirmed, pending, completed)

Mark appointments as completed

Reschedule appointments with a date-time picker

View today's appointments in a vertical timeline

Loading state on page load and empty state messaging

Modular file structure using reusable React components



Assumptions & Decisions Made
Appointments are static (locally imported from appointments.ts) to simulate backend data.

Time comparison (for timeline view) uses toDateString() to keep logic simple and readable.

Rescheduling only updates the appointment time locally without form validation or API.

useState is used for state management — no global context or Redux as the scope is small.

Component logic was split into:

AppointmentCard: handles appointment UI and action buttons.

RescheduleModal: handles reschedule popup.

TodayTimeline: renders today’s appointments in chronological order.
