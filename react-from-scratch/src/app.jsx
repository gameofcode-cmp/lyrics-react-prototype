import ReactDOM from 'react-dom/client'
import './app.css'

//transform.tools to convert to object format
const theme = {
    primary: 'yellow',
    secondary: 'red'
}

export function App() {
    return(
        <>
            <div>
                <h1 className="font-mono">I hope today goes better</h1>
                <h2 className="font-mono text-4xl" style={{ background: theme.primary , color: 'red'}}>
                    Howdy!, Happy{' '} {new Date().toLocaleDateString('en-UK', {weekday: 'long'})}
                </h2>
                <p>I hope today goes better</p>
            </div>
            <div className="font-mono text-4xl">
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

