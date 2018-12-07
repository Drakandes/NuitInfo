import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../dark-mode.service'
import { PlayerStatService } from '../player-stat.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  private darkmodeRange = 100

  constructor(private darkmode: DarkModeService, private stat: PlayerStatService) { }

  private changeLanguage(){
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
