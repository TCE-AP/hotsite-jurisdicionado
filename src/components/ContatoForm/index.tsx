/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';
import Input from '../General/Input';

const ContatoForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    cpf: '',
    orgao: 246,
  });

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();
  }

  return (
    <div className="max-w-lg mx-auto lg:max-w-none pt-8 sm:pt-0">
      <Form
        ref={formRef}
        className="grid grid-cols-1 row-gap-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="nome" className="sr-only">
            Seu nome
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              name="nome"
              id="nome"
              onChange={handleInputChange}
              placeholder="Seu Nome"
              className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            />
          </div>
        </div>
        <div>
          <label htmlFor="cpf" className="sr-only">
            CPF
          </label>
          <div className="relative rounded-md shadow-sm">
            <Input
              name="cpf"
              id="cpf"
              mask="999.999.999-99"
              onChange={handleInputChange}
              placeholder="CPF"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleInputChange}
              className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="telefone" className="sr-only">
            Telefone
          </label>
          <div className="relative rounded-md shadow-sm">
            <Input
              name="telefone"
              id="telefone"
              mask="(99) 9 9999-9999"
              onChange={handleInputChange}
              placeholder="Telefone"
            />
          </div>
        </div>
        <div>
          <label htmlFor="mensagem" className="sr-only">
            Mensagem
          </label>
          <div className="relative rounded-md shadow-sm">
            <textarea
              id="mensagem"
              rows={4}
              name="mensagem"
              onChange={handleInputChange}
              className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
              placeholder="Mensagem"
            />
          </div>
        </div>
        <div className="">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
            >
              Enviar
            </button>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default ContatoForm;
