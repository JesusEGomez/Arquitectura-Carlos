const adminMail = import.meta.env.VITE_ADMIN_MAIL;
export const adminVerificator = (mail: string) => {
  console.log("user", mail, "admin", adminMail);
  if (adminMail === mail) return true;
  else return false;
};
