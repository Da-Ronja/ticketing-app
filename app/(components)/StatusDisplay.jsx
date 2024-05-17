import React from "react";
import { capitalize } from "@/utils";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";

    switch (status.toLowerCase()) {
      case "not started":
        color = "bg-gray-200 text-gray-800";
        break;
      case "open":
        color = "bg-blue-200 text-blue-800";
        break;
      case "in progress":
        color = "bg-yellow-200 text-yellow-800";
        break;
      case "resolved":
        color = "bg-green-200 text-green-800";
        break;
      case "closed":
        color = "bg-red-200 text-red-800";
        break;
      case "pending":
        color = "bg-orange-200 text-orange-800";
        break;
      case "reopened":
        color = "bg-purple-200 text-purple-800";
        break;

      default:
        break;
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${getColor(
        status
      )}`}
    >
      {capitalize(status)}
    </span>
  );
};

export default StatusDisplay;
("not started");
("open");
("in progress");
("resolved");
("closed");
("pending");
("reopened");
