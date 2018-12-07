import { Component, OnInit } from '@angular/core';
import { PlayerStatService } from '../player-stat.service'

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  constructor(public stat: PlayerStatService) { }

  ngOnInit() {
  }

  public getGaugeFullPerc(gaugeType){
    return `${this.stat.gaugeInfo[gaugeType].current / this.stat.gaugeInfo[gaugeType].max* 100}%`
  }

  public getGaugeEmptyPerc(gaugeType){
    return `${(1 - this.stat.gaugeInfo[gaugeType].current / this.stat.gaugeInfo[gaugeType].max) * 100}%`
  }
}
