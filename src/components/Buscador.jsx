export function BuscadorEmoji({valorInput, estadoInput}) {
  return (
    <div className='row d-flex justify-content-end'>
      <div className='col-6'>
        <div className='mb-3'>
          <label className='form-label text-right '> Buscar emoji</label>
          <input
            value= {valorInput}
            onChange= {estadoInput}
            type='text'
            className='form-control'
            placeholder='Ingresa el nombre del emoji...'
          />
        </div>
      </div>
    </div>
  );
}
