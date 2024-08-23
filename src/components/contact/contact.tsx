import { ToastContainer, toast } from 'react-toastify'
import { useHookFormMask } from 'use-mask-input'
import { useForm, SubmitHandler } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

import { ButtonOutline } from '@/components/buttonOutline/buttonOutline'
import { Reveal } from '@/components/reveal/reveal'
import { Intro } from '@/components/contact/components/Intro/intro'
import styles from '@/components/contact/contact.module.scss'
import { IFormImputs } from '@/components/contact/contact.interface'
import { useState } from 'react'

export const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false) 

  const {
    register,
    handleSubmit,
    reset
  } = useForm<IFormImputs>()

  const registerWithMask = useHookFormMask(register)

  const onSubmit: SubmitHandler<IFormImputs> = async ({ name, email, phone, message }, e) => {
    try {
      setIsLoading(true)
      e.preventDefault()
      await axios.post('/api/contact', {
        name, email, phone, message
      })
      reset()
      toast('Mensagem enviada com sucesso')
      setIsLoading(false)
    } catch (error) {
      toast.error(error.response.data.message)
      setIsLoading(false)
    }
  }

  return (
    <>
      <ToastContainer />
      <section className="section-wrapper" id="contato">
        <div className={styles.contactWrapper}>
          <Intro />
          <Reveal width="100%">
            <form autoComplete="false" className={styles.contantForm} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputBox}>
                <input 
                  {...register('name')} 
                  type="text" 
                  placeholder="Nome" 
                  autoComplete="false" 
                  name="name" 
                  required 
                  />
              </div>
              <div className={styles.inputBox}>
                <input 
                  {...register('email')} 
                  type="email" 
                  placeholder="E-mail" 
                  autoComplete="false" 
                  name="email" 
                  required 
                  />
               
                    <input 
                      {...registerWithMask('phone', ['(99) 9 9999-9999'], {
                        required: true
                      })}
                      type="text" 
                      placeholder="Celular" 
                      name="phone" 
                      required 
                    /> 
              </div>
              <textarea 
                {...register('message')}
                placeholder="Descreva sua mensagem..."
                autoComplete="false"
                required
                name="message"
              ></textarea>
              <ButtonOutline isLoading={isLoading} variant='submit'>
                Enviar mensagem
              </ButtonOutline>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
