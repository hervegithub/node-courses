import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TodosService, Todo } from './todos.service';



//localhost:3000/todos

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService:TodosService){}

    // Get all elements of dotolist
    @Get()
    getTodoList(){
       return this.todosService.getTodoList(); 
    }

    //Get One element of todolist
    @Get(':id')
    getTodoById(@Param('id') id: string){
        //console.log('id '+id)
        return this.todosService.getToDoById(id);
    }

    //Add one task in todolist
    @Post()
    addTodo(@Body() newToDo){
        this.todosService.setNewToDo(newToDo);
    }

}
