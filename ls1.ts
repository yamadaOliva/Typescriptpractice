const message: string = 'Hello World';
console.log(message);
const user:{
    name: string,
    age: number
} = {
    name: 'John',
    age: 30
}
console.log(user);
const array: number[] = [1,2,3];
const mixer: (string | number)[] = [1,2,3,'Hello'];
const arrayObj: {name: string, age: number}[] = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Jane',
        age: 20
    }
]
console.log(arrayObj);

