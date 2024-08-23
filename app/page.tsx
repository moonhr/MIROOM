// import Image from "next/image";
"use client";
import BucketListItem from "./component/bukect_list";
import DiaryInputPage from "./component/diary_input";
import { useState } from "react";

function Home() {
  const [selectedSection, setSelectedSection] = useState("");

  return (
    <>
      <div>
        <button color="primary" onClick={() => setSelectedSection("A")}>
          다이어리
        </button>
        <button color="primary" onClick={() => setSelectedSection("B")}>
          버킷리스트
        </button>
      </div>
      <main>
        {selectedSection === "A" && <BucketListItem />}
        {selectedSection === "B" && <DiaryInputPage />}
      </main>
    </>
  );
}

export default Home;
