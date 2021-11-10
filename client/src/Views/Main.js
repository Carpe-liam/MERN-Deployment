import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PirateList from '../Components/PirateList'

const Main = () => {
    const [pirates, setPirates] = useState([])
    const [subForm, setSubForm] = useState(false)

    const changeSubF = () =>{
        setSubForm(!subForm)
    }

    useEffect(()=> {
        axios.get('http://localhost:8000/pirates')
            .then(response => {
                setPirates(response.data)
                setSubForm(!subForm)
            })
            .catch(err => console.error(err))
    }, [subForm])

    return(
        <div>
            <PirateList pirates={pirates} />
        </div>
    )

}

export default Main