import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const Details = (props) => {
    const [pirate, setPirate] = useState({})
    const { id } = useParams();
    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:8000/pirates/' +id)
            .then(response => setPirate(response.data))
            .catch(err => console.error(err));
    }, []);

    const deleteHandler = () => {
        axios.delete('http://localhost:8000/pirates/' +id)
            .then(res => {
                console.log(res.data)
                history.push('/pirates')
            })
            .catch()
    }

    const imgStyle = {
        maxWidth: '300px'
    };

    return (
        <div className="container bg-yellow-400 p-5 border-solid border-4 border-black border-opacity-40 rounded-xl">
            <nav className="text-center text-4xl mb-3" >
                <h1><b>Name: {pirate.name}</b></h1>
                <hr />
            </nav>
            <div className="d-flex justify-content-around">
                <div className="" >
                    <img style={ imgStyle} src={pirate.image} alt=""/>
                    <h3 className="text-center text-2xl">"{pirate.phrase}"</h3>
                </div>
                <div className="bg-yellow-200 p-5 border-solid border-4 border-black border-opacity-40 rounded-xl">
                    <h4 className="text-center text-2xl ms-2"> <b> About </b></h4>
                    <hr />
                    <p className="mt-2"><b>Position: </b> {pirate.position}</p>
                    <p className="mt-2"><b>Treasures: </b> {pirate.treasures}</p>
                    <p className="mt-2">
                        <b>Peg Leg: </b> {pirate.pegLeg}
                    </p>
                    <p className="mt-2">
                        <b>Eye Patch: </b> {pirate.eyePatch}
                    </p>
                    <p className="mt-2">
                        <b>Hook Hand: </b> {pirate.hookHand}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Details;