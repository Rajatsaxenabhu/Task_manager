"use client";
import React from "react";
import { useGlobalState } from "../context/GlobalProvider";
import Tasks from "../components/Task/Task";

function page() {
  const { incompleteTasks } = useGlobalState();
  return <Tasks title="Incomplete Tasks" tasks={incompleteTasks} />;
}

export default page;