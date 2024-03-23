const SectionPointer = ({ children }) => {
    return (

        <h2 className='absolute hidden lg:block'>
            <p className="absolute text-base font-light text-right text-cgray right-10">{children}</p>
        </h2>
    )
}

export default SectionPointer;