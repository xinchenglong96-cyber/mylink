"use client";

import React, { useEffect, useRef } from 'react';

const ImpressionistBanana: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Background - a bit of textured cream/off-white
    ctx.fillStyle = '#fdfcf0';
    ctx.fillRect(0, 0, width, height);

    // Color palette for Impressionist Banana
    const colors = [
      '#FFD700', // Gold
      '#FFEE33', // Bright Yellow
      '#FFC107', // Amber
      '#D4AF37', // Metallic Gold
      '#9ACD32', // Yellow Green
      '#ADFF2F', // Green Yellow
      '#8B4513', // Saddle Brown (for spots)
      '#CD853F', // Peru
      '#4B0082', // Indigo (for shadows)
      '#6A5ACD', // Slate Blue (for shadows)
      '#FFFFFF'  // White (highlights)
    ];

    const drawStroke = (x: number, y: number, color: string, length: number, width: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.globalAlpha = 0.6 + Math.random() * 0.4;
      ctx.moveTo(-length / 2, 0);
      ctx.lineTo(length / 2, 0);
      ctx.stroke();
      ctx.restore();
    };

    const isInsideBanana = (x: number, y: number) => {
      // Simple crescent shape logic
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Outer curve
      const dx = (x - centerX) / 100;
      const dy = (y - centerY) / 60;
      const dist1 = Math.sqrt(dx * dx + dy * dy);
      
      // Inner curve (offset slightly)
      const dx2 = (x - centerX + 30) / 80;
      const dy2 = (y - centerY) / 50;
      const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

      return dist1 < 1.0 && dist2 > 0.8;
    };

    let frame = 0;
    const totalStrokes = 4000;

    const animate = () => {
      if (frame >= totalStrokes) return;

      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;

        if (isInsideBanana(x, y)) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          const length = 5 + Math.random() * 15;
          const strokeWidth = 1 + Math.random() * 3;
          const angle = (y - height / 2) / 100 + (Math.random() - 0.5) * 0.5;
          
          drawStroke(x, y, color, length, strokeWidth, angle);
        }
      }

      frame += 20;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas 
        ref={canvasRef} 
        width={400} 
        height={400} 
        className="rounded-lg shadow-2xl border-4 border-amber-100"
      />
      <p className="italic text-zinc-500 font-serif">"Impressionist Musa" - 2026</p>
    </div>
  );
};

export default ImpressionistBanana;
