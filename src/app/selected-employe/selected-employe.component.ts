import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployesService } from '../employes.service';
import { Employe } from '../Employe';

@Component({
  selector: 'app-selected-employe',
  templateUrl: './selected-employe.component.html',
  styleUrls: ['./selected-employe.component.css']
})
export class SelectedEmployeComponent implements OnInit {
  matricule:number;
  lesEmployes;
  employe;
  rechercheEmploye(){
    for(let e of this.service.lesEmployes)
    {
      if(this.matricule == e.matricule)
      {
        this.employe = e;
      }
    }
  }
  constructor(private activatedRoute:ActivatedRoute, private service:EmployesService) { }

  ngOnInit() {
    this.matricule = this.activatedRoute.snapshot.params['matricule'];
    this.lesEmployes = this.service.lesEmployes;
    this.rechercheEmploye();
  }

}
