import { FcOk } from "react-icons/fc";

export const TaskForm = () => {
  return (
    <div className="card card-body bg-dark text-white p-4 rounded-3">
      <h2>Add Task</h2>
      <br />
      <form action="">
        <input type="text" placeholder="Write a title" name="title" className="form-control mb-3 rounded-3" />
        <textarea name="description" cols={52} rows={6} className="form-control mb-3 rounded-3" placeholder="Add description"></textarea>
        <button className="btn btn-primary rounded-3">
          <FcOk />
          Save
        </button>
      </form>
    </div>
  )
}
