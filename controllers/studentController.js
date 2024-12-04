import Student from '../models/studentModel.js'

export const createStudents = async (req, res) => {
    try {
        const { IDCard, name, email, phone} = req.body;
        const classid  = req.params.id;
        const newStudent = await Student.create({
            IDCard,
            name,
            email,
            phone,
            classid: classid
        });
        const saveStudent = await newStudent.save();
        return res.status(201).json({ message: 'Create successfuly', saveStudent });
    } catch (err) {
        console.error("Error creating student:", err);
    }
};

export const getStudents = async (req, res) => {
    try {
      const students = await Student.find();
      if (!students) {
        return res.status(404).json({ message: "Class not found" });
      }
      return res.status(200).json({ students });
    } catch (error) {
      console.log(error.message);
    }
  };

export const getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
      const studentDetail = await Student.findById(id);
      if (!studentDetail) {
        return res.status(404).json({ message: "Class not found" });
      }
      return res.status(200).json({ studentDetail });
    } catch (error) {
      console.log(error.message);
    }
  };

export  const updateStudent = async (req, res) => {
    const { id } = req.params;
    try {
      const updateStudentById = await Student.findByIdAndUpdate({
        id, 
        updateStudentById : {new: true}
        });
      if (!updateStudentById) {
        return res.status(404).json({ message: "Class not found" });
      }
      return res.status(200).json({ message: 'Updated successfuly', updateStudentById });
    } catch (error) {
      console.log(error.message);
    }
  };

export  const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
      const deleteStudentById = await Student.findByIdAndDelete(id);
      if (!deleteStudentById) {
        return res.status(404).json({ message: "Class not found" });
      }
      return res.status(200).json({ message: 'deleted successfuly', deleteStudent });
    } catch (error) {
      console.log(error.message);
    }
  };


