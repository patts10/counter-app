
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subtitulo } ) => {



  return (<>

    <h1>{ saludo }</h1>
    {/* <prep>{JSON.stringify(saludo, null, 3)}</prep> */}
    <p>{ subtitulo }</p>
  </>
);

}



PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: 'soy un subtitulo'
}

export default PrimeraApp;