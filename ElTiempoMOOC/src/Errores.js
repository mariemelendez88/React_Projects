export default function Errores(props) {

    return (
        <div id="error">
            <h1>Error</h1>
            <h2>Se ha producido un error.</h2>
            <pre><strong>{props.errorData}</strong></pre>
        </div>
    )
}