import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CV } from 'src/app/models/cv.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css']
})
export class CvDetailsComponent implements OnInit {
  cv: CV | undefined;

  constructor(private route: ActivatedRoute, private cvService: CvService, private router: Router) {}

  ngOnInit() {
    const cvId = Number(this.route.snapshot.paramMap.get('id'));

    if (cvId) {
      this.loadCvDetails(cvId);
    }
  }
  editCv(): void {
    if (this.cv) {
      this.router.navigate(['/edit-cv', this.cv.id]);
    }
  }

  deleteCv(): void {
    if (this.cv) {
      this.cvService.delete(this.cv.id).subscribe(
        () => {
          // Rediriger vers la liste des CV après la suppression
          this.router.navigate(['/cvs']);
        },
        (error) => {
          console.error('Erreur lors de la suppression du CV', error);
        }
      );
    }
  }


  loadCvDetails(cvId: number): void {
    this.cvService.get(cvId).subscribe(
      (cv) => {
        this.cv = cv;
        console.log(this.cv); 
      () => {
        console.error('Une erreur s\'est produite lors du chargement des détails du CV');
     } });
    }
}