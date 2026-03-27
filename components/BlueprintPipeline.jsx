// filename: components/BlueprintPipeline.jsx
"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { id: 1, label: 'IDEA', idx: '01', sub: 'Problem, leverage, and opportunity.', modules: ['Problem Analysis', 'Market Opportunity', 'User Research'] },
  { id: 2, label: 'DECONSTRUCTION', idx: '02', sub: 'Breaking down core mechanics.', modules: ['Core Mechanics', 'Essential Features', 'Clarity Focus'] },
  { id: 3, label: 'ARCHITECTURE', idx: '03', sub: 'Designing the engine.', modules: ['Database Design', 'API Structure', 'Infrastructure'] },
  { id: 4, label: 'PROTOTYPE', idx: '04', sub: 'Building real things early.', modules: ['Working Code', 'Real Testing', 'Fast Iteration'] },
  { id: 5, label: 'DESIGN SYSTEM', idx: '05', sub: 'Refining the interface.', modules: ['Visual Hierarchy', 'Motion Design', 'Component Library'] },
  { id: 6, label: 'ITERATION', idx: '06', sub: 'Improving through usage.', modules: ['Optimization', 'Refining UX', 'Performance Scaling'] },
  { id: 7, label: 'LAUNCH', idx: '07', sub: 'Real-world deployment.', modules: ['Deployment', 'Feedback Loop', 'Continuous Evolution'] }
];

export default function BlueprintPipeline() {
  const [activeNode, setActiveNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    scrollRef.current.style.cursor = 'grabbing';
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll-fast multiplier
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
      <div 
        ref={scrollRef}
        className="hide-scroll" 
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ width: '100%', position: 'relative', overflowX: 'auto', padding: '6rem 2rem 10rem', minHeight: '600px', display: 'flex', alignItems: 'center', cursor: 'grab' }}
      >

      
      {/* Background Grid Lines to enhance the Blueprint feel */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '4rem', minWidth: 'max-content', padding: '0 4rem' }}>
        
        {/* The main pipeline connecting line */}
        <div style={{ position: 'absolute', top: '15px', left: '4rem', right: '4rem', height: '1px', background: 'rgba(255,255,255,0.1)', zIndex: 0 }} />
        
        {/* The animated gold signal that moves through the pipeline on load */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '15px', left: '4rem', right: '4rem', height: '1px', background: '#D4AC56', transformOrigin: 'left', zIndex: 1, boxShadow: '0 0 10px rgba(212, 172, 86, 0.5)' }} 
        />

        {steps.map((step, index) => {
          const isActive = activeNode === step.id;
          const isHovered = hoveredNode === step.id;
          const isHighlighted = isActive || isHovered;

          return (
            <div 
              key={step.id}
              style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', width: '280px', cursor: 'pointer' }}
              onClick={() => setActiveNode(isActive ? null : step.id)}
              onMouseEnter={() => setHoveredNode(step.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Node Point */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <motion.div 
                  animate={{ 
                    scale: isHighlighted ? 1.5 : 1,
                    backgroundColor: isHighlighted ? '#D4AC56' : '#09080A',
                    borderColor: isHighlighted ? '#D4AC56' : 'rgba(255,255,255,0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    border: '1px solid',
                    position: 'relative',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isHighlighted ? '0 0 20px rgba(212,172,86,0.4)' : 'none'
                  }}
                >
                  <motion.div 
                    animate={{ opacity: isHighlighted ? 1 : 0 }}
                    style={{ width: '6px', height: '6px', backgroundColor: '#09080A', borderRadius: '50%' }}
                  />
                </motion.div>
              </div>

              {/* Node Content Card */}
              <motion.div 
                animate={{ 
                  y: isHighlighted ? -5 : 0,
                  borderColor: isHighlighted ? 'rgba(212, 172, 86, 0.5)' : 'rgba(255,255,255,0.05)',
                  backgroundColor: isHighlighted ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.4)'
                }}
                style={{ 
                  border: '1px solid',
                  padding: '2rem',
                  backdropFilter: 'blur(10px)',
                  position: 'relative'
                }}
              >
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: '#D4AC56', letterSpacing: '0.3em', marginBottom: '1rem' }}>
                  STEP {step.idx}
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '2.5rem', color: isHighlighted ? '#EFE9DF' : 'rgba(240, 234, 224, 0.6)', lineHeight: 0.9, marginBottom: '1rem', transition: 'color 0.3s' }}>
                  {step.label}
                </h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.1rem', color: '#68605A', lineHeight: 1.4 }}>
                  {step.sub}
                </p>

                {/* Expandable Sub-Modules */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: '2rem' }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      style={{ overflow: 'hidden', borderTop: '1px dashed rgba(212, 172, 86, 0.3)', paddingTop: '1.5rem' }}
                    >
                      {step.modules.map((mod, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(240,234,224,0.7)', letterSpacing: '0.1em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                        >
                          <span style={{ color: '#D4AC56' }}>+</span>
                          {mod}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
