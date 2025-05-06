
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

  const color = fatContent?.filter((item: any) => item !== null && item.color !== null)?.map((item: any) => item.color);
  const colorTime = fatContent?.filter((item: any) => item !== null && item.color !== null)?.map((item: any) => new Date(item.createdAt).toLocaleDateString());

  useEffect(() => {

    const interval = setInterval(() => {
      dispatch(fetchApiData('/api/auth/fatContent'));
    }, 5000);

    return () => clearInterval(interval);
  }, [])

  console.log(inflared?.length, inflaredTime?.length);
  const chartDataInflared = {
    labels: inflaredTime,
    datasets: [
      {
        label: "Infrared",
        data: inflared,
        borderColor: "#FF2D00",
        backgroundColor: "#F0FAF1",
        pointBorderColor: "#AAA",
        pointBackgroundColor: "#FEF1F1"
      }
    ]
  };

  const optionsInflared = {
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
  const chartDataDensity = {
    labels: densityTime,
    datasets: [
      {
        label: "Density",
        data: density,
        borderColor: "steelblue",
        backgroundColor: "#F0FAF1",
        pointBorderColor: "#AAA",
        pointBackgroundColor: "#FEF1F1"
      }
    ]
  };

  const optionsDensity = {
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

  const chartDataColor = {
    labels: colorTime,
    datasets: [
      {
        label: "Color",
        data: color,
        borderColor: "#C8ECCC",
        backgroundColor: "#F0FAF1",
        pointBorderColor: "#AAA",
        pointBackgroundColor: "#FEF1F1"
      }
    ]
  };

  const optionsColor = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Color",
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


  const allChartData = {
    labels: inflaredTime,
    datasets: [
      {
        label: "Infrared",
        data: inflared,
        borderColor: "#FF2D00",
        backgroundColor: "#F0FAF1",
        pointBorderColor: "#AAA",
        pointBackgroundColor: "#FEF1F1"
      },
      {
        label: "Density",
        data: density,
        borderColor: "steelblue",
        backgroundColor: "#F0FAF1",
        pointBorderColor: "#AAA",
        pointBackgroundColor: "#FEF1F1"
      },
      {
        label: "Color",
        data: color,
        borderColor: "#C8ECCC",
        backgroundColor: "#F0FAF1",
        pointBorderColor: "#AAA",
        pointBackgroundColor: "#FEF1F1"
      }
    ]
  };

  const optionsAll = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "All Data",
      }
    },
    scales: {
      y: {
        min: 0,
        max: inflared?.length > 0 ? Math.max(...inflared) : 100,
        ticks: {
          stepSize: 3,
        }
      }
    }
  };
  return (<div className="flex flex-wrap  items-center justify-center h-screen w-screen text-center">
    <div className=""><Line data={allChartData} width={400} height={400} options={optionsAll} /></div>
    <div className=""><Line data={chartDataInflared} width={400} height={400} options={optionsInflared} /></div> <br />
    <div className=""><Line data={chartDataDensity} width={400} height={400} options={optionsDensity} /></div>
    <div className=""><Line data={chartDataColor} width={400} height={400} options={optionsColor} /></div>

  </div>);
};

export default LineChart;
