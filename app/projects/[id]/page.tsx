"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import { ProjectDetail } from "@/components/ProjectDetail";
import { notFound, useRouter } from "next/navigation";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const projectId = parseInt(resolvedParams.id);
  const project = projects.find((p) => p.id === projectId);
  const router = useRouter();

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4">
        <ProjectDetail project={project} onBack={() => router.back()} />
      </div>
    </div>
  );
}
