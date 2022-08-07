import { Task } from "../interfaces/Task"
import { TaskCard } from "./TaskCard"

interface Props {
  tasks: Task[]
}

export const TaskList = ({tasks}: Props) => {
  return (
    <>
      {tasks.map((task, index) => (
        <div className="col-md-5">
          <TaskCard task={task} key={index}/>
        </div>
      ))}
    </>
  )
}