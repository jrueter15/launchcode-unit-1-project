import { useState } from "react";

const Home = () => {
  const [dailyLog, setLog] = useState("");

  return (
    <div>
        <form>
            <label className="dailyLogInput">
                <h1>What's on your mind today?</h1>
                <input
                    type="text"
                    value={dailyLog}
                    onChange={(e) => setLog(e.target.value)}
                />
            </label>
        </form>
        <div className="dailyLogOutput">
            <h1>Your Thoughts:</h1>
            <p>{dailyLog}</p>
        </div>
    </div>
  )
}

export default Home
