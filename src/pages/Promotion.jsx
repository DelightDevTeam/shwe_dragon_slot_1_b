import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import db1 from '../assets/img/promotions/db1.gif'
import db2 from '../assets/img/promotions/db2.gif'
import mb1 from '../assets/img/promotions/mb1.gif'
import mb2 from '../assets/img/promotions/mb2.gif'
import mb3 from '../assets/img/promotions/mb3.gif'
import sb1 from '../assets/img/promotions/sb1.gif'
import sb2 from '../assets/img/promotions/sb2.gif'
import sb3 from '../assets/img/promotions/sb3.gif'
import '../assets/css/promotion.css'
function PromotionPage() {
    const promotionData=[
        {id:0,title:'All',img:[mb1,mb2,mb3,sb1,sb2,sb3,db1,db2]},
        {id:1,title:'New Member Bonus',img:[mb1,mb2,mb3]},
        {id:2,title:'Streamers Bonus Rules',img:[sb1,sb2,sb3]},
        {id:3,title:'DAILY BONUS ',img:[db1,db2]},
    ]
  return (
    <>
    <h1 className="text-center text-light mt-4 mb-lg-5">Promotions</h1>
        <Tabs
      defaultActiveKey="All"
      id="uncontrolled-tab-example"
      className="mb-3  px-1 px-sm-10"
    >
      {promotionData.map((promotion)=>{
        return <Tab className='text-center' eventKey={promotion.title} title={promotion.title}>
        {promotion.img.map((img)=>{
            return <img className='my-2 proImg' src={img} />
        })}
      </Tab>
      })}
      
      
    </Tabs>
    </>
  );
}

export default PromotionPage;