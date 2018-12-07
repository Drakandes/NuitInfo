import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatService {

  public language = 'français'
  public gaugeList = ['health', 'sleep', 'hunger']

  public gaugeInfo = {
    health: {
      max: 100,
      current: 100,
      iconName: "favorite",
    },
    sleep : {
      max: 100,
      current: 100,
      iconName: "alarm",
    },
    hunger: {
      max: 100,
      current: 100,
      iconName: "restaurant",
    },
  }

  constructor() { 
  }

  public sleepMinus(minus){
    this.gaugeInfo.sleep.current -= minus;
    if(this.gaugeInfo.sleep.current < 0){
      this.gaugeInfo.sleep.current = 0
    }
  }

  public hungerMinus(minus){
    this.gaugeInfo.hunger.current -= minus;
    if(this.gaugeInfo.hunger.current < 0){
      this.gaugeInfo.hunger.current = 0
    }
  }

  public healthMinus(minus){
    this.gaugeInfo.health.current -= minus;
    if(this.gaugeInfo.health.current < 0){
      this.gaugeInfo.health.current = 0
    }
  }

  public sleepBonus(bonus){
    this.gaugeInfo.sleep.current += bonus;
    if(this.gaugeInfo.sleep.current > this.gaugeInfo.sleep.max){
      this.gaugeInfo.sleep.current = this.gaugeInfo.sleep.max
    }
  }

  public hungerBonus(bonus){
    this.gaugeInfo.hunger.current += bonus;
    if(this.gaugeInfo.hunger.current > this.gaugeInfo.hunger.max){
      this.gaugeInfo.hunger.current = this.gaugeInfo.hunger.max
    }
  }

  public healthBonus(bonus){
    this.gaugeInfo.health.current += bonus;
    if(this.gaugeInfo.health.current > this.gaugeInfo.health.max){
      this.gaugeInfo.health.current = this.gaugeInfo.health.max
    }
  }
}
