import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import TheSpinner from './components/TheSpinner.js';
import SearchPage from './components/SearchPage.js';
import Errores from './components/Errores.js';
import Producto from './components/Producto.js';
import NoMatch from './components/NoMatch.js';
import CONFIG from './config/config.js';
import { useState, useEffect } from 'react';
import { mockdata } from './constants/products.js';
import { Link, Route, Routes } from "react-router-dom";


function App() {

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categorias, setCategorias]=useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { fetchData } = useInitialLoad(); // Obtén la función fetchData del hook

  useEffect(() => {
    fetchData(); // Llama a la función fetchData del contexto
  }, [fetchData]);

  useEffect(()=>{
    async function fetchData(){
      try {
        await callServer();
        setTimeout(() => {
          setLoading(false);
        });
        
      } catch (error) {
        setErrorMessage('Error al procesar la solicitud');
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Productos actualizados:", productos.length);
  }, [productos]);

  const callServer = async () => {
    try {
      let fetchedProducts = [];
      if (CONFIG.use_server) {
        console.log("WEB");
        const response = await fetch(`${CONFIG.server_url}`);
        if (response.status === 200) {
          console.log("Codigo 200");
          const data = await response.json();
          fetchedProducts = data.products;
        } else {
          const errorData = await response.json();
          setErrorMessage(`Descripción: Obtenido error al llamar al API. Código: ${errorData.cod}\nMensaje del servidor: ${errorData.message}`);
        }
      }
      else {
        console.log("Productos Locales");
        fetchedProducts = mockdata.products;
      }

      setProductos(fetchedProducts);
      console.log("callServer");
      console.log(productos.length);

      const categoriasUnicas = productos.reduce((categ, producto) => {
        if (!categ.includes(producto.category)) {
          categ.push(producto.category);
        }
        return categ;
      }, []);
      setCategorias(categoriasUnicas);

      let filteredProducts = productos;
      if (textoBusqueda.trim() !== ''){
        if (selectedCategory === 'all'){
          filteredProducts = filteredProducts.filter((product) =>
            product.title.toLowerCase().includes(textoBusqueda.toLowerCase())
          );
        } else {
          filteredProducts = filteredProducts.filter((product) =>
            product.category === selectedCategory
          );
          filteredProducts = filteredProducts.filter((product) =>
            product.title.toLowerCase().includes(textoBusqueda.toLowerCase())
          );
        }
        if (filteredProducts.length === 0){
          setErrorMessage(
            `No hay productos que incluyan "${textoBusqueda}" en la categoría ${selectedCategory}`
          );
        } else {
          setErrorMessage(null);
        }
      } else {
        if(selectedCategory === 'all'){
          filteredProducts = productos;
        } else {
          filteredProducts = filteredProducts.filter((product) =>
            product.category === selectedCategory
          );
          if (filteredProducts.length === 0){
            setErrorMessage(`No hay productos en la categoría ${selectedCategory}`);
          } else {
            setErrorMessage(null);
          }
        }
      }
      setProductosFiltrados(filteredProducts);
    } catch (error) {
      console.log(error);
      setErrorMessage({description: error.message});
    }
  }

  function resetClick(){
    console.log("RESET");
    setProductos([]);
    setProductosFiltrados([]);
    setSelectedCategory('all');
    setErrorMessage(null);
}

  return (
    <div id="main">
      {loading ? <TheSpinner loading={loading} />:
        <div>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
              <SearchPage 
                textoBusqueda={textoBusqueda}
                setTextoBusqueda={setTextoBusqueda}
                callServer={callServer} 
                categorias={categorias}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                resetClick={resetClick}
                productosFiltrados={productosFiltrados}
                numItems={CONFIG.num_items} />
              {errorMessage && <Errores errorData={errorMessage}/>}
              </>
            }/>
            <Route path="/products/:productId" element=
              {<Producto productosFiltrados={productosFiltrados} />
            }/>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
        
      }
    </div>
  );
}

export default App;
