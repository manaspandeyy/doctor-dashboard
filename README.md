# Doctor Dashboard
A responsive doctor appointment dashboard built using **React**, **TypeScript**, and **Tailwind CSS**.  
The dashboard supports appointment viewing, filtering, status updates, and rescheduling — all with a clean, component-based design.

# Setup Instructions
To run the project locally:
# 1. Clone the repository
git clone https://github.com/manaspandeyy/doctor-dashboard.git
cd doctor-dashboard
# 2. Install dependencies
npm install
# 3. Start the development server
npm run dev

# Assumptions & Decisions Made
Appointments are static (locally imported from appointments.ts) to simulate backend data.
Time comparison (for timeline view) uses toDateString() to keep logic simple and readable.
Rescheduling only updates the appointment time locally without form validation or API.
useState is used for state management — no global context or Redux as the scope is small.
Component logic was split into:
AppointmentCard: handles appointment UI and action buttons.
RescheduleModal: handles reschedule popup.
TodayTimeline: renders today’s appointments in chronological order.

## 🔑 Key Features

 # Filter appointments by status** 🔍
Easily filter between **confirmed**, **pending**, and **completed** statuses.
 # Mark appointments as completed** ✅  
Update appointment status with a single click.
 # Reschedule with date-time picker** 🕓  
Change appointment time via a user-friendly `datetime-local` input.
 # Today’s timeline view** 📅
See a vertical chronological list of today’s appointments.
 # Loading spinner and empty state messaging** ⏳
Simulates data fetching and handles no-appointment cases gracefully.
 # Modular file structure with reusable components** 🧱
Structured using atomic components like `AppointmentCard`, `TodayTimeline`, and `RescheduleModal`.
