import { useState } from "react"

const NewMember = ({addNewMember}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState(0);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newMember = {
            name: name,
            email: email,
            employeeNumber: employeeNumber
        }

        setName("");
        setEmail("");
        setEmployeeNumber(0);
        addNewMember(newMember);
    }

    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="employeeNumber">Employee No:</label>
                <input 
                    type="number" 
                    id="employeeNumber" 
                    value={employeeNumber}
                    onChange={(event) => setEmployeeNumber(event.target.value)}
                />
                <input type="submit" value="Add new member"/>
            </form>
        </>
    )

}

export default NewMember