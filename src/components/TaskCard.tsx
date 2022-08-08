import { Task } from "../interfaces/Task"
import { FcHighPriority } from "react-icons/fc";

interface Props {
  task: Task
}

export const TaskCard = ({ task }: Props) => {
  return (
    <div className="card card-body rounded-3">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.completed ? "Completed" : "Incompleted"}</p>
      <button className="btn btn-danger rounded-3">
        <FcHighPriority />
        Delete
      </button>
    </div>
  )
}
