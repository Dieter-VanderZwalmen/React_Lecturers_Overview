import axios from '../axios';
import { Lecturer } from '../types';

const getAllLecturers = () => axios.get<Array<Lecturer>>('/lecturers');

const LecturerService = {
    getAllLecturers,
};

export default LecturerService;
