import React, { useState, useCallback } from 'react';
import './Pumagato.css';

export default function Pumagato({
  size = 180,
  color = '#0a0a0a',
  speed = 1,
  className = '',
  style = {},
  title = 'Gato negro sentado (click para luna)',
  bodyRx = 24,
  bodyRy = 30,
  headR = 14,
  headRx = 32,
  headRy,
  tailOffset = -30,
  initialMode = 'cat',
}) {
  const safeSpeed = Math.max(0.3, Math.min(Number(speed) || 1, 3));
  const [mode, setMode] = useState(initialMode);

  const toggleMode = useCallback(() => {
    setMode((m) => (m === 'cat' ? 'moon' : 'cat'));
  }, []);

  const bodyCX = 100;
  const bodyCY = 150;
  const tailBaseY = bodyCY + bodyRy;

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMode();
    }
  };

  const hRx = headRx ?? headR;
  const hRy = headRy ?? headR;

  return (
    <div
      className={`pumagato ${className}`}
      style={{
        '--pg-size': `${size}px`,
        '--pg-color': color,
        '--pg-speed': safeSpeed,
        ...style,
      }}
      role='button'
      tabIndex={0}
      aria-pressed={mode === 'moon'}
      aria-label={title}
      onClick={toggleMode}
      onKeyDown={onKeyDown}
      title={mode === 'cat' ? '¡Anochecer!' : '¡Amanecer!'}
    >
      <svg className='pg-svg' viewBox='0 0 200 240' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <radialGradient id='pgSheen' cx='50%' cy='35%' r='65%'>
            <stop offset='0%' stopColor='rgba(255,255,255,0.06)' />
            <stop offset='100%' stopColor='rgba(255,255,255,0)' />
          </radialGradient>
          <mask id='pgCrescentMask'>
            <rect x='0' y='0' width='200' height='240' fill='black' />
            <circle cx='110' cy='120' r='48' fill='white' />
            <circle cx='128' cy='118' r='48' fill='black' />
          </mask>
          <filter id='pgGlow' x='-30%' y='-30%' width='160%' height='160%'>
            <feGaussianBlur stdDeviation='6' result='b' />
            <feComponentTransfer>
              <feFuncA type='linear' slope='0.9' />
            </feComponentTransfer>
          </filter>
        </defs>

        {mode === 'cat' ? (
          <>
            <ellipse className='pg-body' cx={bodyCX} cy={bodyCY} rx={bodyRx} ry={bodyRy} />
            <ellipse className='pg-head' cx={100} cy={108} rx={hRx} ry={hRy} />
            <g className='pg-ears'>
              <g transform='translate(78,80) rotate(-18)'>
                <path className='pg-ear pg-ear-left' d='M-6 20 L 0 -10 L 10 20 Z' />
              </g>
              <g transform='translate(122,80) rotate(18)'>
                <path className='pg-ear pg-ear-right' d='M-10 20 L 0 -10 L 6 20 Z' />
              </g>
            </g>
            <path className='pg-collar' d='M80 105 Q100 110 120 105' />
            <g className='pg-tail' transform={`translate(${bodyCX + tailOffset},${tailBaseY})`}>
              <rect className='pg-tail-seg pg-tail-base' x='0' y='-14' width='44' height='14' rx='7' ry='7' />
              <rect className='pg-tail-seg pg-tail-mid'  x='-28' y='-14' width='34' height='12' rx='6' ry='6' />
              <rect className='pg-tail-seg pg-tail-tip'  x='-50' y='-14' width='26' height='10' rx='5' ry='5' />
            </g>
            <ellipse className='pg-sheen' cx='100' cy='125' rx='30' ry='46' fill='url(#pgSheen)' />
          </>
        ) : (
          <>
            <g className='pg-moon-group'>
              <g filter='url(#pgGlow)' mask='url(#pgCrescentMask)'>
                <rect x='0' y='0' width='200' height='240' fill='rgba(255, 235, 130, 0.95)' />
              </g>
              <g mask='url(#pgCrescentMask)'>
                <rect x='0' y='0' width='200' height='240' className='pg-moon' />
              </g>
            </g>
          </>
        )}
      </svg>
    </div>
  );
}
