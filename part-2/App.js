function App() {
    return (
        <div>
            <Tweet
                name="Mike"
                username="mmm"
                date={new Date().toDateString()}
                message="message one"
            />
            <Tweet
                name="Mark"
                username="mrrkk"
                date={new Date().toDateString()}
                message="message two"
            />
            <Tweet
                name="Matt"
                username="mmttttt"
                date={new Date().toDateString()}
                message="message three"
            />
        </div>
    )
}