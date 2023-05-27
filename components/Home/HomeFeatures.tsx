import {
  LightBulbIcon,
  BeakerIcon,
  TerminalIcon,
  DatabaseIcon,
  CodeIcon,
  AdjustmentsIcon,
  ChatIcon,
  EyeIcon,
  BellIcon,
  UserIcon,
  InboxIcon
  
} from "@heroicons/react/outline"

const features = [
  {
    name: "Depression",
    icon: ChatIcon,
    description: "We help people with depression to understand their feelings, develop coping skills, and make positive changes in their lives.",
  },
  {
    name: "Anxiety",
    icon: EyeIcon,
    description: "We help people with anxiety to manage their fears and worries, and develop coping skills to deal with stressful situations",
  },
  {
    name: "Stress",
    icon: BellIcon,
    description: "Our Counselling can help people to manage stress, improve their coping skills, and make positive changes in their lives.",
  },
  {
    name: "Grief",
    icon: UserIcon,
    description: "We help people who are grieving to cope with their loss, and to find ways to move forward with their live",
  },
  {
    name: "Relationship",
    icon: InboxIcon,
    description: "We help couples to improve their communication, resolve conflict, and strengthen their relationships.",
  },
  {
    name: "Personal development",
    icon: AdjustmentsIcon,
    description: "We help people to achieve their goals, improve their self-esteem, and make positive changes in their lives.",
  },
]

export default function HomeFeatures() {
  return (
    <div className="features relative bg-slate-100 py-16 sm:py-24 lg:py-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          What we can do for you
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
