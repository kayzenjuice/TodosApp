import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ id: "one" }, { id: "two" }, { id: "three" }];
}

async function page({ params }) {
  const response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-store",
  });

  const data = await response.json();

  const noteData = data.todos.filter((todo) => todo.id === parseInt(params.id));

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 font-sans">
      <div className="mb-4 text-3xl font-bold text-blue-900">
        Note ID: {params.id}
      </div>
      <div className="mb-4 text-xl font-medium text-gray-800">
        Note Name: {noteData[0].name}
      </div>
    </div>
  );
}

export default page;
