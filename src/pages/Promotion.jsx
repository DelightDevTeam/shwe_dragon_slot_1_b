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
  const promotionData = [mb1, mb2, mb3, sb1, sb2, sb3, db1, db2]
  return (
    <div className='px-3 px-sm-5 py-3 py-sm-5'>
      <h1 className="text-center text-light mt-4 mb-3 mb-lg-5">Promotions</h1>

      {promotionData.map((img) => {
        return (
          <>
          <a href='/promotionDetail'>
            <img className='mx-auto my-2 proImg mb-4' src={img} />
          </a>
          </>
        );
      })}




    </div>
  );
}

export default PromotionPage;