import { Injectable } from '@nestjs/common';

export interface Todo{
    id:number,
    title:string,
    done:boolean,
    description ?:string,
}

@Injectable()
export class TodosService {
    
    toDoList: Todo[] =
    [
        {
            id: 1, 
            title:"Premier element",
            done:false,
            description: "Ceci est le premier élément de la liste des tâches à faire."
        },
        {
            id: 2, 
            title:"Deuxième element",
            done:false,
            description: "Ceci est le deuxième élément de la liste des tâches à faire."
        }
    ]

    constructor(){}

    getTodoList(){
        return this.toDoList;
    }

    getToDoById(id:string){
        if(!isNaN(Number(id))){
            this.toDoList.forEach((todo:Todo)=>{
                if(todo.id === Number(id))
                    return [{message: "request successfull", data: todo}];
            });
        }else{
            return [{message: "Bad param", data:null}];
        }
    }

    setNewToDo(newToDo:Todo){
        this.toDoList.push(newToDo);
    }

}
