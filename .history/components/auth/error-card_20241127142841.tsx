import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import {
    Card,
    CardFooter,
    CardHeader
} from "@/components/ui/card";

export const ErrorCard = () => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label="Oops! Algo deu errado!" />
            </CardHeader>
            <CardFooter>
                <BackButton 
                    label="Voltar para login"
                    href="/auth/login"
                />
            </CardFooter>
        </Card>
    )
}