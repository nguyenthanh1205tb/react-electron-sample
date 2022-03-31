import React, { PropsWithChildren } from 'react'

interface InstallationProps {}
function Installation({}: PropsWithChildren<InstallationProps>) {
  return (
    <div className="flex flex-row">
      <div className="basis-1/3 bg-red-300">left</div>
      <div className="basis-2/3 bg-white">right</div>
    </div>
  )
}
export default Installation
