import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { Router } from '@angular/router';


@Component({
  selector: 'app-partie1',
  templateUrl: './partie1.component.html',
  styleUrls: ['./partie1.component.css']
})


export class Partie1Component implements OnInit {

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
      var xCercle = 20;
      var yCrrcle = 20;
      //cercle
      cercle.beginPath();
      cercle.fillStyle="#FF4422"
      cercle.arc(xCercle,yCrrcle,10,0,2*Math.PI);
      cercle.fill();
    }
    
  }

  Avancer(): void{
    this.router.navigate(['/partie11']);
  }

  Combattre(): void{
    this.httpService.post('https://localhost:44344/api/game/12', function(res, req){
      let newCharacter = {"id": 12, "name": req.body.name};
      res.send(newCharacter);
    });
  }

  Fuir(): void{
    this.httpService.post('https://localhost:44344/api/game/12', function(res, req){
      let newCharacter = {"id": 12, "name": req.body.name};
      res.send(newCharacter);
    });
  }

  Ramasser(): void{
    this.httpService.post('https://localhost:44344/api/game/12', function(res, req){
      let newCharacter = {"id": 12, "name": req.body.name};
      res.send(newCharacter);
    });
  }
}


 

