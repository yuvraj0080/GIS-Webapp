import React from 'react'
import AnalysisViewer from './AnalysisViewer'
import Header from '../common/header'

const SpatialAnalysisLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
          <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex flex-1 bg-gray-100 p-4">
                <AnalysisViewer/>
            </main>
          </div>
        </div>
  )
}

export default SpatialAnalysisLayout