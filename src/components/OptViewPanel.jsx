const OptViewPanel = ({ children }) => {
  return (
    <main className="px-3 pt-10 pb-20 w-full lg:w-[340px] lg:min-w-[340px] lg:border-r lg:border-r-border dark:lg:border-r-cdborder lg:h-screen lg:overflow-auto">
      {children}
    </main>
  );
};

export default OptViewPanel;
