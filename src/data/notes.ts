import { List } from "../types/list"

let d=new Date()
export const Notes:List[]=[
 {id:1,title:'aprenda Node',content:'estou estudando node js',data:d.toLocaleDateString()},
    {id:2,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:3,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:4,title:'aprenda Mongoose',content:'estou estudando mongo js',data:d.toLocaleDateString()},
    {id:5,title:'aprenda css',content:'estou estudando css',data:d.toLocaleDateString()},
    {id:6,title:'aprenda Node',content:'estou estudando node js',data:d.toLocaleDateString()},
    {id:7,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:8,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:9,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:10,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:11,title:'aprenda Mongoose',content:'estou estudando mongo js',data:d.toLocaleDateString()},
    {id:12,title:'aprenda css',content:'estou estudando css',data:d.toLocaleDateString()},
    {id:13,title:'aprenda Node',content:'estou estudando node js',data:d.toLocaleDateString()},
    {id:14,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:15,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:16,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:17,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:18,title:'aprenda Mongoose',content:'estou estudando mongo js',data:d.toLocaleDateString()},
    {id:19,title:'aprenda css',content:'estou estudando css',data:d.toLocaleDateString()},
    {id:20,title:'aprenda Node',content:'estou estudando node js',data:d.toLocaleDateString()},
    {id:21,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:22,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:23,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:24,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:25,title:'aprenda Mongoose',content:'estou estudando mongo js',data:d.toLocaleDateString()},
    {id:26,title:'aprenda css',content:'estou estudando css',data:d.toLocaleDateString()},
    {id:27,title:'aprenda Node',content:'estou estudando node js',data:d.toLocaleDateString()},
    {id:28,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:29,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:1,title:'aprenda Node',content:'estou estudando node js',data:d.toLocaleDateString()},
    {id:2,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:3,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:4,title:'aprenda Mongoose',content:'estou estudando mongo js',data:d.toLocaleDateString()},
    {id:5,title:'aprenda css',content:'estou estudando css',data:d.toLocaleDateString()},
    {id:6,title:'aprenda Node',content:'estou estudando node js',data:d.toLocaleDateString()},
    {id:7,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:8,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:9,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:10,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:11,title:'aprenda Mongoose',content:'estou estudando mongo js',data:d.toLocaleDateString()},
    {id:12,title:'aprenda css',content:'estou estudando css',data:d.toLocaleDateString()},
    {id:13,title:'aprenda Node',content:'estou estudando node js',data:d.toLocaleDateString()},
    {id:14,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:15,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:16,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:17,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:18,title:'aprenda Mongoose',content:'estou estudando mongo js',data:d.toLocaleDateString()},
    {id:19,title:'aprenda css',content:'estou estudando css',data:d.toLocaleDateString()},
    {id:20,title:'aprenda Node',content:'estou estudando node js',data:d.toLocaleDateString()},
    {id:21,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:22,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:23,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:24,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},
    {id:25,title:'aprenda Mongoose',content:'estou estudando mongo js',data:d.toLocaleDateString()},
    {id:26,title:'aprenda css',content:'estou estudando css',data:d.toLocaleDateString()},
    {id:27,title:'aprenda Node',content:'estou estudando node js',data:d.toLocaleDateString()},
    {id:28,title:'aprenda React',content:'estou estudando react js',data:d.toLocaleDateString()},
    {id:29,title:'aprenda Desenvolvimento web',content:'estou estudando dev web',data:d.toLocaleDateString()},

]

{/*<S.Main id='list-container'>
          <S.ListContainer>
            { list.length !== 0 ?  list.map((item,index)=>(
                  <div key={index} >
                      <Card id={item.id} title={item.title} content={item.content} data={item.data} />
                  </div>)) 
                  :
                     <S.ErrorMensage >
                        <div>
                            <h3> Nenhuma anotação ainda {iconError}</h3>
                        </div>
                     </S.ErrorMensage>
            }
            
          </S.ListContainer>
          <BotaoFixo activateOnModal={actionsModal.openModal}/>
            
       </S.Main>
          */}