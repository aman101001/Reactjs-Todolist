
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
    todoList: string[],
    deleteTodo: (index: number) => void
}


function TodoList(props: Props) {
    const { todoList, deleteTodo } = props;

    return (
        <div className="px-6 mt-8">
              <AnimatePresence>
            {
                todoList.map((todo: string, index: number) => {
                    return (

                      
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}   // Initial state before animation
                                whileInView={{ opacity:1, y: 0 }} // Animate when in view
                                exit={{ opacity: 0, x : 100 , transition : { duration : 0.2}}}
                                transition={{ duration: 0.25 }}
                          
                                key={index} className="relative  mt-4 bg-[#7179a8] w-full rounded-3xl px-6 py-4 flex items-center">
                                <div className="w-[16px] flex items-center">
                                    <input type="checkbox" className="w-[16px]"></input>
                                </div>
                                <label className="mx-2 text-white truncate">{todo}</label>
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