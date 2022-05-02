import React, { useState, useEffect } from 'react';
import * as Api from "../../api";
import { BarChart, Bar, XAxis, YAxis,
	CartesianGrid, Legend, Tooltip } from 'recharts';

const HobbyChart = () => {
  // ** 백엔드랑 통신하면 애니메이션이 적용되지 않음 **
  // const [dataList, setDataList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  
  // async function getDataList() {
  //   try {
  //     const { data } = await Api.get('stats?groupName=hobby');
  //     setDataList([...Object.values(data.payload)]);
  //     console.log(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   getDataList();
  // }, []);

	const data = [
    { name: '교육', 여성: 32, 남성: 32, z: 122 },
    { name: '놀이', 여성: 16, 남성: 49, z: 73 },
    { name: '운동', 여성: 12, 남성: 54, z: 32 },
    { name: '음악', 여성: 34, 남성: 30, z: 23 },
    { name: '자연', 여성: 27, 남성: 39, z: 20 },
    { name: '패션', 여성: 66, 남성: 0, z: 61 },
  ];

	return (
		<BarChart className="graphBack" width={1200} height={500} data={data} >
			<CartesianGrid />
			<XAxis dataKey="name" />
			<YAxis />
      <Tooltip />
      <Legend />
			<Bar dataKey="여성" stackId="a" fill="#F5F197" />
			<Bar dataKey="남성" stackId="a" fill="#BDDBF0" />
		</BarChart>
	);
}

export default HobbyChart;
