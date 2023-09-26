

const DonationCard = ({data}) => {

    const {id , title , image , description , price , text_bg , card_bg ,category_bg , category , detailed_description} = data || {}
    return (
        <div>




<div className="card card-side bg-base-100 shadow-xl">


<figure><img src={image} alt="Movie"/></figure>


<div className="card-body">
  <h2 className="card-title">{title}</h2>
  <p>{description}</p>
  <p> ${price} </p>
  <div className="card-actions justify-start">
    <button className="btn btn-primary">View Details</button>
  </div>
</div>
</div>
            
        </div>
    );
};

export default DonationCard;