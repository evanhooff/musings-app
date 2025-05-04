"use client";

import { Button } from "@repo/ui";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button
        className="bg-blue-500 text-white hover:bg-blue-600"
       onClick={() => console.log("Pressed!")}>Text</Button>
    </div>
  );
}
