"use client";

import { useSession } from "next-auth/react";

function UserPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return { redirect: "/api/auth/signin?callbackUrl=/client" };
    },
  });
  return (
    <div>
      {session?.user?.name} : {session?.expires}
    </div>
  );
}

export default UserPage;
