"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IoMdArrowBack } from "react-icons/io";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className="flex items-center gap-2">
      <IoMdArrowBack className="w-4 h-4" />
      Back
    </Button>
  );
}
