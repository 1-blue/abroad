import "@abroad/tailwind-config/globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head></head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
