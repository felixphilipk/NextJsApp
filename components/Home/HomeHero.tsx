import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { CheckIcon } from "@heroicons/react/outline"
import Subscribe from "../Subscribe"

const features = [
  {
    name: "Individual counseling",
    description: "",
  },
  {
    name: "Family counseling",
    description: "",
  },
  {
    name: "Life coaching",
    description: "",
  },
]

type Inputs = {
  email: string
}

export default function HomeHero() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<Inputs>()

  const [isSubmitted, setIsSubmitted] = React.useState("")

  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event.target.reset()

    const subscribe = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const response = await subscribe.json()

    setIsSubmitted(response.message)
  }

  return (
    <div className="">
      <div className="relative overflow-hidden">
        <main>
          <div className="pt-10 bg-slate-100 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1
                      data-test="hero-heading"
                      className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
                    >
                      <span className="block text-gray-900">
                        Britos Friends
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    If you are struggling with a difficult life issue, counselling can provide a safe and confidential space to talk about your problems.
                    </p>

                    {/* Features */}
                    <div className="mt-12">
                      <dl className="">
                        {features.map((feature) => (
                          <div key={feature.name} className="relative mb-6">
                            <dt>
                              <CheckIcon
                                className="absolute h-6 w-6 text-blue-500"
                                aria-hidden="true"
                              />
                              <p className="ml-9 text-lg leading-6 font-medium text-gray-500">
                                {feature.name}
                              </p>
                            </dt>
                            <dd className="mt-2 ml-9 text-base text-gray-500">
                              {feature.description}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="mt-10 sm:mt-12">
                      <Subscribe />
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                     // src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                          src ="https://res.cloudinary.com/dbefokfin/image/upload/v1684691525/peace_icon_cs9u74.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
