import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'

const PirateList = (props) => {
    const [pirates, setPirates] = useState([])

    const imgStyle = {
        maxWidth: '100px'
    };

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate=> pirate._id != pirateId))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/pirates')
            .then(res=> setPirates(res.data))
    }, [])


    return(
        <div className=''>
            {
            props.pirates.map( (pirate, index) =>
            <div key={index} className="mt-4 d-flex justify-center bg-yellow-100 p-5 border-solid border-4 border-black border-opacity-40 rounded-xl">
                <div classNamej="me-4">
                    <img style={imgStyle} src={pirate.image} />
                </div>

                <div className='ms-5 mt-2'>
                    <h1 className="text-2xl text-center"> <b> {pirate.name} </b> </h1>
                    <div className="mt-4">
                        <Link className="ms-3 btn bg-blue-400 hover:bg-blue-800 w-20" to={`/pirates/${pirate._id}`}>View</Link>
                        <DeleteButton pirateId={pirate._id} successCall={()=> removeFromDom(pirate._id)} />
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default PirateList