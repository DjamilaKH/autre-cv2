import { Component, OnInit } from '@angular/core';
import { CV } from '../models/cv.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-editer-cv',
  template: `
   <h1>Créer un CV</h1>
  <app-formcv *ngIf="cv" [cv]="cv"></app-formcv>`,
  
 
})
export class EditerCvComponent implements OnInit{

  cv!: CV;
 constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cvService: CvService
  ) {}
  ngOnInit() {
    const cvId = Number(this.route.snapshot.paramMap.get('id'));

    if (cvId) {
      this.loadCvDetails(cvId);
    }
  }

  loadCvDetails(cvId: number): void {
    this.cvService.get(cvId).subscribe((cv) => {
      this.cv = cv;
    });
  }

  
}
