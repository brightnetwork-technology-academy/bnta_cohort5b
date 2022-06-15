import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])

    const markCountryVisited = (country) => {
        const updatedCountries = [...countries];
        const countryIndexToRemove = countries.indexOf(country);
        if (countryIndexToRemove !== -1) {   
            const visitedCountry = updatedCountries.splice(countryIndexToRemove, 1);
            setCountries([...updatedCountries])
            setVisitedCountries([...visitedCountries, ...visitedCountry]);    
        }
    }

    return(
        <>
            <h1>Countries of the World</h1>
            <h2>Visited Countries</h2>
            <CountryList countries={visitedCountries} handleClick={markCountryVisited}/>
            <hr/>
            <h2>Unvisited Countries</h2>
            <CountryList countries={countries} handleClick={markCountryVisited}/>
        </>
    )

}

export default CountryContainer;