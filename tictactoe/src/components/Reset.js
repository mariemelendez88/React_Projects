import Button from 'react-bootstrap/Button';

export default function Reset(props){
    return(
        <Button 
            variant="success"
            onClick={props.resetClick}>
                Reset
        </Button>
    )
}