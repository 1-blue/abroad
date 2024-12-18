const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="mx-auto w-full max-w-screen-xl flex-1">{children}</main>
  );
};

export default Main;
