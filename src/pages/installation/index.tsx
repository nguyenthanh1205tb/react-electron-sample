import React, { PropsWithChildren } from 'react'
import './style.scss'

interface InstallationProps {}
function Installation({}: PropsWithChildren<InstallationProps>) {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-row h-full">
        <div className="basis-2/5 p-4">
          <ul className="steps steps-vertical">
            <li className="step step-primary">Install</li>
            <li className="step step-primary">Software license Agreement</li>
            <li className="step">Installing Setting</li>
            <li className="step">Preinstallation Summary</li>
            <li className="step">Preinstallation Summary</li>
            <li className="step">Installing</li>
            <li className="step">Installation Complete</li>
            <li className="step">Finalize Settings</li>
          </ul>
        </div>
        <div className="basis-3/5 bg-white p-4"></div>
      </div>
    </div>
  )
}
export default Installation
