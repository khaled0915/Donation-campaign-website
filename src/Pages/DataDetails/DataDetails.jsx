import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DataDetailsCard from "./DataDetailsCard";


const DataDetails = () => {

    const [ showData , setShowData ] = useState({})

    const {id} = useParams();
    console.log(id);
 
    const params = useParams()
    console.log(params);

    const dataDetails = useLoaderData();
    console.log(dataDetails);

    useEffect (()=> {

        const MatchData = dataDetails.find ( data => data.id ==id  )
        // console.log(MatchData);
        setShowData(MatchData);


    } ,[id ,dataDetails ]) 
    console.log(showData);
    return (
        <div>

            

            <div className="py-20">
            <DataDetailsCard data={showData}></DataDetailsCard>
            </div>

      
            
        </div>
    );
};

export default DataDetails;