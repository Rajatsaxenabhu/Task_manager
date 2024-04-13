"use client";
import Tasks from "@/app/components/Task/Task";
import { useGlobalState } from "@/app/context/GlobalProvider";

export default function Home() {
  const { tasks } = useGlobalState();

  return <Tasks title="All Tasks" tasks={tasks} />;
}