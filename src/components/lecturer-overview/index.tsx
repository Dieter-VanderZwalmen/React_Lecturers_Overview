import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import LecturerService from '../../services/LecturerService';
import { Lecturer } from '../../types';
import CoursesOverview from './CoursesOverview';
import LecturersOverview from './LecturersOverview';

const LecturerOverview: React.FC = () => {
    const [lecturers, setLecturers] = useState<Array<Lecturer>>([]);
    const [selectedLecturer, setSelectedLecturer] = useState<Lecturer | null>(null);

    useEffect(() => {
        getLecturers();
    }, []);

    const getLecturers = async () => {
        const res: AxiosResponse<Array<Lecturer>> = await LecturerService.getAllLecturers();
        setLecturers(res.data);
    };

    return (
        <section className="row justify-content-center">
            <LecturersOverview lecturers={lecturers} setSelectedLecturer={setSelectedLecturer} />
            {selectedLecturer && selectedLecturer.courses && (
                <CoursesOverview courses={selectedLecturer.courses} />
            )}
        </section>
    );
};

export default LecturerOverview;
