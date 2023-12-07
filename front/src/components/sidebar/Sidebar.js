// import React from "react";
// import {
//   AiOutlineCalendar,
//   AiOutlineShoppingCart,
//   AiOutlineStock,
// } from "react-icons/ai";
// import { HiOutlineHome, HiDocumentText } from "react-icons/hi";
// import { FcDocument } from "react-icons/fc";
// import { RxAvatar } from "react-icons/rx";
// import { BsCalendar2Date } from "react-icons/bs";
// import { AiOutlineStar } from "react-icons/ai";
// import { BiTask } from "react-icons/bi";
// import { VscOrganization } from "react-icons/vsc";
// import { TfiFiles } from "react-icons/tfi";
// import { PiSlidersHorizontal } from "react-icons/pi";

// import { Link, NavLink, useLocation } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   setActiveMenu,
//   setShowSideBar,
// } from "../../redux/slices/Navbar/navbarSlices";

// import "./sidebar.css";

// const Sidebar = () => {
//   const location = useLocation();
//   const path = location.pathname;
//   const user = useSelector((state) => state?.profile);
//   const { _id } = user?.userAuth ? user?.userAuth : "";
//   // console.log(_id);

//   const links = [
//     // {
//     //   title: "Services",
//     //   icon: <AiOutlineStock />,
//     //   path: "services/line",
//     //   links: [
//     //     {
//     //       name: "line",
//     //       subPath: "services/line",
//     //     },
//     //     {
//     //       name: "area",
//     //       subPath: "services/area",
//     //     },

//     //     {
//     //       name: "bar",
//     //       subPath: "services/bar",
//     //     },
//     //     {
//     //       name: "pie",
//     //       subPath: "services/pie",
//     //     },
//     //     {
//     //       name: "financial",
//     //       subPath: "services/financial",
//     //     },
//     //     {
//     //       name: "color-mapping",
//     //       subPath: "services/color-mapping",
//     //     },
//     //     {
//     //       name: "pyramid",
//     //       subPath: "services/pyramid",
//     //     },
//     //     {
//     //       name: "stacked",
//     //       subPath: "services/stacked",
//     //     },
//     //   ],
//     // },

//     {
//       title: "Home",
//       icon: <HiOutlineHome />,
//       path: "home/dashboard",
//       links: [
//         {
//           name: "dashboard",
//           subPath: "home/dashboard",
//         },
//         {
//           name: "feed",
//           subPath: "home/feed",
//         },
//       ],
//     },

//     {
//       title: "Self Service",
//       icon: <RxAvatar />,
//       path: "self-service/profile",
//       links: [
//         {
//           name: "Profile",
//           subPath: `self-service/profile`,
//         },
//         {
//           name: "Team",
//           subPath: "self-service/team",
//         },
//         // {
//         //   name: "calender",
//         //   subPath: "self-service/calender",
//         // },
//         // {
//         //   name: "Leave Tracker",
//         //   subPath: "self-service/leave-tracker",
//         // },
//         // {
//         //   name: "Files",
//         //   subPath: "self-service/files",
//         // },
//         // {
//         //   name: "Deligation",
//         //   subPath: "self-service/deligation",
//         // },
//         {
//           name: "Assets",
//           subPath: "self-service/asset",
//         },
//         {
//           name: "Benefit",
//           subPath: "self-service/benefit",
//         },
//         {
//           name: "Exit Details",
//           subPath: "self-service/exitdetails",
//         },
//         // {
//         //   name: "Travel Expences",
//         //   subPath: "self-service/travel-expences",
//         // },
//         // {
//         //   name: "Travel Request",
//         //   subPath: "self-service/travel-request",
//         // },
//       ],
//     },
//     {
//       title: "Leave Tracker",
//       icon: <BsCalendar2Date />,
//       path: "leave-tracker/overview",
//       links: [
//         {
//           name: "Overview",
//           subPath: "leave-tracker/overview",
//         },
//         {
//           name: "Calender",
//           subPath: "leave-tracker/calender",
//         },

//         {
//           name: "Apply leave",
//           subPath: "leave-tracker/apply-leave",
//         },
//         {
//           name: "Leave Applications",
//           subPath: "leave-tracker/leave-applications",
//         },

//         {
//           name: "Holidays",
//           subPath: "leave-tracker/holidays",
//         },

