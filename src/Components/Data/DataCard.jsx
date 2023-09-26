

const DataCard = ({data}) => {

    console.log(data)

    const {id , title , image , description , price , text_bg , card_bg ,category_bg , category } = data || {}

    return (
        <div>


<div style={{backgroundColor:card_bg}} className="card card-compact w-[300px] h-[200px] bg-base-100 shadow-xl">
  <figure>
    <img className="" src={image} alt="Shoes" />

    </figure>
  <div className="card-body">


    <h2 className="font-normal "

     style={{
        
        color:category_bg,
        backgroundColor :text_bg,
        width :70,
        padding :8,
        borderRadius :5
        
    
    }} 
      >{title} </h2>


    <p className="font-semibold" style={{color:text_bg}}>{description}</p>
   
  </div>
</div>
            
        </div>
    );
};

export default DataCard;