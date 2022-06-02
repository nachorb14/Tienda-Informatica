import hp from '../../../assets/images/hp.png'
import lenovo from '../../../assets/images/lenovo.png'
import dell from '../../../assets/images/dell.png'

const ItemListContainer = ({saludo}) => {
  return (
    <>
        <h1>
            <center className="pt-5">{saludo}</center>
        </h1>
        <div>
            <center>
                <img className="pe-3 pt-5" src={hp} />
                <img className="pe-3 pt-5" src={lenovo} />
                <img className="pt-5" src={dell} />
            </center>
        </div>
    </>
  )
}

export default ItemListContainer