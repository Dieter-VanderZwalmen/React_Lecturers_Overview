export interface Course {
    name: string;
    description: string;
    phase: number;
}
export interface Lecturer {
    name: string;
    courses: Array<Course> | null;
}
