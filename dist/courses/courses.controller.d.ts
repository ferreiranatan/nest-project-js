import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    findAll(): import("./entities/course.entity").Course[];
    findOne(id: string): void;
    create(createCourseDto: CreateCourseDto): any;
    update(id: string, updateCourseDto: UpdateCourseDto): void;
    remove(id: string): void;
}
