import React from 'react';
import { menCollection, womenCollection } from "../utilities/data";
import { useParams,useNavigate } from "react-router-dom";
import productStyle from '../styles/productDisplay.module.css';
import { useUserAuth } from '../utilities/UserAuthContextProvider';

function Promo() {
  const {user} = useUserAuth();
  const { id } = useParams();
  const allProducts = menCollection.concat(womenCollection);
  const product = allProducts.find(c => c.id == id);
  const navigate = useNavigate();

  return (
    <div className={productStyle.prodDisplay}>
        <div className={productStyle.imgDiv}>
          <img src={product.image_url} className={productStyle.img}/>
        </div>
        <div className={productStyle.discountDiv}>
          <div className={productStyle.rulesDiv}>
             <h3 className={productStyle.rulesHeading}>Rule</h3>
             <p className={productStyle.rules}>Invite 9 of your friends and families to buy and get 70% off or join an existing group of people buying the same product</p>
          </div>
          <div className={productStyle.referralDiv}>
            <label htmlFor="Referral link" className={productStyle.referralLabel}>Referral Link</label>
            <input value={`www.apple.com/referal/${user.uid}`} className={productStyle.referral}readOnly/>
            <button className={productStyle.copy}>Copy</button>
          </div>
          <h1 className='or mt-2 text-sm'>OR</h1>
          <div className={productStyle.existingGroupButtonDiv}>
            <button className={productStyle.existingGroupButton} onClick={() => {
          navigate(`/Promo/${id}/Groups`)}}>Click to join existing group</button>
          </div>
        </div>
    </div>
  )
}

export default Promo;