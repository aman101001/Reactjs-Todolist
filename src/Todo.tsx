import { useState } from "react"
import DateHeading from "./DateHeading"
import TodoList from "./TodoList"

function Todo() {
    const [todo, setTodo] = useState<string>('');
    const [todoList, setTodoList] = useState<string[]>([]);

    const addTodo = () => {
        if (todo != '') {
            setTodoList([todo, ...todoList]);
            setTodo('');
        }
    }

    const deleteTodo = (index: number) => {
        const newTodoList = todoList.filter((_todo: string, todoIndex: number) => {
            return todoIndex != index;
        })
        setTodoList(newTodoList);
    }

    return (
        <div className="relative flex flex-col w-[45vh] h-[75vh] bg-custom-gradient-todo shadow-[14px_14px_6px_rgba(0,0,0,0.25)]">
            <DateHeading></DateHeading>

            <p className="text-xs uppercase text-[#d5d5f5] tracking-wider mt-8 mb-2 px-8">Today's List</p>

            <div className="flex-1  overflow-auto no-scrollbar">
                <TodoList todoList={todoList} deleteTodo={deleteTodo}></TodoList>
            </div>
            <div className="absolute bottom-6 ps-8 pe-4 w-full flex justify-between items-center h-14">
                <div className="flex-1 h-full  items-center me-4">
                    <input type="text" className="px-6 h-full w-full rounded-3xl bg-[#e7e7f7] outline-[#4f46e5] focus:outline-offset-1 placeholder:text-gray-600 placeholder:tracking-wide placeholder:italic transition-all duration-75"
                        placeholder="Enter your task here..." value={todo}
                        onChange={(e) => setTodo(e.target.value)}></input>
                </div>
                <div className="cursor-pointer  h-12 w-12 rounded-full bg-[#e7e7f7] flex justify-center items-center hover:opacity-80 transition-all ease-out duration-300"
                    onClick={addTodo}>
                    <i className="fa-solid fa-plus text-2xl text-[#242d63] "></i>
                </div>
            </div>
        </div >
    )
}

export default Todo

{/* <DateHeading></DateHeading>
<div className="flex-1  overflow-auto no-scrollbar">

    <TodoList todoList={todoList} deleteTodo={deleteTodo}></TodoList>


</div>
<div className="absolute bottom-6 ps-8 pe-4 w-full flex justify-between items-center h-14">
    <div className="flex-1 h-full  items-center me-4">
        <input type="text" className="px-6 h-full w-full rounded-3xl bg-[#e7e7f7] outline-[#4f46e5] focus:outline-offset-1 placeholder:text-gray-600 placeholder:tracking-wide placeholder:italic transition-all duration-75"
            placeholder="Enter your task here..." value={todo}
            onChange={(e) => setTodo(e.target.value)}></input>
    </div>
    <div className="cursor-pointer  h-12 w-12 rounded-full bg-[#e7e7f7] flex justify-center items-center hover:opacity-80 transition-all ease-out duration-300"
        onClick={addTodo}>
        <i className="fa-solid fa-plus text-2xl text-[#242d63] "></i>
    </div>
</div> */}