import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import LecturerService from '../../services/LecturerService';
import { Lecturer } from '../../types';
import CoursesOverviewTable from './CoursesOverviewTable';
import LecturersOverviewTable from './LecturersOverviewTable';

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
            <LecturersOverviewTable
                lecturers={lecturers}
                setSelectedLecturer={setSelectedLecturer}
            />
            {selectedLecturer && selectedLecturer.courses && (
                <CoursesOverviewTable courses={selectedLecturer.courses} />
            )}
        </section>
    );
};

export default LecturerOverview;
