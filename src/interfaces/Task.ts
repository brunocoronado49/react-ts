export interface Task {
  id?: number,
  title: string,
  description: string,
  completed?: boolean
}

export interface AppInterface {
  appTitle?: string
}

export interface TasksList {
  tasks: Task[]
}