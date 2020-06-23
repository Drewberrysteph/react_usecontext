import React, { useState, useContext, useEffect } from 'react'
import { UsersContext } from '../context/UsersContext'

function AddUser() {
    const [user, setUser] = useState({
        id: '',
        name: '',
        lastname: '',
    })

    const { users, setUsers } = useContext(UsersContext)

 
    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            id: Math.floor(Math.random()* 999),
            name: user.name,
            lastName: user.lastName
        }
        setUsers(users => [...users, newUser]) // working
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setUser({...user, name: e.target.value})}/>
                <input type="text" onChange={(e) => setUser({...user, lastName: e.target.value})}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUser
