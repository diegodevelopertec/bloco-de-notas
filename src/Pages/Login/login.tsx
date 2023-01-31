import { ChangeEvent, useEffect, useState } from 'react'
import  * as S from './styled'
import { Link, useNavigate } from 'react-router-dom'
import emailIcon from '../../assets/images/email.svg'
import passwordIcon from '../../assets/images/password.svg'
import { useContext } from 'react'
import NoteImage from './../../assets/images/noteApp.png'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './../../helpers/yupMessage'
import { useAuth } from '../../hooks/useAuth'
import { ToastContainer, toast } from 'react-toastify'

type Inputs = {
    name:string,
    email: string,
    password: string,
  };

export const LoginPage=()=>{
    const {Login}=useAuth()

    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      }).required();

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver:yupResolver(schema)
    });
    const onSubmit: SubmitHandler<Inputs> = async (data )=> {
        let response=await Login(data.email,data.password)
        if(response){
            return true
        }else{
            toast.error('algo deu errado')
        }
    }   
  
   
      
 

    return <>
        <S.Login>
        
        <S.ContainerForm onSubmit={handleSubmit(onSubmit)}>
            <h3>Login</h3>
            <form action="">
                <div >
                    <div className='cx-form'>
                          <span><img src={emailIcon} alt="" /></span>
                          <input  {...register("email")}  placeholder='Digite seu email' />
                   </div>
                   <p className='error-msg-form'>{errors.email?.message}</p>
                </div>

                <div>
                   <div className='cx-form'>
                        <span><img src={passwordIcon} alt="" /></span>
                        <input  {...register("password")}  placeholder='Digite sua senha' />
                   </div>
                   <p className='error-msg-form'>{errors.password?.message}</p>
                </div>

                <div className="cx-button">
                     <input type={'submit'} className='link'  value={'Entrar'}/>
                </div>
                <div className="link-register">
                  <p>Nao tem registro ? <Link to='/register'>clique aqui</Link></p>
                </div>
            </form>


        </S.ContainerForm>
        <S.ContainerImage>
            <img src={NoteImage} alt="" />
        </S.ContainerImage>
        </S.Login>
    
    </>



}