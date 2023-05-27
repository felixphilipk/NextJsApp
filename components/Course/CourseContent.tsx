import dynamic from "next/dynamic"
import React, { useState } from 'react';
import { CheckIcon } from "@heroicons/react/outline"
import CourseProgress from "./CourseProgress"
import Contact from "../../components/Contact/Contact";




const CourseNextLessonBtn = dynamic(() => import("./CourseNextLessonBtn"), {
  ssr: false,
})

 


export default function CourseContent({
  title,
  lessons,
  learnFeatures,
  progressService,
  course,
})




{
  const stats = [{ label: "Lessons", value: lessons.length }]

  const [featureText, setFeatureText] = useState([...learnFeatures]);

  const handleFeatureTextChange = (index, newText) => {
    const updatedFeatureText = [...featureText];
    updatedFeatureText[index] = newText;
    setFeatureText(updatedFeatureText);
  };
  return (
    <>
      <hr />
      <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <h2 className="text-base font-semibold tracking-wide uppercase">
                {title}
              </h2>
              <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                <CourseProgress
                  course={course}
                  lessons={lessons}
                  progressService={progressService}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                {/* Content area */}
                <div className="">
                  <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                    Counseling Steps And Contact Form
                  </h2>

                  {/* Features */}
      <div className="mt-12">
  <ul className="space-y-4">
    <li className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/dbefokfin/image/upload/v1685179184/heart_icon_rns8r4.png" alt=""/>
      </div>
      <div className="flex-1 space-y-4 mb-8">
        <h3 className="text-lg font-medium text-gray-900">Building a relationship</h3>
        <p className="text-gray-500"> To make you feel comfortable and safe in sharing your thoughts</p>
      </div>
    </li>
    <li className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/dbefokfin/image/upload/v1685181069/assessment_4_aqy9eg.png" alt="Object 2"/>
      </div>
      <div className="flex-1 space-y-4 mb-8">
        <h3 className="text-lg font-medium text-gray-900">Assessment</h3>
        <p className="text-gray-500">Assess your situation</p>
      </div>
    </li>

    <li className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/dbefokfin/image/upload/v1685180926/goal2_i68o3i.png" alt="Object 2"/>
      </div>
      <div className="flex-1 space-y-4 mb-8">
        <h3 className="text-lg font-medium text-gray-900">Goal setting</h3>
        <p className="text-gray-500">Set the goals for your counseling</p>
      </div>
    </li>
    <li className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/dbefokfin/image/upload/v1685181685/help2_yballk.png" alt="Object 2"/>
      </div>
      <div className="flex-1 space-y-4 mb-8">
        <h3 className="text-lg font-medium text-gray-900">Intervention</h3>
        <p className="text-gray-500">Providing support, teaching coping skills, or helping you to make changes in yourlife</p>
      </div>
    </li>
  </ul>
</div>
                </div>

                {/* Stats course */}
             
                
                <Contact></Contact>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
                    }
                    

