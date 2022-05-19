import {useRouter} from 'next/router';
import Display from '../../comps/Display';

import {header, bee1, bee2, bee1Imgs, bee2Imgs} from '../../data/cate_content';

export default function Categories(){
    const r = useRouter();

    const {page, type} = r.query;

    return <div>
        <h1> Categories #{page} - {type} </h1>

        {
          page === undefined ? <h1>Select "Try Router"</h1>: <h1>You are on question #{page}</h1>
        }

        <button onClick={
            ()=>console.log(r)
        }>COnsole log the router</button>

        <button onClick={
            ()=>r.replace({
                pathname:"/categories",
                query:{
                    page:page === undefined ? 1 : Number(page) +1,
                    type:"sports"
                }
            })
        }>
            try routing
        </button>
        <div>
          <h3>{header} - {type}</h3>
          <div>

            <div onClick={
              ()=>r.replace({
                pathname:"/categories",
                query: {
                  type:bee1.route
                }
              })
            }>
              {bee1.title}
            </div>

            <div onClick={
              ()=>r.replace({
                pathname:"/categories",
                query: {
                  type:bee2.route
                }
              })
            }>
              {bee2.title}
            </div>

            {
              type === 'fo' && <div>
                SHOW THE FOOD IMAGES
                {
                  bee1Imgs.map((o,i)=><img src={o} height={100} />)
                }
                <Display arr={bee1Imgs} />
              </div>
            }

            {
              type === 'an' && <div>
                SHOW THE Animal IMAGES
                {
                  bee2Imgs.map((o,i)=><img src={o} height={100} />)
                }
                <Display arr={bee2Imgs} />
              </div>
            }

          </div>
        </div>
    
    </div>

}