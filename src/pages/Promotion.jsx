import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../assets/css/promotion.css'
import { NavLink } from 'react-router-dom';
import useFetch from "./../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";


function PromotionPage() {
  const {data:promotions, loading} = useFetch(BASE_URL + '/promotion');
  // console.log(promotions);

  return (
    <div className='px-3 px-sm-5 py-3 py-sm-5'>
      <h1 className="text-center text-light mt-4 mb-3 mb-lg-5">Promotions</h1>
      {
        loading && (
          <div className="text-center">
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
          </div>

        )
      }

      {promotions && promotions.map((promotion, index) => {
        return (
          <div key={index}>
          <NavLink to={'/promotionDetail/'+promotion.id}>
            <img className='mx-auto my-2 proImg mb-4' src={promotion.img_url} />
          </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default PromotionPage;