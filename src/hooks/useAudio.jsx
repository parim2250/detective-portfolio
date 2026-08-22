/* eslint-disable react-refresh/only-export-components */
import { useState, useRef, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const YT_ID = 'd1V1gzqQ9dc'; // Investigation Theme
const AMBIENT_ID = 'xPZZNioPFr4'; // Subtle Office/Rain Ambient (Loop)

// Public domain sound effects
const SOUNDS = {
    paper: 'https://assets.mixkit.co/active_storage/sfx/2048/2048-preview.mp3',   // Paper rustle
    click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',   // Mechanical click
    shutter: 'https://assets.mixkit.co/active_storage/sfx/125/125-preview.mp3'   // Camera shutter
};

const AudioContext = createContext(null);

// Safe fallback context if component is used outside Provider
const dummyAudio = {
    playing: false,
    playSFX: () => {},
    playClick: () => {},
    playHover: () => {},
    playCameraSnap: () => {},
    playTape: () => {},
    playPageTurn: () => {},
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    return context || dummyAudio;
};

export default function InvestigationAudio({ children }) {
    const [playing, setPlaying] = useState(false);
    const [started, setStarted] = useState(false);
    const iframeRef = useRef(null);
    const ambientRef = useRef(null);

    const playSFX = (type) => {
        if (!playing || !SOUNDS[type]) return;
        try {
            const audio = new Audio(SOUNDS[type]);
            audio.volume = 0.4;
            audio.play().catch(() => {});
        } catch {
            /* Audio playback safety */
        }
    };

    const toggle = () => {
        if (!started) {
            setStarted(true);
            setPlaying(true);
        } else {
            setPlaying(prev => !prev);
        }
    };

    // Mute / Unmute YouTube streams
    useEffect(() => {
        if (!started || !iframeRef.current || !ambientRef.current) return;
        
        try {
            const cmd = playing ? 'unMute' : 'mute';
            const playCmd = playing ? 'playVideo' : 'pauseVideo';
            
            iframeRef.current.contentWindow.postMessage(`{"event":"command","func":"${cmd}","args":""}`, '*');
            iframeRef.current.contentWindow.postMessage(`{"event":"command","func":"${playCmd}","args":""}`, '*');
            
            ambientRef.current.contentWindow.postMessage(`{"event":"command","func":"${cmd}","args":""}`, '*');
            ambientRef.current.contentWindow.postMessage(`{"event":"command","func":"${playCmd}","args":""}`, '*');
        } catch {
            /* cross-origin iframe safety */
        }
    }, [playing, started]);

    // Audio context value with safety aliases for various component calls
    const audioContextValue = {
        playing,
        playSFX,
        playClick: () => playSFX('click'),
        playHover: () => playSFX('click'),
        playCameraSnap: () => playSFX('shutter'),
        playTape: () => playSFX('paper'),
        playPageTurn: () => playSFX('paper'),
    };

    return (
        <AudioContext.Provider value={audioContextValue}>
            {children}
            
            {/* Hidden Background Music */}
            {started && (
                <iframe
                    ref={iframeRef}
                    src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&loop=1&playlist=${YT_ID}&enablejsapi=1&controls=0`}
                    style={{ position: 'fixed', width: 0, height: 0, border: 'none', opacity: 0, pointerEvents: 'none' }}
                    allow="autoplay"
                    title="Theme Music"
                />
            )}

            {/* Hidden Ambient Noise */}
            {started && (
                <iframe
                    ref={ambientRef}
                    src={`https://www.youtube.com/embed/${AMBIENT_ID}?autoplay=1&loop=1&playlist=${AMBIENT_ID}&enablejsapi=1&controls=0&volume=30`}
                    style={{ position: 'fixed', width: 0, height: 0, border: 'none', opacity: 0, pointerEvents: 'none' }}
                    allow="autoplay"
                    title="Office Ambient"
                />
            )}

            {/* Floating Audio Control Button */}
            <motion.button
                onClick={toggle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.4 }}
                style={{
                    position: 'fixed', 
                    bottom: '24px', 
                    right: '24px', 
                    zIndex: 1000,
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    background: playing ? '#c8a44d' : '#181310',
                    color: playing ? '#100c0a' : 'rgba(232,224,208,0.7)',
                    border: '1px solid rgba(200, 170, 100, 0.35)',
                    borderRadius: '80px', 
                    padding: '10px 20px',
                    fontFamily: 'var(--font-mono, monospace)', 
                    fontSize: '0.65rem',
                    fontWeight: 700, 
                    letterSpacing: '0.1em',
                    cursor: 'pointer', 
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: playing ? '0 0 20px rgba(200, 164, 77, 0.3)' : '0 4px 15px rgba(0,0,0,0.5)',
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                <AnimatePresence mode="wait">
                    <motion.span
                        key={playing ? 'on' : 'off'}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                    >
                        {playing ? (
                            <i className="fa-solid fa-volume-high" />
                        ) : (
                            <i className="fa-solid fa-volume-xmark" />
                        )}
                    </motion.span>
                </AnimatePresence>
                <span>{playing ? 'DISPATCH ACTIVE' : 'SYSTEM MUTED'}</span>
            </motion.button>
        </AudioContext.Provider>
    );
}