interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen items-center justify-center">{children}</div>
  );
};

export default Layout;
