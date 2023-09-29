import { Affichage } from "./affiche"
import { Voiture_utilitaire } from "./voiture_utilitaire"

export interface IVoiture{
    marque:string
    modele:string
    immatriculation:string
    couleur:string
    kilometrage:number
    prix:number
    anne_cerculation:number
}