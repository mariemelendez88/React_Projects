export default function Header(props){
    return(
        <div id="cabecera">
            <img className="logo" src={process.env.PUBLIC_URL + "/sun.webp"} alt="el logo de la web" />
            <h3 className="mensaje">Bienvenido a la página de Marie Dessiree Melendez Diaz</h3>
        </div>
    )
}