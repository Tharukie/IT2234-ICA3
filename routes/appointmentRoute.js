import express from "express";
import { 
  createAppointment, 
  fetchAppointments, 
  updateAppointment, 
  deleteAppointment 
} from "../controllers/appointmentController.js";

const route = express.Router();

// Assign domain-specific REST pathways to structural operations
route.post("/book", createAppointment);
route.get("/getall", fetchAppointments);
route.put("/update/:id", updateAppointment);
route.delete("/cancel/:id", deleteAppointment);

export default route;