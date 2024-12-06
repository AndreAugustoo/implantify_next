import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Algo deu errado!"
      backButtonLabel="Voltar para login"
      backButtonHref="/auth/login"
    >
      <div className="flex w-full items-center justify-center">
        <ExclamationTriangleIcon className="h-6 w-6 text-destructive" />
      </div>
    </CardWrapper>
  );
};
