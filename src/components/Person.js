export const Person = (props) => {
    return <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
         {props.friends.map((firend) => {
            return <h1>{firend}</h1>
        })} 
       
    </div>
}