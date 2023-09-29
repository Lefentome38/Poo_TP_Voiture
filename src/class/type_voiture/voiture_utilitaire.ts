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
}
export const voiture_U1:IVoiture = new Voiture_utilitaire('Toyota',"k4","RT-854-YU","rouge",851200,6700,2009)
export const voiture_U2:IVoiture = new Voiture_utilitaire('Citroen',"c6","GA-384-MN","gris",84360,8000,2017)
export const voiture_U3:IVoiture = new Voiture_utilitaire('Audi',"RS3","XW-194-PF","noire",84215,60000,2021)
export const tableau_VU = [voiture_U1,voiture_U2,voiture_U3]
