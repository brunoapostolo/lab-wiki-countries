import {useParams} from 'react-router-dom';
import {useState, useEffect} from "react"
import axios from "axios"
import {Link } from "react-router-dom";

function CountryDetails (){
    const {countryAlpha3Code} = useParams();
    const [country, setCountry] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        async function fetchCountry(){
            const response = await.axios.get(
                `https://ih-countries-api.herokuapp.com/countries/${countryAlpha3Code}`
            )
            setCountry(response.data)
            setLoading(false)
        }
        fetchCountry()
    }, [countryAlpha3Code])

    function findFullName (border){
        const fullName=countries.filter((country)=>{
            return country.alpha3Code===border
        })
        return fullName[0].name.common
    }
    return(
        <>
            {!loading&&(
                <div >
                    <h1> {country.name.common}</h1>
                    <table>
                        <thead></thead>
                        <tbody></tbody>
                            <tr>
                                <td>{country.capital[0]}</td>
                            </tr>
                            <tr>
                                <td> {country.region}-{country.subregion}</td>
                            </tr>
                            <tr>
                                <td> {country.area} km</td>
                            </tr>
                    </table>

                </div>
            )}
        </>
    )
}
export default CountryDetails