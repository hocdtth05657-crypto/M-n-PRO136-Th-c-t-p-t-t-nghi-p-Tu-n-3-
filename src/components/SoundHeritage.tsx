import { useState, useRef, useEffect } from 'react';
import { SOUND_PATTERNS } from '../data/heritageData';

export function SoundHeritage() {
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playDrumSound = (type: 'bass' | 'snare' | 'gong' | 'rim') => {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    if (type === 'bass') {
      // Deep resonant Buffalo hide drum (Trống sấm Tây Sơn)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(80, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.35);

      gain.gain.setValueAtTime(0.9, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.5);
    } else if (type === 'rim') {
      // Wooden rim clack (Gõ tang trống)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'gong') {
      // Brass Gong / Cymbal (Não bạt, thanh la)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.6);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.6);
    }
  };

  const startPattern = (patternId: string) => {
    stopAudio();
    setIsPlaying(patternId);

    let step = 0;
    if (patternId === 'trong-tran-tay-son') {
      // Powerful galloping martial rhythm: Thud-thud-thud... thud!
      intervalRef.current = window.setInterval(() => {
        if (step % 4 === 0) {
          playDrumSound('bass');
        } else if (step % 4 === 1 || step % 4 === 2) {
          playDrumSound('bass');
        } else if (step % 8 === 7) {
          playDrumSound('gong');
        }
        step++;
      }, 140);
    } else if (patternId === 'trong-chien-hat-boi') {
      // Classical Tuong theatre strike: Rim-Thud-Thud-Gong
      intervalRef.current = window.setInterval(() => {
        if (step % 6 === 0) playDrumSound('rim');
        if (step % 6 === 1) playDrumSound('bass');
        if (step % 6 === 3) playDrumSound('rim');
        if (step % 6 === 4) playDrumSound('bass');
        if (step % 6 === 5) playDrumSound('gong');
        step++;
      }, 200);
    } else {
      // Nam Ai slow ceremonial pulse
      intervalRef.current = window.setInterval(() => {
        if (step % 4 === 0) playDrumSound('rim');
        if (step % 4 === 2) playDrumSound('bass');
        step++;
      }, 400);
    }
  };

  const stopAudio = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(null);
  };

  return (
    <section className="py-10 border-b border-stone-200 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-stone-500 font-sans">
              Âm Thanh Di Sản &middot; Nhạc Khí Truyền Thống
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mt-0.5">
              Âm Vang Trống Trận Tây Sơn &amp; Trống Chiến Hát Bội
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Thưởng thức nhịp điệu mô phỏng dàn trống trận 12 chiếc và nhịp trống chầu điều khiển vũ đạo tuồng.
            </p>
          </div>

          {isPlaying && (
            <button
              onClick={stopAudio}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-red-900 hover:bg-red-800 transition-colors cursor-pointer self-start md:self-auto"
            >
              Dừng Âm Thanh
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOUND_PATTERNS.map((p) => {
            const active = isPlaying === p.id;
            return (
              <div
                key={p.id}
                className={`p-5 bg-white border transition-all flex flex-col justify-between ${
                  active ? 'border-amber-900 ring-1 ring-amber-900 shadow-md' : 'border-stone-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="font-mono text-[11px]">{p.tempo} BPM</span>
                    {active && <span className="text-amber-900 font-semibold animate-pulse">ĐANG PHÁT</span>}
                  </div>

                  <h4 className="font-serif text-base font-bold text-stone-900 mb-1.5">
                    {p.title}
                  </h4>

                  <p className="text-xs text-stone-600 mb-2 leading-relaxed">
                    {p.rhythmDescription}
                  </p>

                  <div className="text-xs text-stone-500 italic font-serif">
                    {p.culturalRole}
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-stone-100">
                  <button
                    onClick={() => (active ? stopAudio() : startPattern(p.id))}
                    className={`w-full py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      active
                        ? 'bg-amber-900 text-white'
                        : 'bg-stone-900 hover:bg-stone-800 text-white'
                    }`}
                  >
                    {active ? 'Dừng phát' : 'Nghe Nhịp Trống'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
