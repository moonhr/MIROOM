import React from "react";
import { button, DatePicker, Textarea } from "@nextui-org/react";
console.log("다이어리 작성 페이지");

export default function DiaryInputPage() {
  return (
    <>
      <form>
        <Textarea label="제목" placeholder="제목입력칸" className="max-w-xs" />
        <Textarea label="내용" placeholder="내용입력칸" className="max-w-xs" />
        <button type="submit">저장</button>
      </form>
    </>
  );
}
