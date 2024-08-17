import React from "react";
import { Button, DatePicker, Textarea } from "@nextui-org/react";
console.log("다이어리 작성 페이지");

export default function DiaryInputPage() {
  return (
    <>
      <form>
        <Textarea label="제목" placeholder="제목입력칸" className="max-w-xs" />
        <DatePicker label="날짜" className="max-w-[284px]" />
        <Textarea label="내용" placeholder="내용입력칸" className="max-w-xs" />
        <Button type="submit">저장</Button>
      </form>
    </>
  );
}
