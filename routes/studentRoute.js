import express from "express";
import {
  createStudents,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} from "../controllers/studentController.js";
const studentRouter = express.Router();

studentRouter.post("/create", createStudents);
studentRouter.get("/students", getStudents);
studentRouter.get("/students/:id", getStudentById);
studentRouter.put("/students/update/:id", updateStudent);
studentRouter.delete("/students/delete/:id", deleteStudent);

export default studentRouter;