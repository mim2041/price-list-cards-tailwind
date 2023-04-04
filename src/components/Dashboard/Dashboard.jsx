import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const marksArray = [
        {
          id: 1,
          name: 'John',
          math: 80,
          physics: 70,
          chemistry: 75
        },
        {
          id: 2,
          name: 'Emily',
          math: 90,
          physics: 85,
          chemistry: 80
        },
        {
          id: 3,
          name: 'James',
          math: 85,
          physics: 95,
          chemistry: 90
        },
        {
          id: 4,
          name: 'Sarah',
          math: 70,
          physics: 80,
          chemistry: 75
        },
        {
          id: 5,
          name: 'David',
          math: 75,
          physics: 65,
          chemistry: 80
        },
        {
          id: 6,
          name: 'Amanda',
          math: 95,
          physics: 90,
          chemistry: 85
        },
        {
          id: 7,
          name: 'Michael',
          math: 80,
          physics: 75,
          chemistry: 70
        },
        {
          id: 8,
          name: 'Olivia',
          math: 85,
          physics: 90,
          chemistry: 95
        },
        {
          id: 9,
          name: 'Rachel',
          math: 90,
          physics: 80,
          chemistry: 75
        },
        {
          id: 10,
          name: 'Benjamin',
          math: 70,
          physics: 75,
          chemistry: 80
        }
      ];
      
    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={marksArray}
            >
                <Line dataKey='physics'></Line>
                <Line stroke="#8884d8" dataKey='math'></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;