function AnotherComponent () {
    const handleClick = () => {
        console.log('clicou');
    }
    return (
        <div>
            <p>Segundo</p>
            <button onClick={handleClick}>Evento</button>
        </div>
    )
}

export default AnotherComponent;