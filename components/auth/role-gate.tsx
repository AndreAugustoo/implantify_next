"use client";

import { UserRole } from "@prisma/client";

import { useCurrentRole } from "@/hooks/user-current-role";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="Você não tem permissão para acessar essa página!" />
    );
  }

  return <>{children}</>;
};
