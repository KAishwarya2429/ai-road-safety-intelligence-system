export default function MapView({ zone }) {
  return (
    <div className="glass" style={{ marginTop: "10px" }}>
      <iframe
        width="100%"
        height="250"
        src={`https://www.google.com/maps?q=${zone.area} Pune&output=embed`}
        loading="lazy"
      ></iframe>
    </div>
  );
}
