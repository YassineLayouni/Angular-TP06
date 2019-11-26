import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../employes.service';

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {
  lesEmployes;
  constructor(private service:EmployesService) { }

  ngOnInit() {
    this.lesEmployes = this.service.lesEmployes;
  }

}
