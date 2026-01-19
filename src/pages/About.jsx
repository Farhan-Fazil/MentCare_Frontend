

import React from 'react';
import { Heart, Video, Users, Shield, Globe, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: Video,
      title: "Secure Video Consultations",
      description: "Connect with healers through encrypted, HIPAA-compliant video sessions from anywhere."
    },
    {
      icon: Users,
      title: "Diverse Healing Approaches",
      description: "Access monks, therapists, wellness coaches, psychiatrists, and holistic practitioners in one place."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your mental health journey is confidential. We prioritize your privacy and data security."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with certified healers worldwide, bringing diverse perspectives to your wellness journey."
    }
  ];

  const stats = [
    { number: "10K+", label: "Healed Users" },
    { number: "500+", label: "Verified Healers" },
    { number: "50+", label: "Countries" },
    { number: "95%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About MentCare</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're bridging the gap between those seeking mental wellness and the diverse healers who can guide them. 
            MentCare is more than a platform—it's a community dedicated to making mental health support accessible, 
            personalized, and inclusive.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <div className="flex items-start gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Mental health care isn't one-size-fits-all. We believe in the power of diverse healing modalities—from 
                traditional therapy and psychiatry to mindfulness practices with monks, holistic wellness coaching, and beyond.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to connect individuals on their mental wellness journey with the right healer for their unique 
                needs, making professional support accessible through secure video consultations regardless of location or circumstance.
              </p>
            </div>
          </div>
        </div>

  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>


        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose MentCare</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            We carefully vet every healer on our platform to ensure they meet professional standards and certifications. 
            Whether you're seeking traditional therapy, spiritual guidance, or holistic wellness support, you can trust 
            that you're in capable, compassionate hands.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}