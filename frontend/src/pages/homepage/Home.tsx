
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { fetchApiData } from "../../redux/features";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.api);
  const [fetch, setFetch] = useState(false);
  const fatContent = data['fatContent'];
  const inflared = fatContent?.filter((item: any) => item !== null && item.inflared !== null)?.map((item: any) => item.inflared);
  const inflaredTime = fatContent?.filter((item: any) => item !== null && item.inflared !== null)?.map((item: any) => new Date(item.createdAt).toLocaleDateString());

  const density = fatContent?.filter((item: any) => item !== null && item.density !== null)?.map((item: any) => item.density);
  const densityTime = fatContent?.filter((item: any) => item !== null && item.density !== null)?.map((item: any) => new Date(item.createdAt).toLocaleDateString());

  // const color = fatContent
  useEffect(() => {

    const interval = setInterval(() => {
      dispatch(fetchApiData('/api/auth/fatContent'));
    }, 5000);

    return () => clearInterval(interval);
  }, [])
  console.log(inflared?.length, inflaredTime?.length);
  const chartData = {
    labels: inflaredTime,
    datasets: [
      {
        label: "Infrared",
        data: inflared,
        borderColor: "#C8ECCC",
        backgroundColor: "#F0FAF1",
        pointBorderColor: "#AAA",
        pointBackgroundColor: "#FEF1F1"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Infrared",
      }
    },
    scales: {
      y: {
        min: 0,
        max: 1200,
        ticks: {
          stepSize: 3,
        }
      }
    }
  };
  const chartData2 = {
    labels: densityTime,
    datasets: [
      {
        label: "Density",
        data: density,
        borderColor: "#C8ECCC",
        backgroundColor: "#F0FAF1",
        pointBorderColor: "#AAA",
        pointBackgroundColor: "#FEF1F1"
      }
    ]
  };

  const options2 = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Density",
      }
    },
    scales: {
      y: {
        min: 0,
        max: 70,
        ticks: {
          stepSize: 3,
        }
      }
    }
  };

  return (<div>
    <div className="h-[50%] w-[50%]"><Line data={chartData} width={300} height={300} options={options} /></div>
    <div className="h-[50%] w-[50%]"><Line data={chartData2} width={300} height={300} options={options2} /></div>
  </div>);
};

export default LineChart;
