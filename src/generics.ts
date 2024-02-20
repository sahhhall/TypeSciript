// what we pass thaat typrscript infer 

function getAge <T> (age: T): T {
    return age;
}

getAge("20");
getAge(12)


////////////

type status = "pending" | "completed" | "failed"