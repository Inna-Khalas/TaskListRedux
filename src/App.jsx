import AppBar from "./componets/AppBar/AppBar";
import Layout from "./componets/Layout/Layout";
import TaskForm from "./componets/TaskForm/TaskForm";
import TaskList from "./componets/TaskList/TaskList";

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
