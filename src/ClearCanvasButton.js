import React from 'react'
import { useCanvas } from './CanvasContext'
import './App.css';
export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

  return <button className="clear-button bg-green-400" id="clear-button" onClick={clearCanvas}>Clear Screen</button>
}