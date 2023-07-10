"use client";

function error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong in the dynamic route!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

export default error;
