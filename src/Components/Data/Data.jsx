import DataCard from "./DataCard";


const Data = ({data}) => {

    console.log(data);

    return (
        <div>

            <div className=" py-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 ">
                {
                    data.map( data  => <DataCard data={data} key={data.id}></DataCard>)
                }
            </div>
            
        </div>
    );
};

export default Data;