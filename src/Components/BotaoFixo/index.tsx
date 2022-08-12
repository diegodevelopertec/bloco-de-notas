import './style.css'

type Props={
    activateOnModal:()=>void
}
export const BotaoFixo=({activateOnModal}:Props)=>{
    return <button onClick={activateOnModal} className='botao-fixo'> + </button>
}