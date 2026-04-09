import { roadSafetyData } from "../data/mockData.js";

export const analyzeRisk = () => {
  return roadSafetyData.pune.map((zone) => ({
    ...zone,
    suggestion:
      zone.risk === "High"
        ? "Avoid peak hours (6–9 PM)"
        : zone.risk === "Medium"
          ? "Drive cautiously"
          : "Safe to travel",
  }));
};
