
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


    
    const Statistics = () => {


        const [storedData, setStoredData] = useState([]);


        console.log(storedData);

        useEffect(() => {


            const donationData = JSON.parse(localStorage.getItem('DonatedData'))

            if (donationData) {
                setStoredData(donationData)
            }

        }, [])

        // console.log(storedData.length)

        const storedDataLength = storedData.length;
        console.log(storedDataLength);

        const statData = useLoaderData();
        console.log(statData.length);
        const statDataLength = statData.length;
        console.log(statDataLength)

        const donatedData = [
            { name: "Total Donation", value: storedDataLength },
            { name: "Your Donation", value: statDataLength },
        ];




        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );

        }

        return (

            <div>
                <h2> this is stat</h2>


                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={ donatedData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {/* {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))} */}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

            </div>
        );
}
    
        
export default Statistics;