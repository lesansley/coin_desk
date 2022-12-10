function LastUpdated(date) {
  if (!date) return null;
  return <div style={{ fontSize: "10px" }}>Last updated: {Date(date)}</div>;
}

export default LastUpdated;
