import Titulo from "../Titulo/Titulo"

const Formulario = () => {
    return (
        <form className="form-control">
            {/*<Titulo titulo={'Titulo de form'} subTitulo='Esto es subtitulo de form' />*/}
            <input type="text" />
            <button>Enviar</button>
        </form>
    )
}

export default Formulario