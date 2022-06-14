import Member from "./Member";

const MemberList = ({listOfMembers}) => {

    const memberComponents = listOfMembers.map((member, index) => {
        return <Member member={member} key={index}/>
    });

    return(
        <>
            {memberComponents}  
        </>
    )

}

export default MemberList;