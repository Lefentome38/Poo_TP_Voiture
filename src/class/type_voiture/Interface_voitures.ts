import { Voiture_utilitaire } from "./voiture_utilitaire"
export interface IVoiture{
    marque:string
    modele:string
    immatriculation:string
    couleur:string
    kilometrage:number
    prix:number
    anne_cerculation:number

    tableau_marque:() => string[]
    tableau_modele:() => string[]
    tableau_imatriculation:() => string[]
    tableau_couleur:() => string[]
    tableau_kilometre:() => number[]
    tableau_prix:() => number[]
    tableau_anne_cerculation:() => number[]

}

export let afficher:IVoiture = new Voiture_utilitaire("","","","",0,0,0)
