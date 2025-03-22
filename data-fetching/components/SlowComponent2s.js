async function SlowComponent2s() {
  const slowRes = await fetch("https://procodrr.vercel.app/?sleep=2000");
  const data = await slowRes.json();
  return <div>{JSON.stringify(data)}</div>;
}

export default SlowComponent2s;
