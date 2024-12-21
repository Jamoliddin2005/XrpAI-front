import React, { useState, useEffect, useRef } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeViewer = ({ copyText, onAnimationComplete }) => {
  const [visibleText, setVisibleText] = useState('')
  const [animationComplete, setAnimationComplete] = useState(false)
  const codeContainerRef = useRef(null)

  const sampleCode = `
import hashlib
def hash_string(input_string, algorithm='md5'):
    if algorithm == 'md5':
        hash_object = hashlib.md5()
    elif algorithm == 'sha256':
        hash_object = hashlib.sha256()
    else:
        raise ValueError("Supported algorithms: 'md5', 'sha256'")
    
    hash_object.update(input_string.encode('utf-8'))
    return hash_object.hexdigest().upper()

def check_hash(input_string, expected_hash, algorithm='md5'):
    computed_hash = hash_string(input_string, algorithm)
    return computed_hash == expected_hash

if __name__ == "__main__":
    expected_hash = ${copyText}
    algorithm = 'md5'
    
    print(f"Checking if any input matches the hash: {expected_hash}")

    while True:
        user_input = input("Enter a string (or press Enter to exit): ")
        if not user_input:
            break
        
        if check_hash(user_input, expected_hash, algorithm):
            print(f"Match found: '{user_input}'")
        else:
            print(f"No match found for: '{user_input}'")
  `

  useEffect(() => {
    if (animationComplete) return

    const words = sampleCode.split(' ')
    let index = 0

    const interval = setInterval(() => {
      if (index < words.length) {
        setVisibleText(prev =>
          prev ? `${prev} ${words[index]}` : words[index]
        )
        index++
        codeContainerRef.current.scrollTop =
          codeContainerRef.current.scrollHeight
      } else {
        clearInterval(interval)
        setAnimationComplete(true)
        if (onAnimationComplete) {
          onAnimationComplete()
        }
      }
    }, 10)

    return () => clearInterval(interval)
  }, [animationComplete, onAnimationComplete, sampleCode])

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxHeight: '300px',
        overflowY: 'auto'
      }}
      ref={codeContainerRef}
    >
      <SyntaxHighlighter language='python' style={oneDark}>
        {visibleText}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeViewer
