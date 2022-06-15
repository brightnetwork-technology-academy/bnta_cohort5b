import Country from "./Country";

const CountryList = ({countries, handleClick}) => {

    console.log(countries);

    const countryComponents = countries.map((country, index) => {
        return <Country country={country} key={index} handleClick={handleClick}/>
    });

    return(
        <>
            {countryComponents}
        </>
    )

}

export default CountryList;