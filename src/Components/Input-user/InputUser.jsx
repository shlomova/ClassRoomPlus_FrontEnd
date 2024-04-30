import { useState } from "react"
import { createUser } from "../../api-services/userServises"

const InputUser = () => {
    const [firstName, setFirstName] = useState("")
    const [status, setStatus] = useState(false)
    const handleNameInput = (e) => {
        setLastName(e.target.value);
    }
    const handleAddUser = () => {
        const user = { name: firstName }
        createUser(user).then(
            (res) => {
                if (res.ok) {
                    setFirstName("")
                }
                else {
                    setStatus(true)
                }
            }
        ).catch(err => console.log(err.message))
    }
    return (
        <div className="d-flex m-4">
            <input type="text" onChange={handleNameInput} className="form-control w-25 " placeholder="ADD USER"/>
            {status&&'error adding user'}


            <button onClick={handleAddUser} className="btn btn-primaty btn-lg mx-1" disabled={status}>
                ADD
            </button>
        </div>
    )
}

export default InputUser