import { Link } from "react-router-dom"
import { useState } from "react"

function CountriesList ({countries}){
    const [search,setSearch]= useState("")

    function handleChange (e){
        setSearch(e.target.value)
    }

    return (
        <div>
            <div>
                <div>
                    <input type="search" value={search} onchange={handleChange} />
                </div>
            {countries.
            filter((country)=>{
                return country.name.common.toLowerCase().includes(search.toLowerCase())
            })}
            .map ((country)=>{
                return (
                    <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>
                        <img src={`http://flagpedia.net/dataflags/icon/72x54/${country.alpha3Code.toLowerCase()}.png`} alt="flag" width={40} />
                        <h6>{country.name.common}</h6>
                    </Link>
                )
            })
            </div>
        </div>
    )
}
export default CountriesList