import { Resend } from "resend";

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Autenticação de dois fatores",
    html: `<p>Este é seu código de autenticação: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Trocar sua senha",
    html: `<p>Clique <a href="${resetLink}">aqui</a> para trocar sua senha.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirme seu email",
    html: `<p>Clique <a href="${confirmLink}">aqui</a> para confirmar seu email.</p>`,
  });
};
