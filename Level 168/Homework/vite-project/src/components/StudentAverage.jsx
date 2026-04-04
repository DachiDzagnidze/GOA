import React, { useState } from "react";

export function StudentAverage() {
  const students = [
    { name: "Dachi", score: 100 },
    { name: "Mariola", score: 77 },
    { name: "Fifo", score: 60 },
  ];

  const average =
    students.reduce((sum, student) => sum + student.score, 0) / students.length;

  return (
    <div className="student-average-card">
      <h2>Student Average</h2>
      <p>the average score of the students is: {average}</p>
    </div>
  );
}