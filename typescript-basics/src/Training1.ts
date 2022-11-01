interface Point {
    x: number
    y: number
  }
  
  function logPoint(point: Point): void {
    console.log(`${point.x}, ${point.y}`)
  }
  
  // logs "12, 26"
  const force = { x: 12, y: 26 }
  logPoint(force)


  function printText(str: string, alignment:"UP"| "DOWN"| "CENTER") {
    console.log('s:cd ');
  }