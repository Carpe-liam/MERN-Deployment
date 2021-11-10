import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const UpdateAuthor = (props) => {
    const {id} = useParams()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [grade, setGrade] = useState('')
    const history = useHistory()

    //ARRAY FOR ERRORS
    const [errors, setErrors] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/authors/'+id)
            .then(res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setBirthday(res.data.birthday)
                setGrade(res.data.grade)
            })
    }, [])

    const updateAuthorHandler = e => {
        e.preventDefault()

        const formData = {
            firstName,
            lastName,
            birthday,
            grade
        }

        axios.put('http://localhost:8000/authors/'+id, formData)
            // SUCCESS POST
            .then(response => {
                console.log(response)
                setErrors([])
                history.push('/authors')
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
    
    return (
        <div>
            <hr/>
            <h4>Update Author</h4>
            <form onSubmit={ updateAuthorHandler }>
                <p>
                    <label>First Name:</label>
                    <input type="text" 
                    name="firstName"
                    value={firstName}
                    onChange={e=> setFirstName(e.target.value)} />
                </p>
                <p>
                    <label>Last Name:</label>
                    <input type="text" 
                    name="lastName"
                    value={lastName}
                    onChange={e=> setLastName(e.target.value)} />
                </p>
                <p>
                    <label>Birthday:</label>
                    <input type="date" name="birthday" value={birthday}
                    onChange={e=> setBirthday(e.target.value)} />
                </p>
                <p>
                    <label>Grade:</label>
                    <select name="grade" value={grade}
                    onChange={e=> setGrade(e.target.value)}>
                        <option value='9' >9</option>
                        <option value='10' >10</option>
                        <option value='11' >11</option>
                        <option value='12' >12</option>
                    </select>
                </p>
                <input type="submit" value="Submit" />
            </form>
            {errors.map((err, index) => <p key={index} className="text-danger">{err}</p>)}
        </div>
    )
}

export default UpdateAuthor