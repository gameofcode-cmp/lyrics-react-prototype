export default function App() {
    return(
        <>
            <div>
                <h2>
                    Howdy!, Happy{' '} {new Date().toLocaleDateString('en-UK', {weekday: 'long'})}
                </h2>
                <p>I hope today goes better</p>
            </div>
            <div>
                This is a secondary div block the weird tag at top is shorthand for react create fragment
            </div>
            <div>
                <form action="">
                    <label htmlFor="artist">Artist</label>
                    <input id="artist" name="artist" type="text" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}