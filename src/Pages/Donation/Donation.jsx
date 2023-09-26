import { useEffect, useState } from "react";
import DataDetailsCard from "../DataDetails/DataDetailsCard";
import DonationCard from "./DonationCard";

const Donation = () => {


    const [donationInfo , setDonationInfo] = useState([])

    const [noData , setNoData] = useState(false)

    const [isShow , setIsShow] = useState(false)

    const [totalDonation , setTotalDonation]=useState(0)


    const toggleVisibility = () => {
        setIsShow(!isShow);
    }



useEffect( ()=>{


    const donationData =JSON.parse(localStorage.getItem('DonatedData'))

    if(donationData){
        setDonationInfo(donationData);

        const total = donationData.reduce ( (preValue , currentitem) =>  preValue + currentitem.price , 0)
        setTotalDonation(total.toFixed(3));
    }

    else {
        setNoData('no data')

    }




} ,[] )

console.log(donationInfo)



    return (
        <div>


            { noData ? <p> {noData} </p> :

            <div>


                TotalPrice : {totalDonation}



                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">

                    {
                        isShow ? donationInfo.map( data => <DonationCard key={data.id} data={data}></DonationCard>)
                        :
                        donationInfo.slice(0,4).map(data => <DonationCard key={data.id} data={data}></DonationCard>)

                    }




                </div>
                {donationInfo.length > 4 && (
       
       
       <button
          onClick={toggleVisibility}
          className={`text-[#FFF] bg-[#009444] px-5 mx-auto rounded-lg items-center flex py-4 mt-5 ${
            isShow ? 'hidden' : ''
          }`}
        >
          {isShow ? 'See More' : 'See All'}
        </button>
      )}
                







            </div>
            
            
            
            
            
            
            
            }









           



            
        </div>
    );
};

export default Donation;