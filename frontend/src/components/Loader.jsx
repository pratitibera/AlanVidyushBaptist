import { useState, useEffect } from 'react'

const Loader = () => {
  const [progress, setProgress] = useState(1)
  // setProgress(1)
  const tick = () => {
    console.log("Hello")
    setProgress(progress + 1);
  }
  const timer = setInterval(tick, 200)


  useEffect(() => {

    return () => {
      setProgress(1)
      clearInterval(timer)
    }
  }, [])

  return (
    <div class="preloader">
      <div class="progress_outer" id="progress_outer" style={{
        background: `
          conic-gradient(#FFE972 ${progress}%,#fff ${progress}%`
      }}>
        <div class="progress_inner">
          <span id="counter">{progress} %</span>
        </div>
      </div>
    </div>
  )
}

export default Loader