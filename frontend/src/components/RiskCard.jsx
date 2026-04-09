export default function RiskCard({ zone }) {
  const getRiskClass = () => {
    if (zone.risk === "High") return "high";
    if (zone.risk === "Medium") return "medium";
    return "low";
  };

  return (
    <div className={`card ${getRiskClass()}`}>
      <h3>📍 {zone.area}</h3>
      <p>
        ⚠ Risk: <strong>{zone.risk}</strong>
      </p>
      <p>🧠 Reason: {zone.reason}</p>
      <p>💡 Tip: {zone.suggestion}</p>
    </div>
  );
}
