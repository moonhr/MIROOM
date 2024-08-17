// import Image from "next/image";
"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  const handleDiaryClick = () => {
    router.push("/diary/page");
  };

  const handleBucketListClick = () => {
    router.push("/bucketList/page");
  };

  return (
    <div>
      <Button color="primary" variant="shadow" onClick={handleDiaryClick}>
        다이어리
      </Button>
      <Button color="primary" variant="shadow" onClick={handleBucketListClick}>
        버킷리스트
      </Button>
    </div>
  );
}

export default Home;
