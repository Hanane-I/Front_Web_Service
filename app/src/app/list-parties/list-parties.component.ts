import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  


@Component({
  selector: 'app-list-parties',
  templateUrl: './list-parties.component.html',
  styleUrls: ['./list-parties.component.css']
})
export class ListPartiesComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  games: string[]; 
  gameInfos: string[];
  game: string[];
  ngOnInit() {

    this.httpService.get('https://localhost:44344/api/game/character?id=12').subscribe(  
      data => {  
        this.games = data as string[];
        this.gameInfos = data['gameinfos'];
        this.game = this.gameInfos['game'];  
      }  
    );  
  }

}
