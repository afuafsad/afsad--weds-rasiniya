// Serene Islamic Background Music (BGM) & Nasheed Instrument Synthesizer

let audioCtx = null
let isPlayingInternal = false
let bgmTimer = null
let duffTimer = null
let bgAudioElement = null

// Traditional Maqam Hijaz & Bayati Frequencies (Hz): D4, Eb4, F#4, G4, A4, Bb4, C5, D5
const islamicScales = [293.66, 311.13, 369.99, 392.00, 440.00, 466.16, 523.25, 587.33]

export const toggleWebAudioMelody = () => {
  if (isPlayingInternal) {
    stopWebAudioMelody()
    return false
  } else {
    startWebAudioMelody()
    return true
  }
}

export const startWebAudioMelody = () => {
  if (isPlayingInternal) return

  // 1. Try loading external MP3 if placed in public/audio/
  if (!bgAudioElement) {
    bgAudioElement = new Audio('/audio/islamic-bgm.mp3')
    bgAudioElement.loop = true
    bgAudioElement.volume = 0.45
  }

  bgAudioElement.play().then(() => {
    isPlayingInternal = true
  }).catch(() => {
    // 2. Seamlessly play high-quality synthesized Serene Islamic BGM (Ney + Duff + Ambient Drone)
    startIslamicBGM()
  })
}

const startIslamicBGM = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume()
  }

  isPlayingInternal = true

  // Continuous Warm Spiritual Drone Pad (D - A - D)
  const droneFreqs = [146.83, 220.00, 293.66]
  const droneGain = audioCtx.createGain()
  droneGain.gain.setValueAtTime(0.04, audioCtx.currentTime)
  droneGain.connect(audioCtx.destination)

  const droneOscs = droneFreqs.map(f => {
    const osc = audioCtx.createOscillator()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(f, audioCtx.currentTime)
    osc.connect(droneGain)
    osc.start()
    return osc
  })

  let notePos = 0

  // Ney Flute & Oud Melodic Solo
  const playNeyPhrases = () => {
    if (!isPlayingInternal || !audioCtx) return

    const now = audioCtx.currentTime
    const freq = islamicScales[notePos % islamicScales.length]
    notePos = (notePos + (Math.random() > 0.5 ? 1 : -1) + islamicScales.length) % islamicScales.length

    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()

    // Smooth sine-triangle blend for Ney flute warmth
    osc.type = 'sine'
    osc.frequency.setValueAtTime(freq, now)

    // Gentle pitch vibrato for spiritual Ney expression
    const lfo = audioCtx.createOscillator()
    const lfoGain = audioCtx.createGain()
    lfo.frequency.setValueAtTime(4.5, now)
    lfoGain.gain.setValueAtTime(2.5, now)
    lfo.connect(osc.frequency)
    lfo.start(now)

    // Soft swell envelope
    gain.gain.setValueAtTime(0.001, now)
    gain.gain.linearRampToValueAtTime(0.12, now + 0.6)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8)

    osc.connect(gain)
    gain.connect(audioCtx.destination)

    osc.start(now)
    osc.stop(now + 2.9)
    lfo.stop(now + 2.9)
  }

  // Soft Duff Rhythm
  let duffStep = 0
  const playSoftDuff = () => {
    if (!isPlayingInternal || !audioCtx) return

    const now = audioCtx.currentTime
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()

    if (duffStep % 4 === 0) {
      // Soft DUM
      osc.type = 'sine'
      osc.frequency.setValueAtTime(100, now)
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.35)
      gain.gain.setValueAtTime(0.25, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38)
    } else if (duffStep % 2 === 0) {
      // Soft TAK
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(320, now)
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.18)
      gain.gain.setValueAtTime(0.12, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2)
    }

    osc.connect(gain)
    gain.connect(audioCtx.destination)

    osc.start(now)
    osc.stop(now + 0.4)
    duffStep++
  }

  playNeyPhrases()
  bgmTimer = setInterval(playNeyPhrases, 2200)
  duffTimer = setInterval(playSoftDuff, 550)
}

export const stopWebAudioMelody = () => {
  isPlayingInternal = false

  if (bgAudioElement) {
    try { bgAudioElement.pause() } catch (e) {}
  }

  if (bgmTimer) clearInterval(bgmTimer)
  if (duffTimer) clearInterval(duffTimer)
}
