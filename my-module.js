async function async(number){

    const user=await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();

    const post=await (await fetch("https://jsonplaceholder.typicode.com/posts?posts")).json();

    console.log("user",user);
    console.log("post",post);
}

async(1);

const number="user ID";

// export default async;