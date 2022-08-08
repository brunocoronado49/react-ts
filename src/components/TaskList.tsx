import { Task } from "../interfaces/Task"
import { TaskCard } from "./TaskCard"

interface Props {
  tasks: Task[]
  deletTask: (id: number) => void
}

export const TaskList = ({ tasks, deletTask }: Props) => {
  return (
    <>
      {tasks.map(task => (
        <div className="col-md-5 pb-4" key={task.id}>
          <TaskCard task={task} deleteTask={deletTask} />
        </div>
      ))}
    </>
  )
}
