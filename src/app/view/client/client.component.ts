import { Component } from '@angular/core';
import { TerrainModule } from 'src/app/models/Terrain/terrain/terrain.module';
import { TerrainService } from 'src/app/services/terrain.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  terrainModule:TerrainModule[]=[];

  constructor(private terrainservice:TerrainService,
             ){

  }
  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.terrainservice.GetAll().subscribe(item=>{
      this.terrainModule=item;
      console.log(this.terrainModule);
    },error=>{
      console.log(error);
    })
  }
}
