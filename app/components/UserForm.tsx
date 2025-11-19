"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function UserForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    const required = ['name', 'age', 'gender', 'height', 'weight', 'goal', 'level', 'location', 'dietaryPref'];
    const missing = required.filter(field => !formData[field]);
    
    if (missing.length > 0) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    console.log("Form submitted:", formData);
    setTimeout(() => {
      setLoading(false);
      alert("Your personalized fitness plan is ready!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Start Your Fitness Journey
          </h1>
          <p className="text-gray-600">
            Tell us about yourself and we'll create a personalized plan for you
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100">
          <div className="space-y-5">

            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span className="text-blue-600">👤</span> Personal Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                />
                <Input
                  placeholder="Age"
                  type="number"
                  min="10"
                  max="100"
                  onChange={(e) => handleChange("age", e.target.value)}
                  className="border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
            </div>

            <Select onValueChange={(v) => handleChange("gender", v)}>
              <SelectTrigger className="border-gray-200 focus:border-blue-400 focus:ring-blue-400">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="transgender">Transgender</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span className="text-green-600">📊</span> Physical Metrics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Height (cm)"
                  type="number"
                  min="100"
                  max="250"
                  onChange={(e) => handleChange("height", e.target.value)}
                  className="border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                />
                <Input
                  placeholder="Weight (kg)"
                  type="number"
                  min="30"
                  max="300"
                  onChange={(e) => handleChange("weight", e.target.value)}
                  className="border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
            </div>


            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span className="text-purple-600">🎯</span> Fitness Goals
              </h2>
              <div className="space-y-4">
                <Select onValueChange={(v) => handleChange("goal", v)}>
                  <SelectTrigger className="border-gray-200 focus:border-blue-400 focus:ring-blue-400">
                    <SelectValue placeholder="What's your primary goal?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weight_loss">Weight Loss</SelectItem>
                    <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
                    <SelectItem value="endurance">Improve Endurance</SelectItem>
                    <SelectItem value="flexibility">Increase Flexibility</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(v) => handleChange("level", v)}>
                  <SelectTrigger className="border-gray-200 focus:border-blue-400 focus:ring-blue-400">
                    <SelectValue placeholder="Current fitness level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(v) => handleChange("location", v)}>
                  <SelectTrigger className="border-gray-200 focus:border-blue-400 focus:ring-blue-400">
                    <SelectValue placeholder="Where do you prefer to workout?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="gym">Gym</SelectItem>
                    <SelectItem value="outdoor">Outdoor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>


            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span className="text-orange-600">🥗</span> Nutrition & Lifestyle
              </h2>
              <div className="space-y-4">
                <Select onValueChange={(v) => handleChange("dietaryPref", v)}>
                  <SelectTrigger className="border-gray-200 focus:border-blue-400 focus:ring-blue-400">
                    <SelectValue placeholder="Dietary preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="veg">Vegetarian</SelectItem>
                    <SelectItem value="non-veg">Non-Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="keto">Keto</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(v) => handleChange("stressLevel", v)}>
                  <SelectTrigger className="border-gray-200 focus:border-blue-400 focus:ring-blue-400">
                    <SelectValue placeholder="Stress level (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Any medical conditions or injuries we should know about? (optional)"
                  onChange={(e) => handleChange("medicalHistory", e.target.value)}
                  className="border-gray-200 focus:border-blue-400 focus:ring-blue-400 min-h-24 resize-none"
                />
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span> Generating Your Plan...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Generate My Plan 💪
                </span>
              )}
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Your data is secure and will only be used to personalize your fitness plan
        </p>
      </div>
    </div>
  );
}