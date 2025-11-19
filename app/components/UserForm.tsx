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
import { useRouter } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Heart } from "lucide-react";
import { Dumbbell, Github, Twitter, Linkedin } from "lucide-react";

export default function UserForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>({});

  const handleChange = (key: string, value: any) =>
    setFormData((prev: any) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    localStorage.setItem("userDetails", JSON.stringify(formData));
    setTimeout(() => {
      setLoading(false);
      router.push("/plan");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="flex items-center justify-center p-4 py-8">
        <div className="w-full max-w-2xl">

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg space-y-5"
        >
          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Name"
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="h-11"
              />
              <Input
                placeholder="Age"
                type="number"
                onChange={(e) => handleChange("age", e.target.value)}
                required
                className="h-11"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Select onValueChange={(v) => handleChange("gender", v)} required>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="transgender">Transgender</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Physical Metrics */}
          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Physical Metrics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Height (cm)"
                type="number"
                onChange={(e) => handleChange("height", e.target.value)}
                required
                className="h-11"
              />
              <Input
                placeholder="Weight (kg)"
                type="number"
                onChange={(e) => handleChange("weight", e.target.value)}
                required
                className="h-11"
              />
            </div>
          </div>

          {/* Fitness Details */}
          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Fitness Details
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              <Select onValueChange={(v) => handleChange("goal", v)} required>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Fitness Goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weight_loss">Weight Loss</SelectItem>
                  <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
                  <SelectItem value="endurance">Endurance</SelectItem>
                  <SelectItem value="flexibility">Flexibility</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(v) => handleChange("level", v)} required>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Current Fitness Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(v) => handleChange("location", v)} required>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Workout Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home">Home</SelectItem>
                  <SelectItem value="gym">Gym</SelectItem>
                  <SelectItem value="outdoor">Outdoor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Nutrition & Health */}
          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Nutrition & Health
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              <Select onValueChange={(v) => handleChange("dietaryPref", v)} required>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Dietary Preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="veg">Veg</SelectItem>
                  <SelectItem value="non-veg">Non-Veg</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="keto">Keto</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(v) => handleChange("stressLevel", v)}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Stress Level (optional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Medical History (optional)"
                onChange={(e) => handleChange("medicalHistory", e.target.value)}
                className="min-h-[100px] resize-none"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 transition-colors mt-6"
          >
            {loading ? "Generating Plan..." : "Generate My Plan 💪"}
          </Button>
        </form>
      </div>
      </div>
       <Footer />
    </div>
  );
}