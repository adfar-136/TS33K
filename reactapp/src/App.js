import React from 'react'
import Counter from './components/ErrorBoundary/Counter'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Todo from "./components/CustomHooks/Todo"

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
      <Todo/>
      

      
    </div>

    
  )
}
