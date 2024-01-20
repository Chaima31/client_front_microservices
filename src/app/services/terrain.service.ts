import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TerrainModule } from '../models/Terrain/terrain/terrain.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {


  constructor(private _http:HttpClient) { }

  GetAll():Observable<TerrainModule[]>{
    return this._http.get<TerrainModule[]>("http://localhost:8090/TaxeTnb/findAll");
  }

  GetById(id:Number):Observable<TerrainModule>{
    return this._http.get<TerrainModule>("http://localhost:8090/TaxeTnb/findById/"+id);
  }

}
