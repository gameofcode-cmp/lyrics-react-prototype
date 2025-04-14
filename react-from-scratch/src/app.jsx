import ReactDOM from 'react-dom/client'

function App() {
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
            <div>
                <Greeting>Hi there</Greeting>
            </div>
        </>
    )
}

function Greeting ({children}) {
    return <h2 className='greeting'>{children}</h2>
}

const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)

root.render(<App />)