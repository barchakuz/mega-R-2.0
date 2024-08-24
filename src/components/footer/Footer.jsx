import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <div className="flex h-full flex-col justify-center bg-slate-300">
    <div className="mb-4 inline-flex items-center justify-center">
        <Logo width="100px" />
    </div>
    <div>
        <p className="text-sm text-gray-600 flex justify-center py-1">
            &copy; Copyright 2023. All Rights Reserved by Behroze Aslam.
        </p>
    </div>
</div>
  )
}

export default Footer