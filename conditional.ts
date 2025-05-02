type StringArray = string[];
// type ElementType<T extends any[]> = T[number]

// type Example1 = ElementType<StringArray>

type GetElementType<T> = T extends any[] ? T[number] : T; 
type Example1 = GetElementType<StringArray>