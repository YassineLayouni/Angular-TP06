import { Injectable } from '@angular/core';
import { Employe } from './Employe';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  lesEmployes = [new Employe(12345, 'Mounir Ben Ali', 'Directeur', true),
                 new Employe(12587,'Maha Ben Nasr', 'Ingénieur', false),
                 new Employe(85719, 'Alia Moalla', 'Secrétaire', false),
                 new Employe(45879,'Sami Toumi', 'Ingénieur',true)];
     
  getEmployeByMatricule(matricule:number)
  {
    for(let t of this.lesEmployes)
    {
      if(t.matricule==matricule)
      {
        return t;
      }
      else
      {
        return null;
      }
    }
  }

  addEmploye(employe:Employe)
  {
    this.lesEmployes.push(employe);
  }
  constructor() { }
}
