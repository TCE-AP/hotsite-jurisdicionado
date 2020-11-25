/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, ChangeEvent, useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { FiLoader } from 'react-icons/fi';
import Input from '../../General/Input';
import { useToast } from '../../../hooks/toast';
import getValidationErrors from '../../../utils/getValidationErrors';
import api from '../../../services/api';
import InputMask from '../../General/InputMask';
import InputTextArea from '../../General/InputTextArea';
import { useFontSize } from '../../../hooks/fontSize';

const ContatoForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const { fontSizeText } = useFontSize();

  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const [enviando, setEnviando] = useState(false);
  const [aceito, setAceito] = useState(false);
  const handleAceitar = useCallback(() => setAceito(!aceito), [aceito]);

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        setEnviando(true);
        const token = await recaptchaRef.current?.executeAsync();

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório!')
            .email('Digite um e-mail válido!'),
          telefone: Yup.string().nullable(),
          cpf: Yup.string().required('CPF obrigatório!'),
          mensagem: Yup.string()
            .required('Texto da mensagem é obrigatório!')
            .min(
              30,
              'Por gentileza, fale um pouco mais | Mínimo de 30 caracteres',
            ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const dataWithToken = { ...data, token };

        const toServer = await api.post(
          '/api/ouvidoria/protocolo',
          dataWithToken,
        );

        if (toServer.status !== 200) {
          addToast({
            type: 'error',
            title: 'Whoops!',
            description: toServer.data,
          });
        } else {
          addToast({
            title: 'Sucesso!',
            type: 'success',
            description:
              'Seu protocolo foi criado junto a Ouvidoria do TCE-AP, em breve entraremos em contato.',
          });
        }
        setEnviando(false);
        formRef.current?.reset();
      } catch (err) {
        const errors = getValidationErrors(err);
        recaptchaRef.current?.reset();
        formRef.current?.setErrors(errors);

        addToast({
          type: 'error',
          title: 'Whoops!',
          description:
            'Por favor, verifique se os campos do formulário de contato estão corretos.',
        });
        setEnviando(false);
      }
    },
    [addToast, recaptchaRef, formRef],
  );

  return (
    <div className="max-w-lg mx-auto lg:max-w-none pt-8 sm:pt-0">
      <Form
        ref={formRef}
        className="grid grid-cols-1 row-gap-6 space-y-1"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="nome" className="sr-only">
            Seu nome
          </label>
          <Input
            name="nome"
            type="text"
            id="nome"
            disabled={enviando}
            onChange={handleInputChange}
            placeholder="Seu Nome"
          />
        </div>
        <div>
          <label htmlFor="cpf" className="sr-only">
            CPF
          </label>
          <InputMask
            name="cpf"
            id="cpf"
            type="text"
            disabled={enviando}
            mask="999.999.999-99"
            onChange={handleInputChange}
            placeholder="CPF"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            disabled={enviando}
            onChange={handleInputChange}
            placeholder="E-mail"
          />
        </div>
        <div>
          <label htmlFor="telefone" className="sr-only">
            Telefone
          </label>
          <InputMask
            name="telefone"
            id="telefone"
            type="text"
            mask="(99) 9 9999-9999"
            disabled={enviando}
            onChange={handleInputChange}
            placeholder="Telefone"
          />
        </div>
        <div>
          <label htmlFor="mensagem" className="sr-only">
            Mensagem
          </label>
          <InputTextArea
            name="mensagem"
            id="mensagem"
            disabled={enviando}
            onChange={handleInputChange}
            placeholder="Mensagem"
          />
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <span
              role="checkbox"
              tabIndex={0}
              aria-checked="false"
              aria-labelledby="aceitarTermos"
              onClick={handleAceitar}
              className={`${
                aceito
                  ? 'bg-blue-apoio dark:bg-yellow-primary'
                  : 'bg-gray-200 dark:bg-gray-700'
              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
            >
              <span
                aria-hidden="true"
                className={`${
                  aceito ? 'translate-x-5' : 'translate-x-0'
                } inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
              />
            </span>
            <span id="aceitarTermos">
              <span
                className={`${
                  fontSizeText === 'text-base' ? 'text-sm' : fontSizeText
                } leading-5 font-medium text-gray-600 dark:text-gray-400`}
              >
                Entendo que ao entrar em contato com TCE-AP através deste
                formulário, estarei concordando com os{' '}
                <b className="text-blue-500 dark:text-yellow-primary">
                  termos de serviço
                </b>{' '}
                aqui informados.
              </span>
            </span>
          </div>
        </div>
        <div>
          <span className="inline-flex rounded-md shadow-sm">
            {aceito ? (
              <button
                type="submit"
                className="inline-flex w-32 h-12 justify-center py-3 px-6 border border-transparent leading-6 font-medium rounded-md text-white dark:text-gray-600 bg-blue-600 dark:bg-yellow-primary hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 dark:hover:bg-yellow-500 dark:focus:outline-none dark:focus:border-yellow-700 dark:focus:shadow-outline-yellow dark:active:bg-yellow-700 transition duration-150 ease-in-out"
              >
                {enviando ? (
                  <FiLoader className="animate-spin text-blue-300" size={28} />
                ) : (
                  'Enviar'
                )}
              </button>
            ) : (
              <button
                type="submit"
                disabled
                className="inline-flex w-32 h-12 justify-center py-3 px-6 border border-transparent leading-6 font-medium rounded-md text-white dark:text-gray-500 bg-blue-300 dark:bg-yellow-100 transition duration-150 ease-in-out"
              >
                Enviar
              </button>
            )}
          </span>
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LdcM6sUAAAAACl2SXjIdO3AYELHc2-ABi4mbp3x"
          size="invisible"
        />
      </Form>
    </div>
  );
};

export default ContatoForm;
