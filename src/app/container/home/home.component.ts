import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
import { CUSTOM_WIDGETS_LIBRARY } from '../../shared/custom-widgets';
import { FormService } from '../../core/services/form.service';
import { BidirectionalService } from '../../core/services/bidirectional.service';
import { StorageService } from '../../core/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { SwalService } from '../../core/services/swal.service';

@Component({
	selector: 'fna-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	content: any;
	form: any;
	exampleData = {};
	currentStep: number;
	steps: number[];
	displayData: any = null;
	data: any;
	simpleId;
	widgets = CUSTOM_WIDGETS_LIBRARY;

	submit(formData) {
		this.displayData = formData;
		if (formData) {
			const simpleId = this.storageService.getSimpleId()
			if (this.content.breadCrumb === 1) {
				const executionId = this.storageService.getExecutionId();
				formData.SimpleId = simpleId;
				formData.ExecutionId = executionId;
			}
			this.getForm(simpleId, formData);
		}
	}
	constructor(private formService: FormService, private bidirectionalService: BidirectionalService,
		private route: Router, private activatedRoute: ActivatedRoute, private storageService: StorageService,
		private swalService: SwalService) { }



	ngOnInit() {

		this.activatedRoute.params.subscribe(params => {
			if (!params.requestCode && !params.simpleId) {
				this.getExecution();
			} else if (params.simpleId) {
				this.storageService.setSimpleId(params.simpleId);
				this.getForm(params.simpleId, {});
			} else {
				const executionId = this.storageService.getSimpleId();
				if (!executionId) {
					this.route.navigate(['']);
				}
				else {
					this.getForm(executionId, {})
				}
			}
		});
	}



	private getExecution() {
		this.formService.getExecutionId().subscribe((x: any) => {
			this.storageService.deleteStorage();
			this.storageService.setExecutionId(x.ExecutionId);
			this.storageService.setSimpleId(x.SimpleId);
			this.route.navigate(['/formulario', 'proceso']);
		});
	}

	getForm(simpleId: string, payload) {

		this.formService.getForm(simpleId, payload).subscribe((x: any) => {
			this.content = x.content;
			if (x.content.confront) {
				if (x.content.confront.ConfrontaResponseCode === 26) {
					this.swalService.error(x.content.confront.ClientDescription);
				}
				else {
					const confront = x.content.confront;
					let form = x.content.form;
					for (let i = 0; i < confront.Questions.length; i++) {
						form.schema.properties.answers.properties[`Question0${i + 1}`].Id = confront.Questions[i].Id;
						form.schema.properties.answers.properties[`Question0${i + 1}`].Text = confront.Questions[i].Text;
						form.schema.properties.answers.properties[`Question0${i + 1}`].questions = this.mapQuestions(confront.Questions[i].Options);
					}
				}
			};
			this.form = x.content.form;
			this.bidirectionalService.form.next(x.content);
		});

	}


	mapForm(): any {
		this.form = {};
	}

	mapQuestions(questions) {
		let items = [];
		questions.forEach(q => {
			items.push({ title: q.Text, const: q.Id });
		});
		return items;
	}


}
