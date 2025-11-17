import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#EEF7FF] min-h-screen flex ">
      <div className="w-[23%]">
        <Sidebar />
      </div>
      <div className="w-[77%]">
        <Topbar />
        {children}
      </div>
    </main>
  );
}
