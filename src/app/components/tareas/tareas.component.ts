import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
 pendientes:string[]=[];
 enProgreso:string[]=[];
 finalizadas:string[]=[];

 public tarea:string=""
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    if(this.tarea ==''){
      return;
    }
    this.pendientes.push(this.tarea);
    this.tarea='';
  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  eliminarTareaPendientes(tarea:number){
    this.pendientes.splice(tarea, 1, );
    console.log(this.pendientes);
    
  }
  eliminarTareaProgreso(tarea:number){
    this.enProgreso.splice(tarea,1, );
  }
  eliminarTareaFinalizada(tarea:number){
    this.finalizadas.splice(tarea, 1 );
  }
}
