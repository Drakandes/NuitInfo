import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../dark-mode.service'
import { PlayerStatService } from '../player-stat.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  public darkmodeRange = 100

  constructor(public darkmode: DarkModeService, public stat: PlayerStatService) { }

  public changeLanguage(){
    if (this.stat.language === "français")
    {
      this.stat.language = "quebecois"
    } 
    else
    {
      this.stat.language = "français"
    }
  }

  ngOnInit() {
  }

}
