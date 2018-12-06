import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  public isDarkmode = false

  constructor() { }

  public toggleDarkmode(){
    this.isDarkmode = !this.isDarkmode
  }
}
