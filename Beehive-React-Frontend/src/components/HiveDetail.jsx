import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Expand, Minimize } from "lucide-react";
import HiveDetailBasicInfo from "./HiveDetailBasicInfo";
import axios from "axios";
import { API_ENDPOINTS, getAuthHeader } from "../config/apiConfig";

// Utility to generate chart data
const generateRandomData = (min, max) =>
  Array.from({ length: 12 }, (_, i) => ({
    time: `${i + 1}:00`,
    value: Math.floor(Math.random() * (max - min + 1)) + min,
  }));

const HiveDetail = () => {
  const { hiveId } = useParams();
  const [hive, setHive] = useState(null);
  const [isFullWidth, setIsFullWidth] = useState(false);

  const temperatureData = generateRandomData(25, 35);
  const humidityData = generateRandomData(10, 50);
  const weightData = generateRandomData(50, 65);
  const uvIndexData = generateRandomData(0, 10);
  const batteryData = generateRandomData(80, 100);

  const chartData = [
    { label: "Temperature", data: temperatureData, color: "#FF5733" },
    { label: "Humidity", data: humidityData, color: "#3498DB" },
    { label: "Weight", data: weightData, color: "#2ECC71" },
    { label: "UV Index", data: uvIndexData, color: "#F39C12" },
    { label: "Battery", data: batteryData, color: "#1ABC9C" },
  ];


  useEffect(() => {
    const fetchHive = async () => {
      const res = await axios.get(`${API_ENDPOINTS.BEEHIVES}/${hiveId}`, getAuthHeader());
      setHive(res.data);
    };
    fetchHive();
  }, [hiveId]);

  if (!hive) return null;

  return (
    <div className="p-6 bg-white min-h-screen w-full">
      <HiveDetailBasicInfo hiveId={hiveId} hive={hive} />

      <div className="flex justify-center mt-4">
        <button
          className="flex items-center px-4 py-2 bg-amber-300 text-black rounded-lg hover:bg-blue-600 transition"
          onClick={() => setIsFullWidth(!isFullWidth)}
        >
          {isFullWidth ? (
            <Minimize size={18} className="mr-2" />
          ) : (
            <Expand size={18} className="mr-2" />
          )}
          {isFullWidth ? "Compact View" : "Full-Width View"}
        </button>
      </div>

      <div
        className={`mt-6 grid ${
          isFullWidth ? "grid-cols-1" : "grid-cols-2 gap-6"
        }`}
      >
        {chartData.map(({ label, data, color }) => (
          <div
            key={label}
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-full"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              {label} Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={color}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiveDetail;
