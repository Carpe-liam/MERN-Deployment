import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const PirateForm = (props) => {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    
    const [image, setImage] = useState('')
    const [imageError, setImageError] = useState('')
    
    const [treasures, setTreasures] = useState(0)
    const [treasuresError, setTreasuresError] = useState('')
    
    const [phrase, setPhrase] = useState('')
    const [phraseError, setPhraseError] = useState('')
    
    const [position, setPosition] = useState('')
    const [positionError, setPositionError] = useState('')

    const [pegLeg, setPegLeg] = useState('yes')
    const [eyePatch, setEyePatch] = useState('yes')
    const [hookHand, setHookHand] = useState('yes')

    const history = useHistory()

    //ARRAY FOR ERRORS
    const [errors, setErrors] = useState([])

    const imgStyle = {
        maxWidth: '300px'
    };

    const formSubmit = e => {
        e.preventDefault()
        const formData = {
            name,
            image,
            treasures,
            phrase,
            position,
            pegLeg,
            eyePatch,
            hookHand
        }
        
        axios.post('http://localhost:8000/pirates/new', formData)
            // SUCCESS POST
            .then(response => {
                console.log(response)
                setErrors([])
                history.push('/pirates')
            })
            // FAIL POST
            .catch(err => {
                const errorResponse  = err.response.data.errors
                console.log(errorResponse)
                const errorArr = []
                // LOOP THROUGH ALL ERRORS AND GET MESSAGES
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }

    const handleName = (e) => {
        setName(e.target.value);

        if(e.target.value.length < 1) {
            setNameError("Name Required!")
        } else if(e.target.value.length < 3) {
            setNameError("Name must be 3 characters or longer!")
        } else{
            setNameError('')
        }
    }
    const handleImage = (e) => {
        setImage(e.target.value);

        if(e.target.value.length < 2) {
            setImageError("Image path Required!")
        } else {
            setImageError('')
        }
    }
    const handleTreasures = (e) => {
        setTreasures(e.target.value);

        if(e.target.value < 1) {
            setTreasuresError("Treasures number must be greater than 0!")
        } else {
            setTreasuresError('')
        }
    }
    const handlePhrase = (e) => {
        setPhrase(e.target.value);

        if(e.target.value.length < 1) {
            setPhraseError("Must have phrase!")
        } else if(e.target.value.length < 3){
            setPhraseError("Phrase must be more than 3 characters!")
        } else{
            setPhraseError('')
        }
    }
    const handlePosition = (e) => {
        setPosition(e.target.value);

        if(e.target.value.length < 1) {
            setPositionError("Must have Position!")
        } else{
            setPositionError('')
        }
    }


    return(
        <div >
            <form onSubmit={ formSubmit } className="form d-flex justify-content-around">
                <div>
                    <p>
                        <label className="form-label">Pirate Name:</label>
                        <input className="form-control" type="text" onChange={ handleName } />
                        {
                            nameError ? 
                            <p className="text-danger"> {nameError} </p> :
                            ''
                        }
                    </p>
                    <p>
                        <label className="form-label">Image URL:</label>
                        <input className="form-control" type="text" onChange={ handleImage } />
                        {
                            imageError ? 
                            <p className="text-danger"> {imageError} </p> :
                            ''
                        }
                    </p>
                    <p>
                        <label className="form-label"> # of Treasure Chests</label>
                        <input className="form-control" type="number" onChange={ handleTreasures }/>
                        {
                            treasuresError ? 
                            <p className="text-danger"> {treasuresError} </p> :
                            ''
                        }
                    </p>
                    <p>
                        <label className="form-label"> Pirate Catch Phrase: </label>
                        <input className="form-control" type="text" onChange={ handlePhrase } />
                        {
                            phraseError ? 
                            <p className="text-danger"> {phraseError} </p> :
                            ''
                        }
                    </p>
                </div>
                <div>
                    <p>
                        <label className="form-label">Crew Position:</label>
                        <select onChange={ handlePosition }>
                            <option value='Captain'>Captain</option>
                            <option value='First Mate'>First Mate</option>
                            <option value='Quarter Master'>Quarter Master</option>
                            <option value='Boatswain'>Boatswain</option>
                            <option value='Powder Monkey'>Powder Monkey</option>
                        </select>
                    </p>
                    <p>
                        <input type="checkbox" checked="checked" onChange={e=> setPegLeg(e.target.value)} /> <label className="ms-2">Peg Leg</label>
                    </p>
                    <p>
                        <input type="checkbox" checked="checked" onChange={e=> setEyePatch(e.target.value)} /> <label className="ms-2">Eye Patch</label>
                    </p>
                    <p>
                        <input type="checkbox" checked="checked" onChange={e=> setHookHand(e.target.value)} /> <label className="ms-2">Hook Hand</label>
                    </p>
                    

                    <input className="btn bg-blue-500 hover:bg-blue-800 mt-4" type="submit" value="Add Pirate" />
                </div>
            </form>
            {errors.map((err, index) => <p key={index} className="text-light">**{err}</p>)}
        </div>
    )
}

export default PirateForm