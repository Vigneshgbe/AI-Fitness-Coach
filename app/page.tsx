"use client";
import UserForm from "./components/UserForm";
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center space-y-8"
    >
      <div className="flex items-center gap-3">
        <Dumbbell className="w-10 h-10 text-primary" />
        <h1 className="text-4xl font-bold text-center">
          AI Fitness Coach
        </h1>
      </div>
      <p className="text-center text-muted-foreground max-w-md">
        Let AI craft your personalized workout and diet plan.
      </p>
      <UserForm />
    </motion.div>
  );
}