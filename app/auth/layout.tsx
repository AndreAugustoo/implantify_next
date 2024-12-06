const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="to flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-slate-950">
      {children}
    </div>
  );
};

export default AuthLayout;
