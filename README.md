# Student Medical Health System (IT2234 ICA3)

A full-stack medical appointment scheduling and healthcare triage web application engineered to eliminate manual administrative inefficiencies, minimize clinical wait times, and protect student medical data integrity using the MERN stack.

---

## 📋 Problem Description
Traditional university health centers heavily rely on legacy, manual processes such as physical paper logs, phone calls, and walk-in scheduling. This operational paradigm suffers from several critical bottlenecks:
- **Administrative Overhead:** Medical staff waste valuable clinical time manually recording patient files, organizing schedules, and cross-checking data, averaging 12–15 minutes of overhead per student.
- **Data Fragility & Compliance Risks:** Paper records and manual logs are highly vulnerable to physical loss, scheduling double-bookings, and human handwriting misinterpretations. This poses a major threat to sensitive student medical data integrity.
- **Triage Blindspots:** Clinicians lack pre-appointment insight into incoming patient symptoms. This prevents them from prioritizing high-severity health cases (e.g., emergencies or contagious illnesses) effectively before they arrive.
- **Restrictive Access:** Students are limited to booking only during strict office operating hours, causing crowded physical queues during peak hours.

---

## 💡 Proposed Solution
Our engineering response is a secure, digital-first **MERN Stack Integrated Health Portal** that automates the medical appointment lifestyle. By transferring operations to a centralized cloud architecture, the solution achieves:
- **Instant Processing:** Reduces the student intake and booking touchpoint from 15 minutes to under 60 seconds.
- **Automated Data Safeguards:** Replaces vulnerable physical paper logs with an automated NoSQL database layer protected by strict object schema validation rules.
- **Pre-Appointment Clinical Triage:** Captures systematic symptom descriptions ahead of schedule, allowing nursing staff to instantly move critical emergency profiles up the timeline queue.
- **24/7 Universal Reach:** Provides an accessible web form where students can securely log scheduling requests at any hour from any cross-platform device.

---

## 🚀 Features
- **Symmetrical 3-Column Interface:** A structured, accessible frontend design featuring custom layout blocks built specifically for clean, intuitive data entry.
- **Dynamic State Management:** Utilizes React functional hooks (`useState`) to handle instantaneous user feedback, manage submit states, and trigger automatic form field wipes upon a successful database write.
- **Cross-Origin Security Enforcements:** Custom CORS middleware configurations applied at the server layer to restrict unauthorized web domain queries from accessing backend paths.
- **Fluid Cross-Device Responsiveness:** Built completely using CSS Grid, Flexbox, and media query boundaries to guarantee perfect rendering across mobile, tablet, and desktop viewports.

---

## 🛠️ Technologies Used
- **Frontend Architecture:** React.js, Axios (Asynchronous Network HTTP Requests), HTML5, CSS3 (Flexbox, CSS Grid, Media Queries)
- **Backend Runtime Environment:** Node.js, Express.js (REST API Routing Architecture)
- **Database Layer:** MongoDB Local Instance / Atlas Cloud Cluster via Mongoose Object Data Modeling (ODM)
- **Environment & Dependency Control:** Dotenv (Secret Key Isolation & Port Portability), Nodemon (Development Auto-Reload Engine)

---

## 🔌 API Endpoints (with examples)

