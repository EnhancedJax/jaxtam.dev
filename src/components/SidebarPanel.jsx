const SidebarPanel = ({ children }) => {
    return (
        <div className='hidden bg-cread lg:h-screen grow lg:block'>
            {children}
        </div>
    )
    }

export default SidebarPanel;