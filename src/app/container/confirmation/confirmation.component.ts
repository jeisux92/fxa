import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../../core/services/form.service';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'fna-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, 
              private storageService:StorageService) { }

  ngOnInit() {
    this.route.params.subscribe(route => {
      this.storageService.setSimpleId(route['SId']);
      this.router.navigate(['formulario', route['SId']])
    })
  }

}
