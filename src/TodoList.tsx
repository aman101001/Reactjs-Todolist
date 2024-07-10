
import { motion, AnimatePresence } from 'framer-motion';
import { TodoTask } from './Todo.model';

interface Props {
    todoList: TodoTask[],
    deleteTodo: (index: number) => void,
    editTodo: (e: any, index: number) => void
    handleComplete: (index: number) => void
}


function TodoList(props: Props) {
    const { todoList, deleteTodo, editTodo, handleComplete } = props;

    return (
        <div className="px-6 mt-8">
            <AnimatePresence>
                {
                    todoList.map((todo: TodoTask, index: number) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}   // Initial state before animation
                                whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.25 }}

                                key={index} className="relative  mt-4 bg-[#7179a8] w-full rounded-3xl px-6 py-4 flex items-center">
                                <div className="w-[16px] flex items-center">
                                    <input type="checkbox" className={`appearance-none w-3 h-3 border-2 cursor-pointer rounded-full ${todo.completed ? 'border-[#ff0000] bg-[#fc3939]' : ' border-[#17ac03] bg-[#46e596]'}`} onClick={(e) => e.stopPropagation()} onChange={() => handleComplete(index)}></input>
                                </div>
                                <input type="text" spellCheck="false" className={`mx-2 flex-1 pe-2 truncate text-white  bg-transparent focus:outline-none ${todo.completed && 'line-through'}`} value={todo.task} onChange={(e) => editTodo(e, index)} readOnly={todo.completed}></input>
                                <div className="absolute right-4 cursor-pointer " onClick={() => deleteTodo(index)}>
                                    <i className="fa-solid fa-xmark fa-xs text-[#242d63]"></i>
                                </div>
                            </motion.div>



                        )
                    })

                }
            </AnimatePresence>
        </div>
    )

}

export default TodoList