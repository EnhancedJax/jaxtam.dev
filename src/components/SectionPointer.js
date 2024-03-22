const SectionPointer = ({ children }) => {
    return (

        <div className='absolute hidden lg:block'>
            <span className="absolute text-base font-light text-right text-cgray right-10">{children}</span>
        </div>
    )
}

export default SectionPointer;