// Web Audio API ambient wedding melody generator
let audioCtx = null
let isPlayingInternal = false
let currentOscillators = []
let melodyInterval = null

// Gentle romantic oriental frequencies (in Hz): D, F, G, A, C
const notes = [293.66, 349.23, 392.00, 440.00, 523.25, 587.33, 698.46]

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
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume()
  }

  isPlayingInternal = true

  let noteIdx = 0
  const playNote = () => {
    if (!isPlayingInternal || !audioCtx) return

    const freq = notes[noteIdx % notes.length]
    noteIdx = (noteIdx + 1) % notes.length

    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime)

    // Smooth envelope
    gain.gain.setValueAtTime(0.001, audioCtx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.8)
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.2)

    osc.connect(gain)
    gain.connect(audioCtx.destination)

    osc.start()
    osc.stop(audioCtx.currentTime + 3.3)

    currentOscillators.push(osc)
    setTimeout(() => {
      currentOscillators = currentOscillators.filter(o => o !== osc)
    }, 3400)
  }

  playNote()
  melodyInterval = setInterval(playNote, 1600)
}

export const stopWebAudioMelody = () => {
  isPlayingInternal = false
  if (melodyInterval) clearInterval(melodyInterval)
  currentOscillators.forEach(osc => {
    try { osc.stop() } catch (e) {}
  })
  currentOscillators = []
}
