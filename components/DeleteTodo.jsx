"use client";

import { useRouter } from "next/navigation";

async function DeleteTodo({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const response = await fetch(`http://localhost:3000/api/todos`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

    if (response.ok) {
      router.refresh();
    } else {
      throw new Error("Something went wrong");
    }
  }

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteTodo;
