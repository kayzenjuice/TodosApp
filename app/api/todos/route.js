import { NextResponse } from "next/server";

let todos = [
  { id: 1, name: "Get Groceries" },
  { id: 2, name: "Do Homework" },
  { id: 3, name: "Go to the gym" },
];

export async function GET() {
  return NextResponse.json({ todos });
}

export async function DELETE(request) {
  const data = await request.json();
  console.log(data);
  todos = todos.filter((todo) => todo.id !== data.id);
  return NextResponse.json({ todos });
}

export async function POST(request) {
  const data = await request.json();
  const newTodo = { id: todos.length + 1, name: data.todoName };
  todos.push(newTodo);

  console.log(todos);

  return NextResponse.json({ todos });
}
