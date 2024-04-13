"use client";
import React from "react";
import { useGlobalState } from "../context/GlobalProvider";
import Tasks from "../components/Task/Task";

function page() {
  const { completedTasks } = useGlobalState();

  return <Tasks title="Completed Tasks" tasks={completedTasks} />;
}

export default page;