import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ModalEditFood } from "../../components/ModalEditFood"
import api from "../../services/api";
import { ModalAddFood } from "../../components/ModalAddFood"
import { FoodsContainer } from "./styles";
import { Food } from "../../components/Food";


export const Dashboard = () => {
    const [foods, setFoods] = useState("")


    const getFoods = async () => {
        const response = await api.get('foods')
       console.log(response.data)
        setFoods(response.data)
    }

    useEffect(() => {
        getFoods()
    }, [])


    return (
        <>
            <Header />
            <ModalAddFood />
            <ModalEditFood />

<FoodsContainer>
{foods && foods.map((food) => <Food food={food} />)}
</FoodsContainer>


        </>
    )
}