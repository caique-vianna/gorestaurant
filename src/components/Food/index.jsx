import { Container } from "./styles"


export const Food = (props) => {
    return(
        <Container>
            <h2>{props.food.name}</h2>
            <p>{props.food.description}</p>
            <img src={props.food.image} alt="" />
        </Container>
    )
}