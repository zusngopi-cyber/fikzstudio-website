'use client'

import { useEffect } from 'react'

export default function SnippetLoader() {
  useEffect(() => {
    // Load snippets from localStorage
    const snippetsData = localStorage.getItem('snippets')
    if (!snippetsData) return

    try {
      const snippets = JSON.parse(snippetsData)
      
      // Apply active CSS snippets
      snippets.forEach((snippet: any) => {
        if (snippet.active && snippet.type === 'css') {
          // Create style element
          const styleEl = document.createElement('style')
          styleEl.id = `snippet-${snippet.id}`
          styleEl.textContent = snippet.code
          
          // Append to head
          if (snippet.location === 'head') {
            document.head.appendChild(styleEl)
          }
        }
        
        // Apply active JavaScript snippets
        if (snippet.active && snippet.type === 'javascript') {
          const scriptEl = document.createElement('script')
          scriptEl.id = `snippet-${snippet.id}`
          scriptEl.textContent = snippet.code
          
          if (snippet.location === 'head') {
            document.head.appendChild(scriptEl)
          } else {
            document.body.appendChild(scriptEl)
          }
        }
        
        // Apply active HTML snippets
        if (snippet.active && snippet.type === 'html') {
          const div = document.createElement('div')
          div.id = `snippet-${snippet.id}`
          div.innerHTML = snippet.code
          
          if (snippet.location === 'footer') {
            document.body.appendChild(div)
          }
        }
      })
    } catch (error) {
      console.error('Error loading snippets:', error)
    }

    // Cleanup function
    return () => {
      const snippetsData = localStorage.getItem('snippets')
      if (!snippetsData) return
      
      try {
        const snippets = JSON.parse(snippetsData)
        snippets.forEach((snippet: any) => {
          const el = document.getElementById(`snippet-${snippet.id}`)
          if (el) el.remove()
        })
      } catch (error) {
        console.error('Error cleaning up snippets:', error)
      }
    }
  }, [])

  return null
}
