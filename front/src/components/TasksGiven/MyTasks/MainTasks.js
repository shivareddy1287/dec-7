import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
// import "./TasksGiven.css";
import { allFetchTasksGivenAction } from "../../../redux/slices/TasksGiven/TasksGivenSlice";
import { dateOnlyFormate } from "../../../utils/DateFun/DateModify";

const MainTasks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allFetchTasksGivenAction());
  }, [dispatch]);

  const user = useSelector((state) => state?.profile);
  const { _id } = user?.userAuth;

  const tasks = useSelector((state) => state?.tasks);
  const { TasksGivenList } = tasks;
  const filteredTasksGivenList = TasksGivenList?.filter(
    (eachId) =>
      eachId?.taskAssignedUser?._id !== eachId?.taskGivenUser?._id &&
      _id === eachId?.taskAssignedUser?._id
  );
  console.log(filteredTasksGivenList, "tasksGivenList");

  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        <div className="cs_content_img_div_profile">
          <div className="cs_asset_bg_div">
            {" "}
            <div className="cs_aaset_add_div">
              <h1 className="cs_asset_head_main">Tasks</h1>
            </div>
            <div className="cs_asset_table">
              {" "}
              <table>
                <thead>
                  <tr>
                    <th>View</th>
                    <th>Status</th>
                    <th>Task Name</th>
                    <th>Task Description</th>
                    <th>Start Date</th>
                    <th>Due Date</th>
                    <th>Importance</th>
                    <th>Task From</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTasksGivenList?.map((tasksEach) => (
                    <tr key={tasksEach?.id}>
                      <td>
                        <Link
                          className="cs_div_edit_icons_all"
                          to={`/tasks/tasks-given/view/${tasksEach?.id}`}
                        >
                          <svg
                            className="cs_all_edit_icons_project"
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                          >
                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                          </svg>
                        </Link>
                      </td>
                      <td>{tasksEach?.Status}</td>
                      <td>{tasksEach?.taskName}</td>
                      <td>{tasksEach?.taskDescription}</td>
                      <td>{dateOnlyFormate(tasksEach?.startDate)}</td>
                      <td>{dateOnlyFormate(tasksEach?.dueDate)}</td>
                      <td>{tasksEach?.Importance}</td>
                      <td>
                        {`${tasksEach?.taskGivenUser?.basicInformation?.firstName} ${tasksEach?.taskGivenUser?.basicInformation?.lastName} ${tasksEach?.taskGivenUser?.basicInformation?.employerId}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTasks;
