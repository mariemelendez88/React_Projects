import Spinner from 'react-bootstrap/Spinner';

export default function TheSpinner(props) {
  const loading = props.loading;
  return (
    <div>
      {loading ? 
        <div id="loading">
          <Spinner animation="border" variant="primary" className="spinner" />
        </div>:""
      }
    </div>    
  );
}
