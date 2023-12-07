import React, { useEffect } from "react";

import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  allFetchTasksGivenAction,
  deleteTasksGivenAction,
  fetchSingleTasksGivenAction,
} from "../../../redux/slices/TasksGiven/TasksGivenSlice";

const MyTaskDelete = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(allFetchTasksGivenAction());
    dispatch(fetchSingleTasksGivenAction(id));
  }, [dispatch, id]);
  const user = useSelector((state) => state?.profile);
  const { _id } = user?.userAuth;

  const tasks = useSelector((state) => state?.tasks);
  const { singleTasksGiven, isDeleted, TasksGivenList } = tasks;

  const {
    taskGivenUser,
    taskName,
    taskDescription,
    startDate,
    dueDate,
    Importance,
    Status,
    taskAssignedUser,
  } = singleTasksGiven ? singleTasksGiven : "";

  // if (isDeleted) return <Navigate to={`/tasks/my-tasks`} />;

  const filteredTasksGivenList = TasksGivenList?.filter(
    (eachId) =>
      eachId?.taskAssignedUser?._id === eachId?.taskGivenUser?._id &&
      _id === eachId?.taskAssignedUser?._id
  );

  const findTheTasksTrue = filteredTasksGivenList?.find(
    (each) => each?._id === id
  );
  console.log(findTheTasksTrue, "findTheTasksTrue");

  console.log(filteredTasksGivenList, "update");
  if (filteredTasksGivenList) {
    if (isDeleted || !findTheTasksTrue) {
      navigate("/tasks/my-tasks");
    }
  }
  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        <div className="cs_edit_div">
          <div>
            <Link to={`/tasks/my-tasks`} className="cs_edit_employee_head_div">
              <div>
                <svg
                  className="cs_font_icons"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
              </div>
              <div>
                <h2 className="cs_edit_employee_head">Delete Task</h2>
              </div>
            </Link>
          </div>
          <div className="cs_edit_form_div">
            <div>
              <h2 className="cs_edit_side_head">Task Details</h2>
              <div>
                <div className="cs_edit_left_right_div">
                  <div className="cs_edit_left_input_right_input">
                    <div className="cs_edit_input_div">
                      <h2 className="cs_edit_left_input"> Task From :</h2>
                      <h2 className="cs_view_right_input">
                        {taskGivenUser?.basicInformation?.firstName}{" "}
                        {taskGivenUser?.basicInformation?.lastName}{" "}
                        {taskGivenUser?.basicInformation?.employerId}
                      </h2>
                    </div>
                    <div className="cs_edit_input_div">
                      <h2 className="cs_edit_left_input"> Task Assign to :</h2>
                      <h2 className="cs_view_right_input">
                        {taskAssignedUser?.basicInformation?.firstName}{" "}
                        {taskAssignedUser?.basicInformation?.lastName}{" "}
                        {taskAssignedUser?.basicInformation?.employerId}
                      </h2>
                    </div>
                    <div className="cs_edit_input_div">
                      <h2 className="cs_edit_left_input">Task Name :</h2>
                      <h2 className="cs_view_right_input">{taskName}</h2>
                    </div>
                    <div className="cs_edit_input_div">
                      <h2 className="cs_edit_left_input">Description :</h2>
                      <h2 className="cs_view_right_input">{taskDescription}</h2>
                    </div>
                    <div className="cs_edit_input_div">
                      <h2 className="cs_edit_left_input">Start Date :</h2>
                      <h2 className="cs_view_right_input">{startDate}</h2>
                    </div>
                    <div className="cs_edit_input_div">
                      <h2 className="cs_edit_left_input">Due Date :</h2>
                      <h2 className="cs_view_right_input">{dueDate}</h2>
                    </div>
                    <div className="cs_edit_input_div">
                      <h2 className="cs_edit_left_input">Importance :</h2>
                      <h2 className="cs_view_right_input">{Importance}</h2>
                    </div>
                    <div className="cs_edit_input_div">
                      <h2 className="cs_edit_left_input">Status :</h2>
                      <h2 className="cs_view_right_input">{Status}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cs_edit_submit_cancel_div">
            <div>
              <button
                className="cs_delete_button_delete"
                onClick={() => dispatch(deleteTasksGivenAction(id))}
              >
                Confirm Delete
              </button>
            </div>
            <div>
              <Link to={`/tasks/my-tasks`}>
                <button className="cs_view_button_close">Close</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTaskDelete;
