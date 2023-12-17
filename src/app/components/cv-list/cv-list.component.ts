import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CV } from 'src/app/models/cv.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent {
  Cv!: CV[];

  searchTerm: string = ''; 
  filteredCvs: CV[] = []
  constructor(private cvService: CvService,
    private router:Router) {}
    

  ngOnInit() {
    this.fetchCVs();
  }
  searchCv() {
    this.cvService.findByNom(this.searchTerm).subscribe(
      (cvs) => {
        this.filteredCvs = cvs;
      },
      (error) => {
        console.error('Erreur lors de la recherche : ', error);
      }
    );
  }
  fetchCVs(): void {
    this.cvService.getAll()
      .subscribe({
        next: (data) => {
          this.Cv = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  goToCv(cv: CV){
    this.router.navigate(['/cv', cv.id])
   }

}
