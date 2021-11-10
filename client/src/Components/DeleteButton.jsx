import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const {pirateId, successCall } = props

    const deletePirate = e => {
        axios.delete('http://localhost:8000/pirates/'+pirateId)
            .then(res => {
                successCall()
            })
    }

    return (
        <button onClick={ deletePirate } className="btn btn-danger ms-4">
            Walk the Plank!
        </button>
    )
}

export default DeleteButton