import SummaryItem from "./SummaryItem"
import { Task } from "../../App"

const Summary = ({ tasks } : { tasks: Task[]}) => {
  const total = tasks.length
  const pending = tasks.filter((t)=> t.done === false).length
  const done = tasks.filter((t) => t.done === true).length
  return (
    <>
      <div className="flex justify-between">
        <SummaryItem itemName={"Total"} itemValue={total}/>
        <SummaryItem itemName={"To do"} itemValue={pending}/>
        <SummaryItem itemName={"Done"} itemValue={done}/>
      </div>    
    </>    
  )
}

export default Summary