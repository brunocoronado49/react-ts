import { Task } from "../interfaces/Task"
import { FcHighPriority } from "react-icons/fc";

interface Props {
  task: Task,
  deleteTask: (id: number) => void
}

export const TaskCard = ({ task, deleteTask }: Props) => {
  return (
    <div className="card card-body rounded-3">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.completed ? "Completed" : "Incompleted"}</p>
      <button className="btn btn-danger rounded-3" onClick={() => task.id && deleteTask(task.id)}>
        <FcHighPriority />
        Delete
      </button>
    </div>
  )
}
