import { useSelector } from "react-redux";
import Task from "../Task/Task";

const getVisibleTask = (tasks, statusFilter) => {
  switch (statusFilter) {
    case "active":
      return tasks.filter((task) => !task.completed);
    case "completed":
      return tasks.filter((task) => task.completed);

    default:
      return tasks;
  }
};

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const statusFilter = useSelector((state) => state.filters.status);
  const visibleTask = getVisibleTask(tasks, statusFilter);
  console.log(visibleTask);

  return (
    <ul>
      {visibleTask.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
