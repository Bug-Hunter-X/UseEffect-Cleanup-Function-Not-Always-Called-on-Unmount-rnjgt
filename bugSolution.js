```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let isEffectActive = true;
    const cleanup = () => {
      console.log('Component unmounting');
      isEffectActive = false;
    };

    const handleUpdate = () => {
      if (isEffectActive) {
        console.log('Count updated:', count);
      }
    };

    handleUpdate();
    return cleanup;
  }, [count, isMounted]);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```