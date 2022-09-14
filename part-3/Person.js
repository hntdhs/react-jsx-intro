function Person(props) {
    let voteStatement = props.age >= 18 ? "please go vote!" : "you must be 18";
    return (
        <div>
            <p>Learn some information about this person.</p>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies:
                    {props.hobbies.map(hobby => <li>{hobby}</li>)}
                </ul>
            </ul>
            <h3>{voteStatement}</h3>
        </div>
    );
}