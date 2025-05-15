import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // task="";
  // taskList:{id:number,task:string}[]=[]

  // addTask(){
  //   this.taskList.push({id:this.taskList.length+1,task:this.task})
  //   this.task=""
  //   console.log(this.taskList);
    
  // }
  // deleteTask(taskId:number){
  //   this.taskList=this.taskList.filter((item)=>item.id!=taskId);
  // }





   taskList: { id: number; task: string }[] = [];
  task: string = '';
  taskCount: number = 0;
  nextId: number = 1;

  constructor() {
    this.loadTasks(); // Load saved tasks when component initializes
  }

  addTask() {
    if (this.task.trim()) {
      const newTask = {
        id: this.nextId++,
        task: this.task
      };
      this.taskList.push(newTask);
      this.task = '';
      this.updateTaskCount();
      this.saveTasks(); // Save to localStorage
    }
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter(t => t.id !== id);
    this.updateTaskCount();
    this.saveTasks(); // Save to localStorage
  }

  updateTaskCount() {
    this.taskCount = this.taskList.length;
  }

  // Save tasks and nextId to localStorage
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
    localStorage.setItem('nextId', this.nextId.toString());
  }

  // Load tasks and nextId from localStorage
  loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    const savedNextId = localStorage.getItem('nextId');
    if (savedTasks) {
      this.taskList = JSON.parse(savedTasks);
      this.taskCount = this.taskList.length;
    }
    if (savedNextId) {
      this.nextId = parseInt(savedNextId, 10);
    }
  }







} 