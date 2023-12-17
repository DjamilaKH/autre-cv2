export class CV {
    id!:any;
    nomComplet!: string;
    adresse!: string;
    telephone!: number;
    email!: string;
    liensGitLinkedIN!: string;
    objectif!: string;
    resume!: string;
    certification!: string;
    experienceProf!: string;
    lieuEducation!: string;
    specialiteEtude!: string;
    centreInteret!: string;
    constructor(
        nomComplet: string = '',
        adresse: string = '',
       email: string = '',
       telephone: number = 0,
       liensGitLinkedIN: string = '',
       objectif: string = '',       
       resume: string = '',
       certification: string = '',
       experienceProf: string = '',
       lieuEducation: string = '',
       specialiteEtude: string = '',
       centreInteret: string = '',

    ) {
        this.nomComplet = nomComplet;
        this.adresse = adresse;
        this.email = email;
        this.telephone = telephone;
        this.liensGitLinkedIN = liensGitLinkedIN;
        this.objectif= objectif;
        this.resume= resume;
        this.certification= certification;
        this.experienceProf= experienceProf;
        this.lieuEducation= lieuEducation;
        this.specialiteEtude= specialiteEtude;
        this.centreInteret= centreInteret;

    }
}
