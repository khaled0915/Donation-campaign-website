

const DataDetailsCard = ({data}) => {

    const {id , title , image , description , price , text_bg , card_bg ,category_bg , category , detailed_description} = data || {}


    return (
        <div className="h-[70vh] flex justify-center items-center flex flex-col py-10 ">





  <figure className="flex flex-col">
    
    <img className="lg:w-[1000px]  rounded-md bg-[#0B0B0B80] lg:h-[500px]" src={image} alt="car!"/>

    
      <button style={{

        backgroundColor : category_bg 


      }} className="btn  btn-primary"> Donate ${price} </button>
    
    
    </figure>




 

  




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