//         {
//           name: "Add holiday",
//           subPath: "leave-tracker/add-holiday",
//         },
//       ],
//     },
//     // {
//     //   title: "Attendence",
//     //   icon: <BsCalendar2Date />,
//     //   path: "attendence/checkin-out",
//     //   links: [
//     //     {
//     //       name: "CheckIn / Out",
//     //       subPath: "attendence/checkin-out",
//     //     },
//     //     {
//     //       name: "Attendence",
//     //       subPath: "attendence/attendence",
//     //     },
//     //   ],
//     // },

//     {
//       title: "Documents",
//       path: "documents/adress-proof",
//       icon: <HiDocumentText />,
//       links: [
//         {
//           name: "Adress Proof",
//           subPath: "documents/adress-proof",
//         },
//         {
//           name: "Bonafide Letter",
//           subPath: "documents/bonafide-letter",
//         },
//       ],
//     },
//     {
//       title: "Organization",
//       path: "organization/profile",
//       icon: <VscOrganization />,
//       links: [
//         {
//           name: "Profile",
//           subPath: "organization/profile",
//         },
//         {
//           name: "Department",
//           subPath: "organization/department",
//         },
//         {
//           name: "Designation",
//           subPath: "organization/designation",
//         },
//         {
//           name: "Asset",
//           subPath: "organization/asset",
//         },

//         {
//           name: "Benefit",
//           subPath: "organization/benefit",
//         },
//         {
//           name: "Exit Details",
//           subPath: "organization/exitdetails",
//         },
//         {
//           name: "New Hires",
//           subPath: "organization/new-hires",
//         },
//         {
//           name: "All Profiles",
//           subPath: "organization/all-profiles",
//         },

//         {
//           name: "Organization Tree",
//           subPath: "organization/tree-chart",
//         },
//       ],
//     },
//     {
//       title: "Tasks",
//       path: "tasks/my-tasks",
//       icon: <BiTask />,
//       links: [
//         {
//           name: "My Tasks",
//           subPath: "tasks/my-tasks",
//         },
//         {
//           name: "All tasks",
//           subPath: "tasks/all-tasks",
//         },
//         {
//           name: "Form View",
//           subPath: "tasks/tasks-given",
//         },
//       ],
//     },
//     // {
//     //   title: "Files",
//     //   icon: <TfiFiles />,
//     //   path: "organization",
//     //   links: [
//     //     {
//     //       name: "line",
//     //     },
//     //     {
//     //       name: "area",
//     //     },

//     //     {
//     //       name: "bar",
//     //     },
//     //     {
//     //       name: "pie",
//     //     },
//     //     {
//     //       name: "financial",
//     //     },
//     //     {
//     //       name: "color-mapping",
//     //     },
//     //     {
//     //       name: "pyramid",
//     //     },
//     //     {
//     //       name: "stacked",
//     //     },
//     //   ],
//     // },
//   ];
//   // Now you have access to the path
//   // console.log("Current Path:", path);

//   const dispatch = useDispatch();
//   const state = useSelector((state) => state.activeMenu);
//   const titleRoute = state.menu;
//   const activeRightSidebar = state.showSideBar;
//   // console.log(location.pathname.split("/")[1]);

//   return (
//     <div className="bl_sidebar">
//       <div className="bl_sidebar-left">
//         <div>
//           {links.map((item) => {
//             return (
//               <>
//                 <NavLink
//                   to={`${item.path}`}
//                   key={item.title}
//                   onClick={() => dispatch(setActiveMenu(item.title))}
//                   className={({ isActive }) =>
//                     isActive ||
//                     location.pathname.startsWith(
//                       `/${item.title.toLowerCase().replace(/\s+/g, "-")}`
//                     )
//                       ? "activeLink"
//                       : "normalLink"
//                   }
//                 >
//                   <span className="bl_sidebar_link-icon">{item.icon} </span>
//                   <span className="bl_sidebar_link-item">{item.title}</span>
//                 </NavLink>
//               </>
//             );
//           })}
//         </div>
//         <div>
//           <div className="bl_sidebar_bottom_icons">
//             <NavLink
//               to={`/reports`}
//               key="Reports"
//               onClick={() => dispatch(setActiveMenu("Reports"))}
//               className={({ isActive }) =>
//                 isActive || location.pathname.startsWith("/reports")
//                   ? "activeLink"
//                   : "normalLink"
//               }
//             >
//               <span className="bl_sidebar_link-icon">
//                 {" "}
//                 <AiOutlineStock />
//               </span>
//               <span className="bl_sidebar_link-item">Reports</span>
//             </NavLink>

