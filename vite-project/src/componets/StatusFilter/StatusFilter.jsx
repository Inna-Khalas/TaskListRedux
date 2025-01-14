import { setStatusFilter } from "../../redux/filterSlice";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";

const StatusFilter = () => {
  // const filter = useSelector((state) => state.filters.status);
  const dispatch = useDispatch();

  const handleStatusFilter = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div>
      <Button onClick={() => handleStatusFilter("all")}>All</Button>
      <Button onClick={() => handleStatusFilter("active")}>Active</Button>
      <Button onClick={() => handleStatusFilter("completed")}>Completed</Button>
    </div>
  );
};

export default StatusFilter;
