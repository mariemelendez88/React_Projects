import Card from 'react-bootstrap/Card';

export default function Header(props){
    return(
        <Card className="text-center" style={{ width: '18rem', margin: 'auto' }}>
            <Card.Body>
                <Card.Title>Cabecera</Card.Title>
                <Card.Text>
                    Turn of {props.turn}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}