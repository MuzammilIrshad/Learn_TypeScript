import { title } from "process";
import { Todo } from "./todo";

export type TodoCreationParams =  Pick<Todo, "title" | "description">
// similar to:
//  export type TodoCreationParams {
//     title:string
//     description:string
//  }

export class TodoService {
    public get(todoId: string):Todo{
        return {
            id:todoId,
            title:"hello",
            description:"hi there",
            done:false
        }
    }
    public create(todoCreationParams: TodoCreationParams):Todo{
        return {
            id:"1",
            title:"hello",
            description:"hi there",
            done:false
        }
    }
}