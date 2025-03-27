"use client";

function error({ reset }) {
  return (
    <div>
      <p>clint side exception occurs</p>
      <button
        onClick={() => {
          reset();
        }}
      >
        try again
      </button>
    </div>
  );
}

export default error;
