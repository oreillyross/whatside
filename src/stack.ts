export {}


class Stack<T> {
    
  _store: T[] = [];
  
  push(val: T) {
    this._store.push(val)
  }

  pop() {
    return this._store.pop()
  }

}

const stack = new Stack<string>() 

stack.push('a')
stack.push('1')


console.log(stack)

stack.pop()

console.log(stack)