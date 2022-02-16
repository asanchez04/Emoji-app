import './App.css'
import {TituloEncabezado} from './components/Titulo'
import {BuscadorEmoji} from './components/Buscador'
import {EmojiList} from './components/EmojiList';
import { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';


let LIMIT = 24
const URL = `http://localhost:3001/emojis?_limit=${LIMIT}`;

function App() {
  let [emojis, setEmojis] = useState([]);
  let [busqueda, setBusqueda] = useState('');
  let [pagina, setPagina] = useState()

  useEffect(() =>{
    fetch(`${URL}&_page=${pagina}`)
    .then((res) => res.json())
    .then((datos) => {
      setEmojis(datos)
    })
  }, [pagina]);

  function actulizarInput (evento){
    let entradoTeclado = evento.target.value;
    setBusqueda(entradoTeclado)
    console.log('actualizo la vista')
  }

  let emojisFiltlers = emojis.filter((emoji) =>{
    let titleEmojilower = emoji.title.toLowerCase()
    if( titleEmojilower.includes(busqueda.toLowerCase())){
      return emoji
    }
  })
  console.log('listado')
  console.log(emojis)

  function handlePageChange(pageNumber) {
    setPagina(pageNumber)
    
  }
  return (
    <div>
        <TituloEncabezado/>
        <BuscadorEmoji valorInput={busqueda} estadoInput={actulizarInput} />
        <EmojiList datos= {busqueda ? emojisFiltlers : emojis}/>

        <div className='d-flex justify-content-center'>
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={pagina}
          itemsCountPerPage={LIMIT}
          totalItemsCount= {1820}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
        </div>
    </div>
  );
}

export default App
