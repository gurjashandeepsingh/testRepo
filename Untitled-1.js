// Sorting Algorithm 

let array = [40,30,12,25];
for(let i=0;i=array.length;i=i+1){
    for(let j=0;j=array.length;j=j+1){
        console.log(j);             /* Helps to debug code */
        if(array[j]>array[j+1]){
            array[j]=temp;
            console.log(array[j]); /* Helps to debug code */
            array[j]=array[j+1]
            array[j+1]=temp
        }
    }
}

__
//  Searching
 Binary Search -Iterative
 Let array = [1,2,3,4,5,6,7];
 let start = 0;
 let end = array.length-1;
 let find = 3;
 while(start<=end){
    let midPoint=(start+end)/2
    if(array[midPoint]==find){
        position=midPoint; 
        console.log(position); /* Helps to debug code */
    }
    if(array[midPoint]>find){
        end=midPoint-1;
        console.log(end); /* Helps to debug code and it's output */
    }
    else{
        start=midPoint+1;
        console.log(start); /* Helps to debug code */
    }
    break
 }

// Selecton Sort 
// let array = [5,2,7,3,4,9,1,8,6];
// const selectionSort = () => {
//     for(let i=0;i=array.length;i=i+1){
//         minimum=i;
//         for(let j=i+1;j=array.length;j=j+1){
//             if(array[i]>array[j]){
//                 minimum=array[j];
//             }
//         }
//     let temp=array[i];
//     array[i]=minimum;
//     array[j]=temp;
//     }
// }

// Insertion Sort 