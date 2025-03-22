const SlowComponent3s = async () => {
  const slowRes = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data = await slowRes.json();
  return <div>{JSON.stringify(data)}</div>;
};

export default SlowComponent3s;
