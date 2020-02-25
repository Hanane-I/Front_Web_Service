import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-partie12',
  templateUrl: './partie12.component.html',
  styleUrls: ['./partie12.component.css']
})
export class Partie12Component implements OnInit {

  constructor(private httpService: HttpClient, private router: Router) { }

  games: string[]; 
  gameInfos: string[];
  character: string[];
  rooms: string[];
  public taille: number;

  ngOnInit() {
    this.httpService.get('https://localhost:44344/api/game/character?id=12').subscribe(  
      data => {  
        this.games = data as string[];
        this.gameInfos = data['gameinfos'];
        this.character = this.gameInfos['character'];  
        this.rooms = this.gameInfos['rooms'];
        this.taille = this.rooms.length;
      }  
    );  

    //Canevas pour Map
    var canvas : any = document.getElementById("myCanvas");
    if(canvas.getContext){
      var ctx = canvas.getContext("2d");
      var cercle = canvas.getContext("2d");
      var porte = canvas.getContext("2d");
      var x = 0;
      var y = 0;
      //map
      for(var i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.fillRect(x, y, 50, 50);
        x = x + 50;
        ctx.fillStyle = "";
      }
      var xCercle = 70;
      var yCrrcle = 20;
      //cercle
      cercle.beginPath();
      cercle.fillStyle="#FF4422"
      cercle.arc(xCercle,yCrrcle,10,0,2*Math.PI);
      cercle.fill();
    }
  }


}
