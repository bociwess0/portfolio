import React from 'react'
import { HeaderTab, Job } from '../types'
import JobCard from '../ui/JobCard'
interface Props {
    section: HeaderTab
}

export default function Experience({section}: Props) {
  return (
    <section id={section.type} className='flex flex-col gap-15'>
      {section.jobs && section.jobs.map((job: Job, index) => <JobCard key={index} job={job} />)}
    </section>
  )
}
