"use client";

import { useRouter } from "next/navigation";

export default function MyButton() {
  const router = useRouter();

  const handleClick = () => {
    router.refresh();
    console.log("Refresh")
  };

  return <button onClick={handleClick}>Refresh</button>;
}
