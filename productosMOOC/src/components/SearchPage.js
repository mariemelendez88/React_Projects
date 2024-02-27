import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Reset from './Reset';
import Lista from './Lista.js';

export default function SearchPage(props){
    const { textoBusqueda, 
        setTextoBusqueda, 
        callServer, 
        categorias, 
        selectedCategory, 
        setSelectedCategory,
        resetClick,
        productosFiltrados,
        numItems } = props;

    const opcionesSelect = categorias.map((categoria, index) => (
        <option key={index} value={categoria}>
            {categoria}
        </option>
    ));

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSearch = () => {
        callServer(selectedCategory);
    };



    return(
        <div>
            <h2 id="catalogo">Catálogo</h2>
            <div className="container mt-4">
                <div className="row">
                    <div className="card rounded border-primary col-sm-6">
                        <div className="card-body">
                            <label htmlFor="filtro">Buscar</label>
                            <input 
                                id="filtro"
                                className="form-control"
                                type="text"
                                value={textoBusqueda}
                                onChange={e => setTextoBusqueda(e.target.value)}
                                placeholder="Escriba lo que quiere buscar" />
                            <Button id="buscador" onClick={callServer}>Buscar</Button>
                        </div>
                    </div>
                    <div className="card rounded border-primary col-sm-6">
                        <div className="card-body">
                            <label htmlFor="selector">Filtrar</label>
                            <Form.Select 
                                id="selector" 
                                aria-label="Default select example"
                                onChange={handleCategoryChange}
                                value={selectedCategory}>
                                <option value="all">All</option>
                                {opcionesSelect}
                            </Form.Select>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <Reset resetClick={resetClick} />
            <br/><br/>
            {productosFiltrados.length > 0 && <Lista productosFiltrados={productosFiltrados} numItems={numItems} />}
        </div>
    )
}