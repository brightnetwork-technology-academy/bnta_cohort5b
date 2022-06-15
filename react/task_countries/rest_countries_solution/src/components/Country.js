const Country = ({country, handleClick}) => {

    return(
        <>
            <p onClick={() => handleClick(country)} >{country.name.common}</p> 
        </>
    )

}

export default Country;