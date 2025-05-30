
import { users, heart, handshake } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: users,
      title: "Community First",
      description: "We believe in the power of communities to create lasting change from within."
    },
    {
      icon: heart,
      title: "Compassionate Action",
      description: "Every decision we make is guided by empathy and genuine care for those we serve."
    },
    {
      icon: handshake,
      title: "Collaborative Impact",
      description: "Working together with local partners to ensure sustainable, meaningful progress."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About HopeForward
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over a decade, we've been committed to creating positive change in communities around the world through sustainable programs and meaningful partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              HopeForward exists to empower communities, provide essential resources, and create opportunities for sustainable development. We work hand-in-hand with local organizations to address critical needs while building long-term capacity for growth and self-sufficiency.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our approach is rooted in respect, collaboration, and the belief that every person deserves access to basic necessities, education, and the opportunity to thrive.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Community development project"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
