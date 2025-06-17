
import React, { useEffect, useRef } from 'react';

const MagicalParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;
      pulse: number;
    }> = [];

    const colors = [
      '#8B5CF6', // magical-purple
      '#3B82F6', // magical-blue
      '#06B6D4', // magical-cyan
      '#EC4899', // magical-pink
      '#7C3AED', // magical-violet
      '#6366F1'  // magical-indigo
    ];

    // Create enhanced particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 300 + 200,
        pulse: Math.random() * Math.PI * 2
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update particle life cycle
        particle.life++;
        particle.pulse += 0.1;
        
        // Reset particle when it dies
        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.vx = (Math.random() - 0.5) * 0.8;
          particle.vy = (Math.random() - 0.5) * 0.8;
        }

        // Add gentle wave motion
        particle.x += particle.vx + Math.sin(time + particle.pulse) * 0.2;
        particle.y += particle.vy + Math.cos(time + particle.pulse) * 0.2;

        // Enhanced mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force * 0.02;
          particle.vy += Math.sin(angle) * force * 0.02;
          
          // Create ripple effect near mouse
          particle.size = Math.max(1, particle.size + force * 2);
          particle.opacity = Math.min(1, particle.opacity + force * 0.3);
        } else {
          // Return to normal size and opacity
          particle.size = Math.max(1, particle.size * 0.98);
          particle.opacity = Math.max(0.2, particle.opacity * 0.99);
        }

        // Boundary collision with elastic effect
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.7;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.7;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Apply velocity damping
        particle.vx *= 0.995;
        particle.vy *= 0.995;

        // Dynamic opacity based on life cycle
        const lifeCycle = particle.life / particle.maxLife;
        const dynamicOpacity = particle.opacity * (1 - lifeCycle * 0.5) * (0.8 + 0.2 * Math.sin(particle.pulse));

        // Enhanced particle rendering with glow
        ctx.save();
        ctx.globalAlpha = dynamicOpacity;
        
        // Outer glow
        ctx.shadowBlur = 20 + Math.sin(particle.pulse) * 5;
        ctx.shadowColor = particle.color;
        ctx.fillStyle = particle.color;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright core
        ctx.shadowBlur = 5;
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = dynamicOpacity * 0.6;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Enhanced connection lines
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.3;
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, otherParticle.color);

            ctx.save();
            ctx.globalAlpha = opacity * dynamicOpacity;
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 + (120 - distance) / 120;
            ctx.shadowBlur = 10;
            ctx.shadowColor = particle.color;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default MagicalParticles;
