import * as S from './styled'
import { Link } from 'react-router-dom'
import { ChangeEvent,useEffect,useState} from 'react'
import userIcon from '../../assets/images/user.svg'
import emailIcon from '../../assets/images/email.svg'
import passwordIcon from '../../assets/images/password.svg'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import NoteImage from './../../assets/images/noteApp.png'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './../../helpers/yupMessage'


type Inputs={
    email: string,
    password: string,
    name:string
}
export const Register=()=>{
    

    const schema = yup.object({
        email: yup.string().email().required(),
        name:yup.string().required(),
        password: yup.string().required(),
      }).required();

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver:yupResolver(schema)
    });
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);




    return <>
    <S.RegisterContainer>
        <S.FormRegister onSubmit={handleSubmit(onSubmit)}>
        <h3>Cadastro</h3>
            <div className='error-msg-form' >
               <div className="cx-form-register">
                <span><img src={userIcon} alt="" /></span>
                    <input type="text" 
                            {...register('name')}
                            placeholder='Digite seu nome'
                      />
               </div>
               <p>{errors.name?.message}</p>
            </div>
            <div className='error-msg-form' >
               <div className="cx-form-register">
                    <span><img src={emailIcon} alt="" /></span>
                        <input type="email" 
                            {...register('email')}
                            placeholder='Digite seu email'
                        />
               </div>
               <p>{errors.email?.message}</p>
            </div>
            <div className='error-msg-form' >
               <div className="cx-form-register">
                    <span><img src={passwordIcon} alt="" /></span>
                        <input type="password" 
                            {...register('password')}
                          placeholder='Digite uma senha'/>
               </div>
               <p>{errors.password?.message}</p>
            </div>
             <div className="cx-register-btn">
                <input type={'submit'}   value='inscrever-se'  />
             </div>




        </S.FormRegister>
        <S.ContainerImage>
            <img src={NoteImage} alt="" />
        </S.ContainerImage>
    </S.RegisterContainer>
    

    </>


}