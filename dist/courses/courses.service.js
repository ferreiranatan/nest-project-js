"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
let CoursesService = class CoursesService {
    constructor() {
        this.courses = [
            {
                id: 1,
                name: "Fundamentos do framework NestJs",
                description: "Fundamentos do framework NestJs",
                tags: ["node.js", "nestjs", "javascript"]
            }
        ];
    }
    findAll() {
        return this.courses;
    }
    findOne(id) {
        const course = this.courses.find((course) => course.id === Number(id));
        if (!course) {
            throw new common_1.HttpException(`Course ID ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return course;
    }
    create(createCourseDto) {
        this.courses.push(createCourseDto);
        return createCourseDto;
    }
    update(id, updateCourseDto) {
        const indexCourse = this.courses.findIndex((course) => course.id === Number(id));
        this.courses[indexCourse] = updateCourseDto;
    }
    remove(id) {
        const indexCourse = this.courses.findIndex((course) => course.id === Number(id));
        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1);
        }
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
//# sourceMappingURL=courses.service.js.map