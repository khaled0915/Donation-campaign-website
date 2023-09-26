

const DonationCard = ({data}) => {

    const {id , title , image , description , price , text_bg , card_bg ,category_bg , category , detailed_description} = data || {}
    return (
        <div>




<div style={{backgroundColor:card_bg}} className="card card-side bg-base-100 shadow-xl">


<figure><img src={image} alt="Movie"/></figure>


<div className="card-body">

  <h2 style={{
    
    color:category_bg,
    backgroundColor :text_bg,
    width :100,
    padding :8,
    borderRadius :5 

}} className="card-title font-bold">{title}</h2>


  <p className="font-semibold" style={{color:text_bg}}>{description}</p>
  <p style={{
    color:category_bg
  }}> ${price} </p>


  <div className="card-actions justify-start">
    <button style={{
        backgroundColor:category_bg,
        

    }} className="btn text=[#FFF] btn-primary">View Details</button>
  </div>
</div>
</div>
            
        </div>
    );
};

export default DonationCard;