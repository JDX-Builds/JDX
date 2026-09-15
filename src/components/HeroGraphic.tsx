import { motion } from 'framer-motion'

// Signature visual: an abstract "constellation of build states" —
// nodes representing ideas resolving into a connected, structured system,
// echoing JDX's move from raw problem to engineered software.
const nodes = [
  { x: 60, y: 80, r: 5, delay: 0 },
  { x: 180, y: 40, r: 4, delay: 0.4 },
  { x: 300, y: 100, r: 6, delay: 0.8 },
  { x: 120, y: 200, r: 4, delay: 1.2 },
  { x: 260, y: 220, r: 5, delay: 0.6 },
  { x: 360, y: 190, r: 4, delay: 1.6 },
  { x: 340, y: 320, r: 5, delay: 1 },
  { x: 180, y: 330, r: 4, delay: 1.4 },
  { x: 80, y: 280, r: 3, delay: 1.8 },
]

const edges: [number, number][] = [
  [0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [4, 5], [4, 6], [3, 7], [7, 8], [6, 7], [2, 5],
]

export default function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <div className="absolute inset-0 rounded-full bg-glow-gradient blur-2xl" />
      <svg viewBox="0 0 420 400" className="relative h-full w-full" role="img" aria-label="Abstract network graphic representing connected software systems">
        <defs>
          <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="nodeGrad">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#2563EB" />
          </radialGradient>
        </defs>

        {edges.map(([a, b], i) => (
          <motion.line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#edgeGrad)"
            strokeWidth={1.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: 'easeInOut' }}
          />
        ))}

        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="url(#nodeGrad)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: 1 }}
            transition={{ duration: 0.6, delay: n.delay, ease: 'easeOut' }}
          />
        ))}

        {nodes.map((n, i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="none"
            stroke="#06B6D4"
            strokeWidth={1}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: [1, 2.6], opacity: [0.5, 0] }}
            transition={{ duration: 2.6, delay: n.delay + 1, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}
      </svg>
    </div>
  )
}
