const Member = ({member}) => {

    const {name, email, employeeNumber} = member

    return (
        <>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Employee No: {employeeNumber}</p>
            <hr/>
        </>
    )

}

export default Member;