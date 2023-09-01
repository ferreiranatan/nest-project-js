import { Course } from './entities/course.entity';
export declare class CoursesService {
    private courses;
    private deleteCount;
    findAll(): Course[];
    findOne(id: string): Course;
    create(createCourseDto: any): any;
    update(id: string, updateCourseDto: any): void;
    remove(id: string): void;
}
