const SimpleAdding = n => n === 1 ? 1 : n + SimpleAdding(n-1)

SimpleAdding(12) //?
// → 78