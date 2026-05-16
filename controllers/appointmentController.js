import Appointment from "../models/appointmentModel.js";

// ==========================================
// 1. CREATE: Book a New Appointment (POST)
// ==========================================
export const createAppointment = async (req, res) => {
  try {
    const appointmentData = new Appointment(req.body);
    
    // Step validation: Check if student has already booked an appointment for that same date
    const { studentId, appointmentDate } = appointmentData;
    const bookingExists = await Appointment.findOne({ studentId, appointmentDate });
    
    if (bookingExists) {
      return res.status(400).json({ message: "You already have an appointment booked for this date." });
    }

    const savedAppointment = await appointmentData.save();
    res.status(200).json(savedAppointment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
  }
};

// ==========================================
// 2. READ: Fetch All Appointments (GET)
// ==========================================
export const fetchAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    if (appointments.length === 0) {
      return res.status(404).json({ message: "No medical appointments found." });
    }
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
  }
};

// ==========================================
// 3. UPDATE: Modify Appointment Details (PUT)
// ==========================================
export const updateAppointment = async (req, res) => {
  try {
    const id = req.params.id;
    const appointmentExist = await Appointment.findOne({ _id: id });
    
    if (!appointmentExist) {
      return res.status(404).json({ message: "Appointment record not found." });
    }

    const updatedData = await Appointment.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
  }
};

// ==========================================
// 4. DELETE: Cancel/Delete Appointment (DELETE)
// ==========================================
export const deleteAppointment = async (req, res) => {
  try {
    const id = req.params.id;
    const appointmentExist = await Appointment.findOne({ _id: id });
    
    if (!appointmentExist) {
      return res.status(404).json({ message: "Appointment record not found." });
    }

    await Appointment.findByIdAndDelete(id);
    res.status(201).json({ message: "Appointment canceled and deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
  }
};