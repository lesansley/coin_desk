async function fetcher(...args) {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export default fetcher;
