const SectionPointer = ({ children, showWhenSmall = true }) => {
    return (

        <h2 className={`lg:absolute lg:block ${showWhenSmall ? '' : 'hidden'}`}>
            <p className="mb-4 text-base font-light lg:mb-0 lg:text-right lg:absolute text-cgray lg:right-10">{children}</p>
        </h2>
    )
}

export default SectionPointer;