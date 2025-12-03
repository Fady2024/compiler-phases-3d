import { useState } from "react";
import { motion } from "framer-motion";
import { CompilerScene } from "@/components/three/CompilerScene";
import { PhaseDetails } from "@/components/PhaseDetails";
import { PhaseTimeline } from "@/components/PhaseTimeline";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { Code2, Sparkles } from "lucide-react";

const Index = () => {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-0 left-0 right-0 z-20 p-6"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground glow-text">
                Compiler Phases
              </h1>
              <p className="text-sm text-muted-foreground">
                Interactive 3D Visualization
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Click phases to explore</span>
            </div>
            <BackgroundMusic />
          </div>
        </div>
      </motion.header>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <CompilerScene activePhase={activePhase} setActivePhase={setActivePhase} />
      </div>

      {/* Phase Details Panel */}
      <PhaseDetails activePhase={activePhase} onClose={() => setActivePhase(null)} />

      {/* Timeline Navigation */}
      <PhaseTimeline activePhase={activePhase} setActivePhase={setActivePhase} />

      {/* Instructions overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute left-6 bottom-6 z-10"
      >
        <div className="glass-card px-4 py-2 text-xs text-muted-foreground">
          <span className="text-foreground font-medium">Controls:</span> Drag to rotate • Scroll to zoom
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
