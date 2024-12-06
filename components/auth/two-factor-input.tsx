import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
} from "react";

interface TwoFactorInputProps {
  isPending: boolean;
}

const TwoFactorInput: React.FC<TwoFactorInputProps> = ({ isPending }) => {
  const [codes, setCodes] = useState<string[]>(Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    if (value.length > 1) return; // Apenas um caractere permitido
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    // Move o foco para o próximo campo se não for o último
    if (value && index < codes.length - 1) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    // Voltar para o campo anterior com Backspace
    if (event.key === "Backspace" && !codes[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault(); // Evita o comportamento padrão de colagem
    const pastedData = event.clipboardData.getData("text");
    if (!/^\d{6}$/.test(pastedData)) return; // Verifica se o valor colado é um número de 6 dígitos

    const newCodes = pastedData.split("").slice(0, 6); // Divide os números colados
    setCodes(newCodes);

    // Foca no último campo preenchido
    const lastInput = document.getElementById(`code-${newCodes.length - 1}`);
    lastInput?.focus();
  };

  return (
    <div className="flex space-x-2">
      {codes.map((code, index) => (
        <input
          key={index}
          id={`code-${index}`}
          type="text"
          maxLength={1}
          value={code}
          disabled={isPending}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value, index)
          }
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(e, index)
          }
          onPaste={(e: ClipboardEvent<HTMLInputElement>) =>
            index === 0 && handlePaste(e)
          }
          className="h-12 w-12 rounded-md border text-center text-lg"
        />
      ))}
    </div>
  );
};

export default TwoFactorInput;
