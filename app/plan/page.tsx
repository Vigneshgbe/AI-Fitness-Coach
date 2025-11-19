"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useGeneratePlan } from "../hooks/useGeneratePlan";
import PlanCard from "../components/PlanCard";
import VoicePlayer from "../components/VoicePlayer";
import ImageGenerator from "../components/ImageGenerator";

export default function PlanPage() {
  const { loading, plan, error, generatePlan } = useGeneratePlan();

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
    if (Object.keys(userDetails).length > 0) generatePlan(userDetails);
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            Generating your personalized plan...
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This may take a few moments
          </p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 max-w-md text-center">
          <div className="text-5xl mb-4">❌</div>
          <p className="text-red-600 dark:text-red-400 font-semibold text-lg">
            {error}
          </p>
        </div>
      </div>
    );

  if (!plan) return null;

  const { workoutPlan, dietPlan, tips, aiSummary, rawText } = plan;

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Your AI Fitness Plan
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Swipe through your personalized workout, diet, and tips
        </p>
      </div>

      <Slider {...settings}>
        {/* 🏋️ Workout Plan */}
        {workoutPlan && (
          <div key="workout" className="p-4">
            <PlanCard title="🏋️ Workout Plan">
              <div className="space-y-4">
                {workoutPlan.map((day: any, i: number) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/50 dark:via-slate-900 dark:to-blue-950/50 shadow-md hover:shadow-xl transition-all duration-300 p-6"
                  >
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-200 dark:border-blue-800">
                      <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
                      <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400">
                        {day.day || `Day ${i + 1}`} — {day.focus}
                      </h4>
                    </div>
                    <ul className="space-y-4">
                      {day.exercises?.map((ex: any, j: number) => (
                        <li
                          key={j}
                          className="flex flex-col gap-2 border-l-4 border-blue-500 dark:border-blue-400 bg-white/50 dark:bg-slate-800/50 rounded-r-lg pl-4 pr-3 py-3 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 dark:text-gray-100">
                            {ex.name}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {ex.sets} sets × {ex.reps} reps ({ex.rest} rest)
                          </span>
                          <ImageGenerator prompt={ex.name} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <VoicePlayer
                  label="Workout Plan"
                  text={`Here is your personalized workout plan.`}
                />
              </div>
            </PlanCard>
          </div>
        )}

        {/* 🥗 Diet Plan */}
        {dietPlan && (
          <div key="diet" className="p-4">
            <PlanCard title="🥗 Diet Plan">
              <div className="space-y-4">
                {dietPlan.map((day: any, i: number) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-green-950/50 dark:via-slate-900 dark:to-green-950/50 shadow-md hover:shadow-xl transition-all duration-300 p-6"
                  >
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-green-200 dark:border-green-800">
                      <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-700 rounded-full"></div>
                      <h4 className="text-xl font-bold text-green-700 dark:text-green-400">
                        {day.day || `Day ${i + 1}`}
                      </h4>
                    </div>
                    <ul className="space-y-3 text-gray-900 dark:text-gray-100">
                      <li className="pl-2">
                        <strong className="text-green-700 dark:text-green-400">Breakfast:</strong> {day.breakfast}
                        <ImageGenerator prompt={day.breakfast} />
                      </li>
                      <li className="pl-2">
                        <strong className="text-green-700 dark:text-green-400">Lunch:</strong> {day.lunch}
                        <ImageGenerator prompt={day.lunch} />
                      </li>
                      <li className="pl-2">
                        <strong className="text-green-700 dark:text-green-400">Dinner:</strong> {day.dinner}
                        <ImageGenerator prompt={day.dinner} />
                      </li>
                      {day.snacks && (
                        <li className="pl-2">
                          <strong className="text-green-700 dark:text-green-400">Snacks:</strong> {day.snacks}
                          <ImageGenerator prompt={day.snacks} />
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <VoicePlayer
                  label="Diet Plan"
                  text={`Here is your personalized diet plan.`}
                />
              </div>
            </PlanCard>
          </div>
        )}

        {/* 💬 Tips & Motivation */}
        {tips && (
          <div key="tips" className="p-4">
            <PlanCard title="💬 Tips & Motivation">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-white dark:from-amber-950 dark:via-orange-950 dark:to-slate-900 shadow-lg border border-amber-200 dark:border-amber-800"
              >
                <h3 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-6 text-center">
                  🌟 Motivation & Posture Guidance
                </h3>

                {/* 🧩 Split the tips into sections */}
                <div className="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed">
                  {tips
                    .split(/\n+/) // Split by blank lines
                    .filter((line: string) => line.trim().length > 0)
                    .map((line: string, index: number) => {
                      const isNumbered = /^\d+[\.\)]?\s*/.test(line.trim());
                      const cleanLine = line.trim().replace(/^\d+[\.\)]?\s*/, "");

                      return (
                        <div
                          key={index}
                          className={`${isNumbered
                              ? "flex items-start gap-2"
                              : "flex items-start gap-3"
                            }`}
                        >
                          {isNumbered && (
                            <span className="font-semibold text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0">
                              {line.match(/^\d+/)?.[0]}.
                            </span>
                          )}
                          <p
                            className={`${line.toLowerCase().includes("posture")
                                ? "font-semibold text-amber-700 dark:text-amber-300 mt-2"
                                : ""
                              }`}
                          >
                            {cleanLine}
                          </p>
                        </div>
                      );
                    })}
                </div>

                <div className="mt-6 flex justify-center">
                  <VoicePlayer text={tips} label="Motivation Tips" />
                </div>
              </motion.div>
            </PlanCard>
          </div>
        )}
      </Slider>
    </motion.div>
  );
}