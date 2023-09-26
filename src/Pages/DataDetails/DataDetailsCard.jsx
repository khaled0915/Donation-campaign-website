import { json } from "react-router-dom";


const DataDetailsCard = ({data}) => {





    const handleDonation =() =>{

        console.log(data);


        const donationData = JSON.parse(localStorage.getItem('DonatedData'))

        const addToDonationPage = [];

        if(!donationData){
            addToDonationPage.push(data)
            localStorage.setItem('DonatedData' , JSON.stringify(addToDonationPage))
            // alert('this item is added');
        }

        else {
            const isExits = donationData.find( data => data.id == id  );
            console.log(isExits);
            if(!isExits){
                addToDonationPage.push(...donationData , data)
                localStorage.setItem('DonatedData' , JSON.stringify(addToDonationPage))
                alert('added')
            }
            else{
                alert('already added')
            }
        }

        console.log(donationData);









    }














    const {id , title , image , description , price , text_bg , card_bg ,category_bg , category , detailed_description} = data || {}


    return (
        <div className="h-[70vh] flex justify-center items-center  flex-col py-10 ">






<div className="relative">
  <img src={image}  alt="Your Image" className="lg:w-[1000px] w-[300px] md:w-[700px] md:h-[400px] h-[200px] lg:h-[500px]" />

  
  <div className="absolute bottom-0 left-0 w-[300px] md:w-[700px]  lg:w-[1000px] md:h-20 h-20 lg:h-16 bg-black opacity-50"></div>

  
  <div className="absolute bottom-0 left-0 p-4">


    <button

    onClick={handleDonation}

style={{

    backgroundColor : category_bg 


  }}
    
    
    className="bg-blue-500 hover:bg-orange-600 text-white py-2 px-4 rounded ">
    Donate ${price}
    </button>
  </div>
</div>






 

  




<div className="">
    
    <p className="text-[#0B0B0B] text-[40px] font-bold">{description}</p>

    <span>

{detailed_description}


</span>

   
    
  </div>



  



            
        </div>
    );
};

export default DataDetailsCard;