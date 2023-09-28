import { strict } from "assert";
import { IVoiture } from "./Interface_voitures";
export class Voiture_utilitaire implements IVoiture{
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

    tableau_marque():string[] {
        let a:string[] = []
        tableau_VU.forEach(function (x){
            a.push(x.marque);
        })
        return a;
    };

    tableau_modele():string[] {
        let a:string[] = []
        tableau_VU.forEach(function (x){
            a.push(x.modele);
        })
        return a;
    };

    tableau_imatriculation():string[] {
        let a:string[] = []
        tableau_VU.forEach(function (x){
            a.push(x.immatriculation);
        })
        return a;
    };

    tableau_couleur():string[] {
        let a:string[] = []
        tableau_VU.forEach(function (x){
            a.push(x.couleur);
        })
        return a;
    };

    tableau_kilometre():number[] {
        let a:number[] = []
        tableau_VU.forEach(function (x){
            a.push(x.kilometrage);
        })
        return a;
    };

    tableau_prix():number[] {
        let a:number[] = []
        tableau_VU.forEach(function (x){
            a.push(x.prix);
        })
        return a;
    };

    tableau_anne_cerculation():number[] {
        let a:number[] = []
        tableau_VU.forEach(function (x){
            a.push(x.anne_cerculation);
        })
        return a;
    };
}

export const voiture_U1:IVoiture = new Voiture_utilitaire('Toyota',"k4","xxxx","rouge",45002,6700,2010)
export const voiture_U2:IVoiture = new Voiture_utilitaire('Citroen',"k4","xxxx","gris",45002,6700,2010)
export const voiture_U3:IVoiture = new Voiture_utilitaire('Audi',"k4","xxxx","noire",45002,6700,2010)
const tableau_VU = [voiture_U1,voiture_U2,voiture_U3]
