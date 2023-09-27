import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Data from "../../Components/Data/Data";


const Home = () => {


    const data = useLoaderData();
    console.log(data);



    return (
        <div>
            

            <Banner></Banner>

            <Data data={data}></Data>


        </div>
    );
};

export default Home;