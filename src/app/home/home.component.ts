import { Component } from '@angular/core';
import { LISTACTIVITES } from '../db/listActivites';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allActivites= LISTACTIVITES;
//singlePokemon:Pokemon=new Pokemon();
//Nouvelle instance de pokemon (objet pokemon:new Pokemon())
/*pokemon:any = {
  id:'toto',
  isDone:false,
  date:new Date(),
  isModif:false,
  
    name:'',
    type:'',
    hp:0,
    cp:0,
    picture:'',
    created:new Date()
}*/


}