### 1. Create a New Appointment
- **URL:** `/api/appointments`
- **Method:** `POST`
- **Description:** Validates incoming student parameters and appends a verified medical entry token into the database collection.
- **Example Request Body (JSON):**
```json
{
  "studentName": "John Doe",
  "studentId": "ST12345",
  "reason": "Severe seasonal influenza symptoms and high fever",
  "appointmentDate": "2026-05-20T10:30:00.000Z"
}
{
  "success": true,
  "message": "Appointment successfully booked and queued for triage.",
  "data": {
    "_id": "664619bfa12b9c34d8eef102",
    "studentName": "John Doe",
    "studentId": "ST12345",
    "reason": "Severe seasonal influenza symptoms and high fever",
    "appointmentDate": "2026-05-20T10:30:00.000Z",
    "createdAt": "2026-05-17T11:10:00.000Z"
  }
}
### 2. Fetch All Appointments
- **URL:** `/api/appointments`
- **Method:** `GET`

- **Description:** Retrieves the collection of medical appointment histories for the clinical dashboard view.

-**Example Success Response (200 OK):**
```json
[
  {
    "_id": "664619bfa12b9c34d8eef102",
    "studentName": "John Doe",
    "studentId": "ST12345",
    "reason": "Severe seasonal influenza symptoms and high fever",
    "appointmentDate": "2026-05-20T10:30:00.000Z",
    "createdAt": "2026-05-17T11:10:00.000Z"
  }
]
### 3. Update Appointment Details (Triage Escalation)
- **URL:** `/api/appointments/:id`
- **Method:** `PUT`
- **Description:** Modifies existing fields of an active appointment record based on its unique document ID. Useful for updating appointment times or triage updates.
- **Example Request Body (JSON):**
```json
{
  "reason": "Escalated: Severe seasonal influenza symptoms with acute respiratory breathing difficulty"
}
{
  "success": true,
  "message": "Appointment details updated successfully.",
  "data": {
    "_id": "664619bfa12b9c34d8eef102",
    "studentName": "John Doe",
    "studentId": "ST12345",
    "reason": "Escalated: Severe seasonal influenza symptoms with acute respiratory breathing difficulty",
    "appointmentDate": "2026-05-20T10:30:00.000Z",
    "updatedAt": "2026-05-17T11:25:00.000Z"
  }
}
### 4. Delete / Cancel an Appointment
- **URL:** `/api/appointments/:id`
- **Method:** `DELETE`
- **Description:** Removes a specified appointment record completely from the MongoDB cloud collection upon checkout or cancellation.
- **Example Request Body (JSON):**
```json
{
  "success": true,
  "message": "Appointment record successfully removed from the active triage queue.",
  "deletedId": "664619bfa12b9c34d8eef102"
}


Example Success Response (201 Created):

JSON
{
  "success": true,
  "message": "Appointment successfully booked and queued for triage.",
  "data": {
    "_id": "664619bfa12b9c34d8eef102",
    "studentName": "John Doe",
    "studentId": "ST12345",
    "reason": "Severe seasonal influenza symptoms and high fever",
    "appointmentDate": "2026-05-20T10:30:00.000Z",
    "createdAt": "2026-05-17T11:10:00.000Z"
  }
}


## ⚙️ Setup Instructions
Prerequisites
Ensure your machine has Node.js installed (v18 or higher recommended) along with MongoDB local server.

1. Open the Directory
Ensure your terminal environment is pointing directly to the root path of your project folder:

Bash
{C:\\Users\\LOQ\\OneDrive\\Desktop\\IT2234 ICA3}
2. Backend Environment Variables Configuration
In your root folder directory, create a secure environment file named .env and configure your parameters:


PORT=8000
MONGO_URL="mongodb://localhost:27017/student_health_db

## 3. Install Package Dependencies
Run the install command inside the root folder to pull down your backend modules:

Bash
npm install
Move down into the frontend development folder and install the client user interface modules:

Bash
cd frontend
npm install
## 💻 How to Run the Project
Because the system operates as a full-stack decoupled application, you must run the backend engine and the frontend React application concurrently in two separate terminal windows.

Step 1: Boot Up the Backend API Engine
In your primary terminal window (located at the project root), start up the database integration server:

Bash
npm start

Expected terminal confirmation feedback: Server running on port 8000

Step 2: Boot Up the Frontend React UI Application
Open a completely new terminal window inside VS Code, navigate straight into the client folder layer, and execute the startup interface script:

Bash
cd frontend
npm start

The React development script will initialize and automatically open your default web browser to the application portal:


http://localhost:3000


