import { FormEvent, useState } from "react"

const Input = ({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void
}) => {
  const [newTask, setNewTask] = useState('')
  return (
    <form 
      action="" 
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        handleSubmit(e, newTask)
        setNewTask('')
      }}    
    >
      
      <div className="flex flex-col">
        <label className="text-white">Enter your net task:</label>
        <input 
          type="text" 
          className="p-1 rounded-sm" 
          value={newTask}
          onChange={(e)=> {
            setNewTask(e.target.value)
          }}
        />
      </div>
      <button
        type="submit"
        className="bg-green100 rounded-lg hover:bg-green-200 [-1"
      >
        Add task
      </button>
    </form>
  )
}

export default Input