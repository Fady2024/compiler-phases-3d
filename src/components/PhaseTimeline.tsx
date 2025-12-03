import { motion } from "framer-motion";
import { compilerPhases } from "@/data/compilerPhases";

interface PhaseTimelineProps {
  activePhase: string | null;
  setActivePhase: (id: string | null) => void;
}

export const PhaseTimeline = ({ activePhase, setActivePhase }: PhaseTimelineProps) => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
      <div className="glass-card px-4 py-3">
        <div className="flex items-center gap-1">
          {compilerPhases.map((phase, index) => (
            <div key={phase.id} className="flex items-center">
              <motion.button
                onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative w-8 h-8 rounded-lg flex items-center justify-center
                  transition-all duration-300 group
                  ${activePhase === phase.id ? "ring-2 ring-offset-2 ring-offset-background ring-primary" : ""}
                `}
                style={{
                  backgroundColor: activePhase === phase.id ? phase.color : `${phase.color}33`,
                }}
              >
                <span className="text-xs font-bold text-foreground">
                  {index + 1}
                </span>
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-popover text-popover-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
                    {phase.name}
                  </div>
                </div>
              </motion.button>
              
              {/* Connector line */}
              {index < compilerPhases.length - 1 && (
                <div
                  className="w-4 h-0.5 mx-0.5"
                  style={{
                    background: `linear-gradient(90deg, ${phase.color}66, ${compilerPhases[index + 1].color}66)`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
