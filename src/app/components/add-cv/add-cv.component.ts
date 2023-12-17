import { Component } from '@angular/core';
import { CV } from 'src/app/models/cv.model';

@Component({
  selector: 'app-add-cv',
  template: ` <h1>Créer un CV</h1>
  <app-formcv [cv]="cv"></app-formcv>`,
})
export class AddCvComponent {


  cv!: CV;
  ngOnInit(){
    this.cv= new CV();
  }
}
