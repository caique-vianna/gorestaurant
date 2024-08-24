import { useRef } from "react";
import { Modal } from '../Modal'
import { Form } from './style'

import { Input } from '../Input';

export const ModalAddFood = (props) => {
    const handleSubmit = () => {};

    const formRef = useRef(null);

   return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}> 
      <Form ref={formRef}>
       <h1>Novo Prato</h1>

       <label>link da imagem do prato</label>
       <Input name="image" placeholder="cole aqui"/>
       <br />
       <label> Nome do prato</label>
       <Input name="name" placeholder="Ex: moda Italiana"/>
       <br />
       <label> Valor do prato </label>
       <Input name="price" placeholder="Ex: 19.90"/>
       <br />
       <label>Descriçao do prato</label>
       <Input name="description" placeholder="Descriçao"/>

       <button type="submit" data-testid="add-food-button">
        <p className="text">Adicionar Prato</p>
       </button>
      </Form>
    </Modal>
 )

}