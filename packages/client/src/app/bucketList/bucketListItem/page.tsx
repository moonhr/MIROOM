import React from "react";
import { Checkbox } from "@nextui-org/react";

const dummyChecklist = [
  { id: 1, label: "Visit the Eiffel Tower", checked: true },
  { id: 2, label: "Swim in the Great Barrier Reef", checked: false },
  { id: 3, label: "Hike the Grand Canyon", checked: true },
];

export default function BucketListItem() {
  return (
    <>
      {dummyChecklist.map((item) => (
        <Checkbox key={item.id} defaultSelected={item.checked}>
          {item.label}
        </Checkbox>
      ))}
    </>
  );
}
