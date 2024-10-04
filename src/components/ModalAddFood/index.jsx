import { useRef } from "react";
import { Modal } from '../Modal'
import { Form } from './style'

import { Input } from '../Input';
import  api  from '../../services/api';

import { toast } from 'react-toastify';

export const ModalAddFood = (props) => {
    const handleSubmit = async (event) => {
      event.preventDefault();


      const data = {
        image: formRef.current.image.value,
        name: formRef.current.name.value,
        price: formRef.current.price.value,
        description: formRef.current.description.value,
      };

      if(data.image === '' || 
        data.name === '' ||
         data.price === '' || 
         data.description === '') {
        toast.error('Preencha todos os campos');
        return;
      }

      await api.post('/foods', data);
      
      toast.success('Prato cadastrado com sucesso');
     };

    const formRef = useRef(null);

   return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}> 
      <Form ref={formRef} onSubmit={handleSubmit}>
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