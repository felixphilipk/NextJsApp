import Link from "next/link"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import MobileCourses from "./MobileCourses"
import { XIcon } from "@heroicons/react/outline"
import { HomeIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

export default function MobileProgressMenu({
 
  content,
  courses,
  progressService,
}) {
  const router = useRouter();
  return (
    <Popover className="relative bg-white md:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
          <button
    onClick={() => router.push('/')}
    className="focus:outline-none"
  >
      <div className="bg-blue-500 rounded-full p-1">
    <HomeIcon className="h-8 w-auto sm:h-10 text-white" />
    </div>
  </button>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            
          </div>
        </div>
      </div>

      
    </Popover>
  )
}
