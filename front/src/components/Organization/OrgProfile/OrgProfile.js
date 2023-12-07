import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchAllProfileAction,
  fetchDetailsProfileAction,
} from "../../../redux/slices/profileSlice/profileSlice";
import {
  adminHrRolesAccessGivenFun,
  normalAdminAccessGivenFun,
  proAdminAccessGivenFun,
  restrictedAccessFun,
} from "../../../utils/restrictedAccess";
import {
  dateOnlyFormate,
  dateTimeFormate,
} from "../../../utils/DateFun/DateModify";

const OrgProfile = () => {
  const [searchInputVal, setSearchInputVal] = useState("");
  const dispatch = useDispatch();
  const profile = useSelector((state) => state?.profile);

  const { profilesList, loading, appErr, serverErr } = profile;
  const [profilesListSearch, setProfilesListSearch] = useState(
    profilesList ? profilesList : []
  );

  console.log(profilesListSearch, "profilesList");
  const getAccessData = profilesList?.find(
    (item) => item?._id === profile?.userAuth?._id
  );
  console.log(getAccessData?.Access, "getaccess");
  useEffect(() => {
    dispatch(fetchAllProfileAction());
  }, [dispatch]);

  const searchHandleChangeFun = (e) => {
    const newSearchInputVal = e.target.value;
    console.log(newSearchInputVal, "newSearchInputVal");
    setSearchInputVal(newSearchInputVal);

    const filteredProfiles = profilesList.filter(
      (profile) =>
        profile?.email
          ?.toLowerCase()
          .includes(newSearchInputVal?.toLowerCase()) ||
        profile?.basicInformation?.firstName
          ?.toLowerCase()
          .includes(newSearchInputVal?.toLowerCase()) ||
        profile?.basicInformation?.lastName
          ?.toLowerCase()
          .includes(newSearchInputVal?.toLowerCase())
    );
    setProfilesListSearch(filteredProfiles);
  };

  useEffect(() => {
    // Update profilesListSearch state when profilesList prop changes
    setProfilesListSearch(profilesList || []);
  }, [profilesList]);

  return (
    <div>
      <div className="cs_div_profile">
        {loading ? (
          <h1>Please Wait Loading...</h1>
        ) : (
          <div className="cs_content_img_div_profile">
            {proAdminAccessGivenFun(getAccessData?.Access) && (
              <div className="cs_asset_bg_div">
                {" "}
                {serverErr || appErr ? (
                  <p>
                    {serverErr} {appErr}
                  </p>
                ) : null}
                <div className="cs_aaset_add_div">
                  <h1 className="cs_asset_head_main">Employee View</h1>
                  <label
                    htmlFor="searchId"
                    className="cs_search_input_profile_div"
                  >
                    <svg
                      className="cs_search_input_icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                    <input
                      id="searchId"
                      className="cs_search_input_profile"
                      type="search"
                      placeholder="Search by Name or Email"
                      value={searchInputVal}
                      onChange={searchHandleChangeFun}
                    />
                  </label>
                  <Link
                    className="cs_asset_add_asset_button"
                    to={`/organization/profile/create`}
                  >
                    <span className="cs_asset_add_symbol">+</span> Add Employee
                  </Link>
                </div>
                <div className="cs_asset_table">
                  <table>
                    <thead>
                      <tr>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>View</th>
                        <th>Photo</th>
                        <th>Employee ID</th>
                        <th>Company Email</th>
                        <th>Access</th>
                        <th>ProjectTeam</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Manager</th>
                        <th>Email address</th>
                        <th>Profile Edit Access</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>App Role</th>
                        <th>Employment Type</th>
                        <th>Employee Status</th>
                        <th>Source of Hire</th>
                        <th>Date of Joining</th>
                        <th>Current Experience</th>
                        <th>Total Experience</th>

                        <th>Date of Birth</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Marital Status</th>
                        <th>About Me</th>

                        <th>Work Phone Number</th>
                        {/* <th>Extension</th> */}
                        {/* <th>Seating Location</th> */}
                        {/* <th>Tags</th> */}
                        <th>Personal Mobile Number</th>

                        {/* <th>Date of Exit</th> */}
                        {/* <th>Onboarding Status</th> */}
                        <th>Present Address</th>
                        <th>Permanent Address</th>
                        <th>Personal Email Address</th>

                        <th>Aadhaar</th>
                        <th>PAN</th>
                        <th>UAN</th>
                        <th>Added By</th>
                        <th>Added Time</th>
                        <th>Modified By</th>
                        <th>Modified Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {profilesListSearch?.map((profileEach) => (
                        <tr key={profileEach?.id}>
                          <td>
                            <Link
                              className="cs_div_edit_icons_all"
                              to={`/organization/profile/update/${profileEach?.id}`}
                            >
                              <svg
                                className="cs_all_edit_icons_project"
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                              >
                                <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                              </svg>
                            </Link>
                          </td>
                          <td>
                            <Link
                              className="cs_div_edit_icons_all"
                              to={`/organization/profile/delete/${profileEach?.id}`}
                            >
                              <svg
                                className="cs_all_edit_icons_project"
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 448 512"
                              >
                                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                              </svg>
                            </Link>
                          </td>
                          <td>
                            <Link
                              className="cs_div_edit_icons_all"
                              to={`/organization/profile/view/${profileEach?.id}`}
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
                          <td>photo</td>
                          <td>{profileEach?.basicInformation?.employerId}</td>
                          <td>{profileEach?.email}</td>
                          <td>{profileEach?.Access}</td>
                          <td>{profileEach?.ProjectTeam}</td>
                          <td>{profileEach?.basicInformation?.firstName}</td>
                          <td>{profileEach?.basicInformation?.lastName}</td>
                          <td>
                            {`${profileEach?.managerDataId?.basicInformation?.firstName}
                           ${profileEach?.managerDataId?.basicInformation?.lastName}
                           ${profileEach?.managerDataId?.basicInformation?.employerId}`}
                          </td>

                          <td>{profileEach?.basicInformation?.email}</td>
                          <td>{profileEach?.ProfileEditAccess}</td>
                          <td>{profileEach?.workInformation?.Department}</td>
                          <td>{profileEach?.workInformation?.designation}</td>
                          <td>{profileEach?.workInformation?.appRole}</td>
                          <td>
                            {profileEach?.workInformation?.employmentType}
                          </td>
                          <td>
                            {profileEach?.workInformation?.employeeStatus}
                          </td>
                          <td>{profileEach?.workInformation?.sourceOfHire}</td>
                          <td>
                            {dateOnlyFormate(
                              profileEach?.workInformation?.dateOfJoining
                            )}
                          </td>
                          <td>
                            {profileEach?.workInformation?.currentExperience}
                          </td>
                          <td>
                            {profileEach?.workInformation?.totalExperience}
                          </td>
                          <td>
                            {dateOnlyFormate(
                              profileEach?.personalDetails?.dateOfBirth
                            )}
                          </td>
                          <td>{profileEach?.personalDetails?.age}</td>
                          <td>{profileEach?.personalDetails?.gender}</td>
                          <td>{profileEach?.personalDetails?.maritalStatus}</td>
                          <td>{profileEach?.personalDetails?.aboutMe}</td>
                          <td>{profileEach?.contactDetails?.workNumber}</td>
                          <td>{profileEach?.contactDetails?.personalNumber}</td>
                          <td>{profileEach?.contactDetails?.presentAddress}</td>
                          <td>
                            {profileEach?.contactDetails?.permanentAddress}
                          </td>
                          <td>{profileEach?.contactDetails?.emailAddress}</td>
                          <td>{profileEach?.identityInfo?.uan}</td>
                          <td>{profileEach?.identityInfo?.pan}</td>
                          <td>{profileEach?.identityInfo?.adhaar}</td>

                          <td>
                            {`${profileEach?.addedBy?.basicInformation?.firstName} ${profileEach?.addedBy?.basicInformation?.lastName} ${profileEach?.addedBy?.basicInformation?.employerId}`}
                          </td>
                          <td>{dateTimeFormate(profileEach?.createdAt)}</td>
                          <td>
                            {`${profileEach?.ModifiedBy?.basicInformation?.firstName} ${profileEach?.ModifiedBy?.basicInformation?.lastName} ${profileEach?.ModifiedBy?.basicInformation?.employerId}`}
                          </td>
                          <td>{dateTimeFormate(profileEach?.updatedAt)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {adminHrRolesAccessGivenFun(getAccessData?.Access) && (
              <div className="cs_asset_bg_div">
                {" "}
                {serverErr || appErr ? (
                  <p>
                    {serverErr} {appErr}
                  </p>
                ) : null}
                <div className="cs_aaset_add_div">
                  <h1 className="cs_asset_head_main">Employee View</h1>
                  <label
                    htmlFor="searchId"
                    className="cs_search_input_profile_div"
                  >
                    <svg
                      className="cs_search_input_icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                    <input
                      id="searchId"
                      className="cs_search_input_profile"
                      type="search"
                      placeholder="Search by Name or Email"
                      value={searchInputVal}
                      onChange={searchHandleChangeFun}
                    />
                  </label>
                  <div className=""></div>
                </div>
                <div className="cs_asset_table">
                  <table>
                    <thead>
                      <tr>
                        <th>Edit</th>
                        <th>View</th>
                        <th>Photo</th>
                        <th>Employee ID</th>
                        <th>Company Email</th>
                        <th>Access</th>
                        <th>ProjectTeam</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Manager</th>
                        <th>Email address</th>
                        <th>Profile Edit Access</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>App Role</th>
                        <th>Employment Type</th>
                        <th>Employee Status</th>
                        <th>Source of Hire</th>
                        <th>Date of Joining</th>
                        <th>Current Experience</th>
                        <th>Total Experience</th>

                        <th>Date of Birth</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Marital Status</th>
                        <th>About Me</th>

                        <th>Work Phone Number</th>
                        {/* <th>Extension</th> */}
                        {/* <th>Seating Location</th> */}
                        {/* <th>Tags</th> */}
                        <th>Personal Mobile Number</th>

                        {/* <th>Date of Exit</th> */}
                        {/* <th>Onboarding Status</th> */}
                        <th>Present Address</th>
                        <th>Permanent Address</th>
                        <th>Personal Email Address</th>

                        <th>Aadhaar</th>
                        <th>PAN</th>
                        <th>UAN</th>
                        <th>Added By</th>
                        <th>Added Time</th>
                        <th>Modified By</th>
                        <th>Modified Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {profilesListSearch?.map((profileEach) => (
                        <tr key={profileEach?.id}>
                          <td>
                            <Link
                              className="cs_div_edit_icons_all"
                              to={`/organization/profile/update/${profileEach?.id}`}
                            >
                              <svg
                                className="cs_all_edit_icons_project"
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                              >
                                <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                              </svg>
                            </Link>
                          </td>

                          <td>
                            <Link
                              className="cs_div_edit_icons_all"
                              to={`/organization/profile/view/${profileEach?.id}`}
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
                          <td>photo</td>
                          <td>{profileEach?.basicInformation?.employerId}</td>
                          <td>{profileEach?.email}</td>
                          <td>{profileEach?.Access}</td>
                          <td>{profileEach?.ProjectTeam}</td>
                          <td>{profileEach?.basicInformation?.firstName}</td>
                          <td>{profileEach?.basicInformation?.lastName}</td>
                          <td>
                            {`${profileEach?.managerDataId?.basicInformation?.firstName}
                           ${profileEach?.managerDataId?.basicInformation?.lastName}
                           ${profileEach?.managerDataId?.basicInformation?.employerId}`}
                          </td>
                          <td>{profileEach?.basicInformation?.email}</td>
                          <td>{profileEach?.ProfileEditAccess}</td>
                          <td>{profileEach?.workInformation?.Department}</td>
                          <td>{profileEach?.workInformation?.designation}</td>
                          <td>{profileEach?.workInformation?.appRole}</td>
                          <td>
                            {profileEach?.workInformation?.employmentType}
                          </td>
                          <td>
                            {profileEach?.workInformation?.employeeStatus}
                          </td>
                          <td>{profileEach?.workInformation?.sourceOfHire}</td>
                          <td>
                            {dateOnlyFormate(
                              profileEach?.workInformation?.dateOfJoining
                            )}
                          </td>
                          <td>
                            {profileEach?.workInformation?.currentExperience}
                          </td>
                          <td>
                            {profileEach?.workInformation?.totalExperience}
                          </td>
                          <td>
                            {dateOnlyFormate(
                              profileEach?.personalDetails?.dateOfBirth
                            )}
                          </td>
                          <td>{profileEach?.personalDetails?.age}</td>
                          <td>{profileEach?.personalDetails?.gender}</td>
                          <td>{profileEach?.personalDetails?.maritalStatus}</td>
                          <td>{profileEach?.personalDetails?.aboutMe}</td>
                          <td>{profileEach?.contactDetails?.workNumber}</td>
                          <td>{profileEach?.contactDetails?.personalNumber}</td>
                          <td>{profileEach?.contactDetails?.presentAddress}</td>
                          <td>
                            {profileEach?.contactDetails?.permanentAddress}
                          </td>
                          <td>{profileEach?.contactDetails?.emailAddress}</td>
                          <td>{profileEach?.identityInfo?.uan}</td>
                          <td>{profileEach?.identityInfo?.pan}</td>
                          <td>{profileEach?.identityInfo?.adhaar}</td>

                          <td>
                            {`${profileEach?.addedBy?.basicInformation?.firstName} ${profileEach?.addedBy?.basicInformation?.lastName} ${profileEach?.addedBy?.basicInformation?.employerId}`}
                          </td>
                          <td>{dateTimeFormate(profileEach?.createdAt)}</td>
                          <td>
                            {`${profileEach?.ModifiedBy?.basicInformation?.firstName} ${profileEach?.ModifiedBy?.basicInformation?.lastName} ${profileEach?.ModifiedBy?.basicInformation?.employerId}`}
                          </td>
                          <td>{dateTimeFormate(profileEach?.updatedAt)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {restrictedAccessFun(getAccessData?.Access) && (
              <div>
                <div className="cs_asset_bg_div">
                  {" "}
                  {serverErr || appErr ? (
                    <p>
                      {serverErr} {appErr}
                    </p>
                  ) : null}
                  <div className="cs_aaset_add_div">
                    <h1 className="cs_asset_head_main">Employee View</h1>
                  </div>
                  <div className="cs_asset_table">
                    <table>
                      <thead>
                        <tr>
                          <th>View</th>
                          <th>Photo</th>
                          <th>Employee ID</th>
                          <th>Company Email</th>
                          <th>Access</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Manager</th>
                          <th>Email address</th>
                          <th>Department</th>
                          <th>Designation</th>
                          <th>App Role</th>
                          <th>Employment Type</th>
                          <th>Employee Status</th>
                          <th>Source of Hire</th>
                          <th>Date of Joining</th>
                          <th>Current Experience</th>
                          <th>Total Experience</th>

                          <th>Date of Birth</th>
                          <th>Age</th>
                          <th>Gender</th>
                          <th>Marital Status</th>
                          <th>About Me</th>

                          <th>Work Phone Number</th>
                          {/* <th>Extension</th> */}
                          {/* <th>Seating Location</th> */}
                          {/* <th>Tags</th> */}
                          <th>Personal Mobile Number</th>

                          {/* <th>Date of Exit</th> */}
                          {/* <th>Onboarding Status</th> */}
                          <th>Present Address</th>
                          <th>Permanent Address</th>
                          <th>Personal Email Address</th>

                          <th>Aadhaar</th>
                          <th>PAN</th>
                          <th>UAN</th>
                          <th>Added By</th>
                          <th>Added Time</th>
                          <th>Modified By</th>
                          <th>Modified Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link
                              className="cs_div_edit_icons_all"
                              to={`/organization/profile/view/${profile?.userAuth?.id}`}
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
                          <td>photo</td>
                          <td>
                            {profile?.userAuth?.basicInformation?.employerId}
                          </td>
                          <td>{profile?.userAuth?.email}</td>
                          <td>{profile?.userAuth?.Access}</td>
                          <td>
                            {profile?.userAuth?.basicInformation?.firstName}
                          </td>
                          <td>
                            {profile?.userAuth?.basicInformation?.lastName}
                          </td>
                          <td>
                            {`${profile?.userAuth?.managerDataId?.basicInformation?.firstName}
                           ${profile?.userAuth?.managerDataId?.basicInformation?.lastName}
                           ${profile?.userAuth?.managerDataId?.basicInformation?.employerId}`}
                          </td>
                          <td>{profile?.userAuth?.basicInformation?.email}</td>
                          <td>
                            {profile?.userAuth?.workInformation?.Department}
                          </td>
                          <td>
                            {profile?.userAuth?.workInformation?.designation}
                          </td>
                          <td>{profile?.userAuth?.workInformation?.appRole}</td>
                          <td>
                            {profile?.userAuth?.workInformation?.employmentType}
                          </td>
                          <td>
                            {profile?.userAuth?.workInformation?.employeeStatus}
                          </td>
                          <td>
                            {profile?.userAuth?.workInformation?.sourceOfHire}
                          </td>
                          <td>
                            {dateOnlyFormate(
                              profile?.userAuth?.workInformation?.dateOfJoining
                            )}
                          </td>
                          <td>
                            {
                              profile?.userAuth?.workInformation
                                ?.currentExperience
                            }
                          </td>
                          <td>
                            {
                              profile?.userAuth?.workInformation
                                ?.totalExperience
                            }
                          </td>
                          <td>
                            {dateOnlyFormate(
                              profile?.userAuth?.personalDetails?.dateOfBirth
                            )}
                          </td>
                          <td>{profile?.userAuth?.personalDetails?.age}</td>
                          <td>{profile?.userAuth?.personalDetails?.gender}</td>
                          <td>
                            {profile?.userAuth?.personalDetails?.maritalStatus}
                          </td>
                          <td>{profile?.userAuth?.personalDetails?.aboutMe}</td>
                          <td>
                            {profile?.userAuth?.contactDetails?.workNumber}
                          </td>
                          <td>
                            {profile?.userAuth?.contactDetails?.personalNumber}
                          </td>
                          <td>
                            {profile?.userAuth?.contactDetails?.presentAddress}
                          </td>
                          <td>
                            {
                              profile?.userAuth?.contactDetails
                                ?.permanentAddress
                            }
                          </td>
                          <td>
                            {profile?.userAuth?.contactDetails?.emailAddress}
                          </td>
                          <td>{profile?.userAuth?.identityInfo?.uan}</td>
                          <td>{profile?.userAuth?.identityInfo?.pan}</td>
                          <td>{profile?.userAuth?.identityInfo?.adhaar}</td>

                          <td>
                            {`${profile?.userAuth?.addedBy?.basicInformation?.firstName} ${profile?.userAuth?.addedBy?.basicInformation?.lastName} ${profile?.userAuth?.addedBy?.basicInformation?.employerId}`}
                          </td>
                          <td>
                            {dateTimeFormate(profile?.userAuth?.createdAt)}
                          </td>
                          <td>
                            {`${profile?.userAuth?.ModifiedBy?.basicInformation?.firstName} ${profile?.userAuth?.ModifiedBy?.basicInformation?.lastName} ${profile?.userAuth?.ModifiedBy?.basicInformation?.employerId}`}
                          </td>
                          <td>
                            {dateTimeFormate(profile?.userAuth?.updatedAt)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrgProfile;
