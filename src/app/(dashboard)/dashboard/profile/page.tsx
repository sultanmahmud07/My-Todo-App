import AccountInformation from "@/components/profile/AccountInfomation";
import { getUserInfo } from "@/services/auth/getUserInfo";

export default async function Profile() {
  const user = await getUserInfo(); // server-side fetch
  return (
  <div>
     <AccountInformation user={user} />
  </div>
  );
}
