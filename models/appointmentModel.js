import mongoose from "mongoose";

// Structure the collection constraints for student medical appointments
const appointmentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  reasonForVisit: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending", // Default value for new appointments
  }
});

// Compile and export model mapping to the 'appointments' collection
export default mongoose.model("appointments", appointmentSchema);