//             <button
//               className="bl_minimize-icon"
//               onClick={() => dispatch(setShowSideBar(!activeRightSidebar))}
//             >
//               <PiSlidersHorizontal className="bl_minimize-icon_i" />
//             </button>
//           </div>
//         </div>
//       </div>
//       {activeRightSidebar && (
//         <div className="bl_slidebar-right">
//           {links
//             .filter(
//               (item) =>
//                 item.title.toLowerCase().replace(/\s+/g, "-") ===
//                 location.pathname.split("/")[1]
//             )
//             .map((item) => (
//               <div key={item.title}>
//                 {item.links.map((link) => {
//                   // console.log(location.pathname);
//                   return (
//                     <NavLink
//                       to={`${link.subPath}`}
//                       key={link.subPath}
//                       className={({ isActive }) =>
//                         isActive ||
//                         location.pathname.startsWith(`/${link.subPath}`)
//                           ? "sub-activeLink"
//                           : "sub-normalLink"
//                       }
//                     >
//                       {link.name}
//                     </NavLink>
//                   );
//                 })}
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;
import React, { useEffect } from "react";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineStock,
} from "react-icons/ai";
import { HiOutlineHome, HiDocumentText } from "react-icons/hi";
import { FcDocument } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx";
import { BsCalendar2Date } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { VscOrganization } from "react-icons/vsc";
import { TfiFiles } from "react-icons/tfi";
import { PiSlidersHorizontal } from "react-icons/pi";

import { useDispatch, useSelector } from "react-redux";
import {
  setActiveMenu,
  setShowSideBar,
} from "../../redux/slices/Navbar/navbarSlices";

import "./sidebar.css";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import { loginStatus } from "../../redux/slices/profileSlice/profileSlice";

const SidebarLink = ({ to, onClick, icon, title, isActive }) => (
  <div
    onClick={onClick}
    className={isActive ? "sub-activeLink" : "sub-normalLink"}
  >
    {icon && <span className="bl_sidebar_link-icon">{icon}</span>}
    <span className="bl_sidebar_link-item">{title}</span>
  </div>
);

const RightSidebarLink = ({ to, onClick, icon, title, isActive }) => {
  console.log("Right Sidebar");
  return (
    <div
      onClick={onClick}
      className={isActive ? "sub-activeLink-right" : "sub-normalLinkright"}
    >
      {icon && <span className="bl_sidebar_link-icon-right">{icon}</span>}
      <span className="bl_sidebar_link-item-right">{title}</span>
    </div>
  );
};

