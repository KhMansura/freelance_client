import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Create an Account",
      desc: "Sign up as a Freelancer or Client to access our global marketplace.",
      icon: "👤",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: "02",
      title: "Post or Find Jobs",
      desc: "Clients post projects; Freelancers bid on tasks that match their skills.",
      icon: "💼",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      id: "03",
      title: "Secure Collaboration",
      desc: "Use our built-in tools to chat, share files, and track milestones.",
      icon: "🤝",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      id: "04",
      title: "Get Paid Safely",
      desc: "Payments are released via escrow once the work is approved.",
      icon: "💰",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    }
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          How It <span className="text-blue-600">Works</span>
        </motion.h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Getting started on FreelanceHub is simple. Follow these four steps to start your journey today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Decorative Line */}
        <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-50"
          >
            <div className={`w-16 h-16 ${step.bgColor} ${step.iconColor} rounded-full flex items-center justify-center text-3xl mb-6 relative shadow-sm`}>
              {step.icon}
              <span className="absolute -top-2 -right-2 bg-white text-gray-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border shadow-sm">
                {step.id}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}