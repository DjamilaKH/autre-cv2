import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CV } from 'src/app/models/cv.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-formcv',
  templateUrl: './formcv.component.html',
  styleUrls: ['./formcv.component.css']
})
export class FormcvComponent {
  @Input() cv!:CV;

  isAddCv!: boolean;
  cvForm!: FormGroup;
 
  constructor(
    private router: Router,
    private cvService: CvService,
    private formBuilder: FormBuilder,)

     {
    this.cvForm = this.formBuilder.group({
    nomComplet:'',
    adresse:'',
    telephone: 0,
    email:'',
    liensGitLinkedIN:'',
    objectif:'',
    resume:'',
    certification :'',
    experienceProf:'',
    lieuEducation:'',
    specialiteEtude:'',
    centreInteret:'',
    });
  }
 ngOnInit() {
    this.isAddCv=this.router.url.includes('add')
  }
  onSubmit() {
   
  
    if (this.isAddCv) {
      this.cvService.create(this.cv).subscribe((cv: CV) => {
        this.router.navigate(['/cvs']);
      });
    } 
    else {
      // Assurez-vous que this.cv.id est défini et a une valeur valide
      if (this.cv.id !== undefined && this.cv.id !== null) {
        this.cvService.update(this.cv.id, this.cv).subscribe(() => {
          this.router.navigate(['/cv', this.cv.id]);
        });
      } else {
        // Gérez le cas où this.cv.id n'est pas défini
        console.error("L'ID du CV n'est pas défini.");
      }
    }  }}
