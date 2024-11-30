"use client";

import { UserInfo } from "@/components/auth/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = async () => {
    const user = await useCurrentUser();

    return (
        <UserInfo 
            label="Client Component"
            user={user}
        />
    );
};

export default ClientPage;