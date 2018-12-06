import { Injectable } from '@angular/core';
import  explorationDataObject from '../json-stuff/explorationAreas'

@Injectable({
  providedIn: 'root'
})

export class PathExplorationService {

  public explorationData = explorationDataObject

  constructor() { }

  public initExplorationService(){
  }
}
