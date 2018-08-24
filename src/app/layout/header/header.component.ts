import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fna-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() info: any[];
  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() {
  }

  closeSession() {
    this.storageService.deleteStorage();
    this.router.navigated = false;
    this.router.navigate(['']); 
  }

}
