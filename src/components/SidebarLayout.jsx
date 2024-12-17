const SidebarLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-screen py-16 lg:py-0 lg:mb-16 grow lg:ml-[340px]">
      {children}
    </div>
  );
};

export default SidebarLayout;
