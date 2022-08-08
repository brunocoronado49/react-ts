import { ChangeEvent, FormEvent, useState } from 'react'
import { FcOk } from "react-icons/fc";
import { Task } from '../interfaces/Task';

interface Props {
  addTask: (task: Task) => void
}

const initialState = {
  title: "",
  description: ""
}

export const TaskForm = ({ addTask }: Props) => {
  const [task, setTask] = useState(initialState)

  type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

  const onChange = (evt: HandleInputChange) => {
    setTask({ ...task, [evt.target.name]: evt.target.value })
  }

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    addTask(task)
    setTask(initialState)
  }

  return (
    <div className="card card-body bg-dark text-white p-4 rounded-3">
      <h2>Add Task</h2>
      <br />
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write a title" name="title" className="form-control mb-3 rounded-3" onChange={onChange} value={task.title} />
        <textarea name="description" cols={52} rows={6} className="form-control mb-3 rounded-3" placeholder="Add description" onChange={onChange} value={task.description}></textarea>
        <button className="btn btn-primary rounded-3">
          <FcOk />
          Save
        </button>
      </form>
    </div>
  )
}
