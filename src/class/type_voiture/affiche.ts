import { IVoiture } from "./Interface_voitures";

let tata_tableau:string[] = []
export class Affichage implements IVoiture{
   
    marque:string
    modele:string
    immatriculation:string
    couleur:string
    kilometrage:number
    prix:number
    anne_cerculation:number

    constructor(marque:string,modele:string,immatriculation:string,couleur:string,kilometrage:number,prix:number,anne_cerculation:number){
        this.marque = marque
        this.modele = modele
        this.immatriculation = immatriculation
        this.couleur = couleur
        this.kilometrage = kilometrage
        this.prix = prix
        this.anne_cerculation = anne_cerculation
    }

    tableau_marque(Vehicules : IVoiture[]):string[] {
        let a:string[] = []
        Vehicules.forEach(function (x){
            a.push(x.marque);
        })
        return a;
    };

    tableau_modele(Vehicules : IVoiture[]):string[] {
        let a:string[] = []
        Vehicules.forEach(function (x){
            a.push(x.modele);
        })
        return a;
    };

    tableau_imatriculation(Vehicules : IVoiture[]):string[] {
        let a:string[] = []
        Vehicules.forEach(function (x){
            a.push(x.immatriculation);
        })
        return a;
    };

    tableau_couleur(Vehicules : IVoiture[]):string[] {
        let a:string[] = []
        Vehicules.forEach(function (x){
            a.push(x.couleur);
        })
        return a;
    };

    tableau_kilometre(Vehicules : IVoiture[]):number[] {
        let a:number[] = []
        Vehicules.forEach(function (x){
            a.push(x.kilometrage);
        })
        return a;
    };

    tableau_prix(Vehicules : IVoiture[]):number[] {
        let a:number[] = []
        Vehicules.forEach(function (x){
            a.push(x.prix);
        })
        return a;
    };

    tableau_anne_cerculation(Vehicules : IVoiture[]):number[] {
        let a:number[] = []
        Vehicules.forEach(function (x){
            a.push(x.anne_cerculation);
        })
        return a;
    };
}



export let affichage = new Affichage("","","","",0,0,0)