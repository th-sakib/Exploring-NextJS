import SlowComponent2s from "@/components/SlowComponent2s";
import SlowComponent3s from "@/components/SlowComponent3s";
import TodoItems from "@/components/TodoItems";
import { Suspense } from "react";

const fetchApi = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const Todos = async () => {
  //   const slowRes = await fetch("https://procodrr.vercel.app/?sleep=4000");
  //   const data = await slowRes.json();

  //   const slowRes1 = await fetch("https://procodrr.vercel.app/?sleep=3000");
  //   const data1 = await slowRes1.json();

  //  ================== parellel data fetching =======================
  //   const [fourSecDelayRes, threeSecDelayRes] = await Promise.all([
  //     fetch("https://procodrr.vercel.app/?sleep=5000"),
  //     fetch("https://procodrr.vercel.app/?sleep=5000"),
  //   ]);

  //   const [fourSecDelay, threeSecDelay] = await Promise.all([
  //     fourSecDelayRes.json(),
  //     threeSecDelayRes.json(),
  //   ]);

  const [fourSecDelay, threeSecDelay] = await Promise.all([
    fetchApi("https://procodrr.vercel.app/?sleep=5000"),
    fetchApi("https://procodrr.vercel.app/?sleep=5000"),
  ]);

  console.log(fourSecDelay, threeSecDelay);

  return (
    <>
      {/* <h1>Todos</h1>
      <Suspense fallback={"loading todo"}>
        <TodoItems />
      </Suspense>

      <Suspense fallback={"loading todo for 3 sec"}>
        <SlowComponent3s />
      </Suspense>
      <br />
      <Suspense fallback={"loading todo for 2 sec"}>
        <SlowComponent2s />
      </Suspense>

      {JSON.stringify(data)}
      {JSON.stringify(data1)} */}
    </>
  );
};

export default Todos;