const Sidebar = () => {
  const user = useSelector((state) => state?.profile);
  const { _id } = user?.userAuth ? user?.userAuth : "";

  const links = [
    {
      title: "Home",
      icon: <HiOutlineHome />,
      path: "home/dashboard",
      links: [
        {
          name: "dashboard",
          subPath: "home/dashboard",
        },
        {
          name: "feed",
          subPath: "home/feed",
        },
      ],
    },

    {
      title: "Self Service",
      icon: <RxAvatar />,
      path: "self-service/profile",
      links: [
        {
          name: "Profile",
          subPath: `self-service/profile`,
        },
        {
          name: "Team",
          subPath: "self-service/team",
        },

        {
          name: "Assets",
          subPath: "self-service/asset",
        },
        {
          name: "Benefit",
          subPath: "self-service/benefit",
        },
        {
          name: "Exit Details",
          subPath: "self-service/exitdetails",
        },
      ],
    },
    {
      title: "Leave Tracker",
      icon: <BsCalendar2Date />,
      path: "leave-tracker/overview",
      links: [
        {
          name: "Overview",
          subPath: "leave-tracker/overview",
        },
        {
          name: "Calender",
          subPath: "leave-tracker/calender",
        },

        {
          name: "Apply leave",
          subPath: "leave-tracker/apply-leave",
        },
        {
          name: "Leave Applications",
          subPath: "leave-tracker/leave-applications",
        },

        {
          name: "Holidays",
          subPath: "leave-tracker/holidays",
        },

        {
          name: "Add holiday",
          subPath: "leave-tracker/add-holiday",
        },
      ],
    },
    // {
    //   title: "Attendence",
    //   icon: <BsCalendar2Date />,
    //   path: "attendence/checkin-out",
    //   links: [
    //     {
    //       name: "CheckIn / Out",
    //       subPath: "attendence/checkin-out",
    //     },
    //     {
    //       name: "Attendence",
    //       subPath: "attendence/attendence",
    //     },
    //   ],
    // },

    {
      title: "Documents",
      path: "documents/adress-proof",
      icon: <HiDocumentText />,
      links: [
        {
          name: "Adress Proof",
          subPath: "documents/adress-proof",
        },
        {
          name: "Bonafide Letter",
          subPath: "documents/bonafide-letter",
        },
      ],
    },
    {
      title: "Organization",
      path: "organization/profile",
      icon: <VscOrganization />,
      links: [
        {
          name: "Profile",
          subPath: "organization/profile",
        },
        {
          name: "Department",
          subPath: "organization/department",
        },
        {
          name: "Designation",
          subPath: "organization/designation",
        },
        {
          name: "Asset",
          subPath: "organization/asset",
        },

        {
          name: "Benefit",
          subPath: "organization/benefit",
        },
        {
          name: "Team",
          subPath: "organization/team",
        },
        {
          name: "Exit Details",
          subPath: "organization/exitdetails",
        },
        {
          name: "New Hires",
          subPath: "organization/new-hires",
        },
        {
          name: "All Profiles",
          subPath: "organization/all-profiles",
        },

        {
          name: "Organization Tree",
          subPath: "organization/tree-chart",
        },
      ],
    },
    {
      title: "Tasks",
      path: "tasks/my-tasks",
      icon: <BiTask />,
      links: [
        {
          name: "My Tasks",
          subPath: "tasks/my-tasks",
        },
        {
          name: "Main tasks",
          subPath: "tasks/main-tasks",
        },
        {
          name: "Total tasks",
          subPath: "tasks/total-tasks",
        },
        {
          name: "Employees tasks",
          subPath: "tasks/tasks-given",
        },
      ],
    },
    // {
    //   title: "Files",
    //   icon: <TfiFiles />,
    //   path: "organization",
    //   links: [
    //     {
    //       name: "line",
    //     },
    //     {
    //       name: "area",
    //     },

    //     {
    //       name: "bar",
    //     },
    //     {
    //       name: "pie",
    //     },
    //     {
    //       name: "financial",
    //     },
    //     {
    //       name: "color-mapping",
    //     },
    //     {
    //       name: "pyramid",
    //     },
    //     {
    //       name: "stacked",
    //     },
    //   ],
    // },
  ];
  // Now you have access to the path
  // console.log("Current Path:", path);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeMenu);
  const titleRoute = state.menu;
  const activeRightSidebar = state.showSideBar;

  const location = window.location.pathname;

  const navigate = useNavigate();

  const { userAuth, isLoggedIn } = user;
  console.log(userAuth, isLoggedIn, "isLoggedIn");

  useEffect(() => {
    dispatch(loginStatus());
  }, [dispatch]);
  // loginStatus();
  if (!userAuth) {
    localStorage.removeItem("userInfo");
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="bl_sidebar">
      <div className="bl_sidebar-left">
        <div>
          {links.map((item) => {
            // console.log(item);
            return (
              <SidebarLink
                key={item.title}
                to={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => {
                  dispatch(setActiveMenu(item.title));
                  navigate(`/${item.path.toLowerCase().replace(/\s+/g, "-")}`);
                }}
                icon={item.icon}
                title={item.title}
                isActive={location.startsWith(
                  `/${item.title.toLowerCase().replace(/\s+/g, "-")}`
                )}
              />
            );
          })}
        </div>
        <div>
          <div className="bl_sidebar_bottom_icons">
            {/* ... your other links */}
          </div>
        </div>
      </div>
      {activeRightSidebar && (
        <div className="bl_slidebar-right">
          {links
            .filter(
              (item) =>
                item.title.toLowerCase().replace(/\s+/g, "-") ===
                location.split("/")[1]
            )
            .map((item) => (
              <div key={item.title}>
                {item.links.map((link) => (
                  <RightSidebarLink
                    key={link.subPath}
                    // to={`/${link.subPath}`}
                    onClick={() => navigate(`/${link.subPath}`)}
                    isActive={location.startsWith(`/${link.subPath}`)}
                    title={link.name}
                  />
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
