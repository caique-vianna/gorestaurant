import {Modal} from "../Modal"
import { Form } from "./style"

import { Input } from "../Input"

export const ModalAddFood = (props) =>{
    const handleSubmit = () => {

    }

    return(
        <Modal isOpen={props.isOpen}>
            <Form>
                <h1>Novo Prato</h1>
               <Input />

                <button>salvar</button>

            </Form>


        </Modal>
    )
}