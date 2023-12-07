const requiredRoles = ["Employee", "Manager"];
const totalRequiredRoles = ["Pro Admin", "Admin", "Hr"];
const adminHrRoles = ["Admin", "Hr"];
const proAdminAccess = ["Pro Admin"];
export const restrictedAccessFun = (userRole) => {
  return requiredRoles.includes(userRole);
};

export const normalAdminAccessGivenFun = (userRole) => {
  // console.log(userRole, "userRole restricted access");
  return totalRequiredRoles.includes(userRole);
};

export const proAdminAccessGivenFun = (userRole) => {
  return proAdminAccess.includes(userRole);
};

export const adminHrRolesAccessGivenFun = (userRole) => {
  return adminHrRoles.includes(userRole);
};
