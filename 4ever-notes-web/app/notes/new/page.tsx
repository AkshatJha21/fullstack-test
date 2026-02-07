"use client";

import { TipTapEditor } from "@/components/notes/tiptap_editor"
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const CreateNotePage = () => {
    const router = useRouter();
  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-lg font-semibold">
            New Note
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        <input
          placeholder="Note title"
          onChange={() => {}}
          className="text-xl font-semibold border-none shadow-none px-0 focus-visible:ring-0"
        />
        <TipTapEditor content={undefined} onChange={() => {}} />
        <div className="flex gap-2 pt-4">
          <Button onClick={() => {}}>Save Note</Button>
          <Button variant="ghost" onClick={() => router.push("/dashboard")}>
            Cancel
          </Button>
        </div>
      </main>
    </div>
  )
}

export default CreateNotePage
