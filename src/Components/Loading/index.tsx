import ReactLoading from 'react-loading';
import {ContainerLoading} from './style'


type Props={
	typeLoad:any,
	color:string,
	text:string
}
export const Loading = ({typeLoad,color,text}:Props) => {
	return <ContainerLoading>
		<ReactLoading type={typeLoad} color={color} height={120} width={120} />
		<div className="p">{text}</div>
	</ContainerLoading>
}
