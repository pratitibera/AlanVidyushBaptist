import { useEffect, useState } from 'react'

const Loader = () => {
  const [progress, setProgress] = useState(1)
  // setProgress(1)




  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(progress + 1);
      if (progress === 100) {
        clearInterval(timer)
      }
    }, 200)

    return () => clearInterval(timer)
  })


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