import AccountInformation from "@/components/profile/AccountInfomation";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getCookie } from "@/services/auth/tokenHandlers";

export default async function Profile() {
  const user = await getUserInfo(); // server-side fetch
   const token = await getCookie("accessToken");
  return (
  <div>
     <AccountInformation token={token} user={user} />
  </div>
  );
}
