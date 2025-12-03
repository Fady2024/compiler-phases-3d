import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { compilerPhases } from "@/data/compilerPhases";
import { X, ChevronRight, ArrowRight, GripHorizontal } from "lucide-react";

interface PhaseDetailsProps {
  activePhase: string | null;
  onClose: () => void;
}

export const PhaseDetails = ({ activePhase, onClose }: PhaseDetailsProps) => {
  const phase = compilerPhases.find((p) => p.id === activePhase);
  const [dragConstraints] = useState({ left: -500, right: 100, top: -300, bottom: 300 });

  return (
    <AnimatePresence>
      {phase && (
        <motion.div
          drag
          dragMomentum={false}
          dragConstraints={dragConstraints}
          initial={{ opacity: 0, x: 50, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed right-4 top-24 w-[380px] z-50 cursor-grab active:cursor-grabbing"
          style={{ maxHeight: "calc(100vh - 140px)" }}
        >
          <div className="glass-card p-5 overflow-y-auto max-h-[calc(100vh-160px)]">
            {/* Drag Handle */}
            <div className="flex items-center justify-center mb-3 text-muted-foreground/50">
              <GripHorizontal className="w-5 h-5" />
            </div>

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div
                  className="w-3 h-3 rounded-full mb-2"
                  style={{ backgroundColor: phase.color }}
                />
                <h2 className="text-lg font-bold text-foreground">{phase.name}</h2>
                <p className="text-sm text-muted-foreground font-mono">
                  {phase.subtitle}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="p-1.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
              {phase.description}
            </p>

            {/* Code Before/After */}
            {(phase.inputCode || phase.outputCode) && (
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Transformation
                </h3>
                <div className="space-y-3">
                  {/* Input Code */}
                  {phase.inputCode && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-yellow-500" />
                        Input
                      </div>
                      <pre className="bg-background/60 border border-border/50 rounded-lg p-3 text-xs font-mono text-foreground/90 overflow-x-auto whitespace-pre-wrap">
                        {phase.inputCode}
                      </pre>
                    </motion.div>
                  )}

                  {/* Arrow */}
                  {phase.inputCode && phase.outputCode && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center"
                    >
                      <div
                        className="p-2 rounded-full"
                        style={{ backgroundColor: `${phase.color}20` }}
                      >
                        <ArrowRight className="w-4 h-4" style={{ color: phase.color }} />
                      </div>
                    </motion.div>
                  )}

                  {/* Output Code */}
                  {phase.outputCode && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        Output
                      </div>
                      <pre className="bg-background/60 border border-border/50 rounded-lg p-3 text-xs font-mono text-foreground/90 overflow-x-auto whitespace-pre-wrap">
                        {phase.outputCode}
                      </pre>
                    </motion.div>
                  )}
                </div>
              </div>
            )}

            {/* Details list */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Key Features
              </h3>
              {phase.details.map((detail, index) => (
                <motion.div
                  key={detail}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-foreground/70"
                >
                  <ChevronRight
                    className="w-3 h-3 flex-shrink-0"
                    style={{ color: phase.color }}
                  />
                  <span>{detail}</span>
                </motion.div>
              ))}
            </div>

            {/* Visual indicator */}
            <div
              className="mt-5 h-1 rounded-full opacity-50"
              style={{
                background: `linear-gradient(90deg, ${phase.color}, transparent)`,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
