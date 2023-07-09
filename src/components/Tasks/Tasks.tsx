import TaskItem from "./TaskItem"
import { Task } from "../../App"

const Tasks = ({tasks, toggleDone, handleDelete} : { 
  tasks: Task[]
  toggleDone: (id: string, done: boolean) => void
  handleDelete: (id: string) => void 
}) => {
  return (
    <div className="flex flex-col gap-2">
        {tasks.map((t) => (
            <TaskItem 
              key={t.id} 
              name={t.name}
              done={t.done}
              id={t.id}            
              toggleDone={toggleDone}
              handleDelete={handleDelete}
            />
        ))}
    </div>
  )
}

export default Tasks