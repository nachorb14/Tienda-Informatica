const Titulo = ( {titulo, subTitulo, children} ) => {
    {/*console.log( props )*/}
    return (
        <>  
            <h1>{titulo}</h1>
            <h2>{subTitulo}</h2>
            {children}
        </>  
    )
}

export default Titulo