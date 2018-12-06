import { Component, OnInit } from '@angular/core';
import { PlayerStatService } from '../player-stat.service'

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  constructor(private stat: PlayerStatService) { }

  ngOnInit() {
  }

  private getGaugeFullPerc(gaugeType){
    return `${this.stat.gaugeInfo[gaugeType].current / this.stat.gaugeInfo[gaugeType].max* 100}%`
  }

  private getGaugeEmptyPerc(gaugeType){
    return `${(1 - this.stat.gaugeInfo[gaugeType].current / this.stat.gaugeInfo[gaugeType].max) * 100}%`
  }
}
