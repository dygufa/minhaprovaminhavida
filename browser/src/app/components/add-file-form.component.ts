import { Component, OnInit } from '@angular/core';
import { selectOption } from '../models/selectOption';
import { FileService } from '../services/file.service';
import { UniversityService } from '../services/university.service';
import { CourseService } from '../services/course.service';
import { ValidationService } from '../services/validation.service';
import { FORM_PROVIDERS, FormBuilder, ControlGroup, Validators } from '@angular/common';
import { Router } from '@angular/router-deprecated';

@Component({
	selector: 'add-file-form',
	templateUrl: './app/views/add-file-form.html',
	styleUrls: ['./assets/css/add-file']
})

export class AddFileFormComponent {
	addFileForm: any;
	universities: selectOption[] = [];
	courses: selectOption[] = [];
	fieldsOfStudy: Array<Object>;
	types: Array<Object>;
	errors: Array<Object> = [];
	submited = false;

	constructor(private _courseService: CourseService, private _universityService: UniversityService, private _fileService: FileService, private _formBuilder: FormBuilder, private _router: Router) {
		
	}

	ngOnInit() {
		let _self = this;

		this.addFileForm = this._formBuilder.group({
			'name': ['', Validators.required],
			'courseId': [1, Validators.compose([Validators.required])],
			'universityId': [2, Validators.required],
			'files': ['', ValidationService.fileValidator],
			'typeId': [1],
			'fieldOfStudyId': [1],
			'courseName': ['', ValidationService.requiredForNewCourseValidor],
		});

		this.addFileForm.controls['files'].updateValue([]);

		this._universityService.getUniversities().subscribe(function(universities) {
			universities.forEach(function(university) {
				_self.universities.push({
					label: university.acronym + ' - ' + university.name,
					value: university.id
				});
			});			
		});	

		this.courses.push({
			label: 'Adicionar nova disciplina',
			value: 0
		});

		this._courseService.getCourses().subscribe(function(courses) {
			courses.forEach(function(course) {
				_self.courses.push({
					label: course.name,
					value: course.id
				});
			});
		});
        
        this.fieldsOfStudy = this._courseService.getFieldsOfStudy();

        this.types = this._fileService.getTypes();
	}

	private addFile(data) {
		if (this.addFileForm.valid === false) {
			return this.submited = true;
		}
		
		var _self = this;
		this._fileService.addFile(data).then(function(res) {
			_self.errors = [];
			_self.gotoFiles()
		}).catch(function(reject) {
			_self.errors = reject.error;
		});
	}

	fileChangeEvent(fileInput: any) {
		this.addFileForm.controls['files'].markAsDirty();
        this.addFileForm.controls['files'].updateValue(fileInput.target.files);
    }
	
	onSubmit() { 
		this.addFile(this.addFileForm.value);
	}

	gotoFiles() {
		let link = ['Files'];
		this._router.navigate(link);
	}
}