const Status = ({applicationsOpen, handleButtonClick}) => {

    return(
        <>
            <p>Applications are {applicationsOpen ? "open" : "closed"}.</p>
            <button onClick={handleButtonClick}>Open/Close Applications</button>
        </>
    )

}

export default Status;