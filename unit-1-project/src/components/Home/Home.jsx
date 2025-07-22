import React from 'react';
import { useState, useEffect } from "react";
import Button from '../Button/Button';

// Home component will display daily dots/logs the user adds
// The component will also allow editing and deleting

const Home = ({wins}) => {
    const [logs, setLogs] = useState(() => {
        const storedLogs = localStorage.getItem("dailyLogs");
        return storedLogs ? JSON.parse(storedLogs) : [];
    })
    useEffect(() => {
        localStorage.setItem("dailyLogs", JSON.stringify(logs));
    }, [logs]);
    const [inputValue, setInputValue] = useState("");
    const [currentlyEditingIndex, setCurrentlyEditingIndex] = useState(null);
    const [tempEditValue, setTempEditValue] = useState("");

  function handleInputChange(event){
    setInputValue(event.target.value);
  }

  function addLog(event){
    event.preventDefault();
    if(inputValue.trim() !== ""){
      setLogs((prevLogs) => [...prevLogs, inputValue]);
      setInputValue("");
      }
  }
  
  function startEditing(index) {
    setCurrentlyEditingIndex(index);
    setTempEditValue(logs[index]);
  }

  function handleEditChange(e) {
    setTempEditValue(e.target.value);
  }

  function saveEdit(index) {
    const updatedLogs = logs.map((log, i) =>
      i === index ? tempEditValue : log
    );
    setLogs(updatedLogs);
    setCurrentlyEditingIndex(null);
    setTempEditValue("");
  }

  function deleteLog(index){
    const updatedLogs = logs.filter((element, i) => i !== index)
    setLogs(updatedLogs);
  }

  return (
    <div className="home">
        <div className="welcome-message">
            <h1>Welcome to Dot.Today!</h1>
            <p>This app helps you quickly jot down a meaningful "dot" from your day—something you learned, did, or felt. It's a simple way to stay mindful, track your progress, and reflect over time.</p>
        </div>
        
        <form onSubmit={addLog} className="dailyLogInput">
            <h1>What's your dot today?</h1>
            <textarea
                className="log-textarea"
                value={inputValue}
                onChange={handleInputChange}
                />
            <Button type="submit" text="Add" className="add-button" />
        </form>
        <div className="dailyLogOutput">
            <h1>Your Dots:</h1>
            <ol>
                {logs.map((log, index) =>
                    <li key={index}>
                        {currentlyEditingIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={tempEditValue}
                                    onChange={handleEditChange}
                                />
                                <button onClick={() => saveEdit(index)}>Save</button>
                            </>
                        ):(
                            <>
                              <span className="text">{log}</span>
                              <div className="log-buttons">
                                <Button text="Edit" onClick={() => startEditing(index)} className="edit-button" />
                                <Button text="Delete" onClick={() => deleteLog(index)} className="delete-button" />
                              </div>
                            </>
                        )}
                    </li>
                )}
            </ol>
        </div>
    </div>
  )
}

export default Home
