import { refactorPhoneNumber } from "./ingredients"

const greetings=(name:string)=>{
    console.log(`Hi ${name} we are happy to see you again!`)
}

const cooking=()=>{
    console.log("I'm Cooking Right now!")
}


const run=()=>{
    let phone = '0956975152'

    let res = refactorPhoneNumber(phone)

    console.log(res)
    greetings("play2")
    cooking()
}

run()