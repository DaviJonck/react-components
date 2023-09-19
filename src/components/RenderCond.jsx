import PropTypes from 'prop-types';

function RenderCond ({x}){

   
    return (
        <div>
            {x > 5 && <p>X é mais que 5</p>}
            {x < 5 ? <p>x é alto</p> : <p>x é baixo</p>}

        </div>
    )
}

RenderCond.propTypes = {
    x: PropTypes.number.isRequired, // Espera que 'x' seja um número e é obrigatório
  };

export default RenderCond