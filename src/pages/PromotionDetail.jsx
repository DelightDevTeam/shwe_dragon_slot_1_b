import React from "react";
import promotion from '../assets/img/promotions/mb1.gif'
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";

const PromotionDetail = ()=>{
    const {id} = useParams();
    const {data:promotion} = useFetch(BASE_URL+'/promotion')
    // console.log(id);
    // return;
    return (
        <>
        <img src={promotion} className="w-100" alt="" />
        <div className="text-light m-3">
            <p>🎉ပျော်ရွှင်ကံစမ်း ခရစ်စမတ်ပလန် ရှယ်လန်း🌲 🧑‍🤝‍🧑လူကြီးမင်းတို့နဲ့ အမြဲလက်တွဲနေတဲ့  မိတ်ဟောင်းမိတ်သစ်လေးတွေအတွက် ပေးမယ် Thingyi Promotion တွေကတော့....😉</p>

            <p>☃️🌲☃️🌲☃️🌲

                ✨‌ထိုးတိုင်းပေါက် ပေါက်တိုင်းထောအစီအစဉ်✨ 🔰2D အဆ - 90 (တစ်နေ့ 4 ကြိမ်) 🔰3D အဆ - 700 🔰သွပ်ပတ်လည် - 10 ဆ တို့ကို (December 1 to 31)အထိ တစ်လလုံးပေးမှာဖြစ်ပြီး
            </p>
            <p>နောက်ထပ် New Year လက်ဆောက် အနေနဲ့ 🔹မန်ဘာသစ်ကြိုဆိုဘောနပ် (100%)😮 (Dec 20 to 31)အထိ ပေးမှာဆိုတော့ ဘေးနားကဘော်ဒါတွေကိုလည်း လက်တို့ပြီး အခမဲ့အကောင့်ဖွင့်ကံစမ်းကြရအောင်.....🎉❄️</p>

            <p>✔💸ပရိုမိုးရှင်းအကြောင်းကို အသေးစိတ်သိရှိလိုပါက.. Page Messenger or Viber ph number- 09 111 222 333 , 09 444 555 666 🌐 website- www.abcd.com</p>
        </div>
        </>
    );
}

export default PromotionDetail