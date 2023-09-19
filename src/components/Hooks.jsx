import { useState, useEffect } from 'react';

function Hooks(){

    let idade = 30;
    const [novaIdade, setNovaIdade] = useState(40);

    const changeAge = () => {
        idade = 30;
    };
   
    const changeNewAge = () => {
        setNovaIdade(45);
    }

    useEffect(() => {
        console.log('Testando');
    });
    return (
        <div>
            <p>Idade: {idade} </p>
            <button onClick={changeAge} > Mudar Idade</button>
            <p>Idade: {novaIdade} </p>
            <button onClick={changeNewAge} > Mudar nova Idade</button>
        </div>
    )
}

export default Hooks;