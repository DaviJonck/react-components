

const List = () => {
    const items = [{
        id : 1,
        name: "Matheus",
    },
    {
        id : 2,
        name: "Davi",
    },
    {
        id : 3,
        name: "Joao",
    },
];

return(
    <div>
    {items.map((item) => (

        // eslint-disable-next-line react/jsx-key
        <p key={item.id}> 
            {item.id} - {item.name} 
        </p>
    ))}
</div>
    );
};

export default List;