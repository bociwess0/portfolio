import React from "react";
import { Job } from "../types";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="flex gap-3">
      <div className="text-slate-400 font-medium text-xs leading-relaxed uppercase flex-[0_0_25%] mt-1">
        {job.duration}
      </div>
      <div className="flex flex-col gap-3 flex-[0_0_75%]">
        <div className="text-white font-semibold text-lg">
          {job.position} · {job.company}
        </div>
        <div className="text-slate-400 leading-relaxed">{job.description}</div>
        <div className="flex gap-2 flex-wrap">
          {job.technologies &&
            job.technologies.map((tech: string, index) => (
              <div
                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                key={index}
              >
                {tech}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
