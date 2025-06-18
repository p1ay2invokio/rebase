import { refactorPhoneNumber } from "./ingredients"

const greetings=(name:string)=>{
    console.log(`Hi ${name} we are happy to see you again!`)
}

const cooking=()=>{
    console.log("I'm Cooking Right now!")
}

const Swim=()=>{
    console.log(`Swim`)
}


const walk=()=>{
    console.log("walking")
}

const speak=()=>{
    console.log("Speaking")
}

const punch=()=>{
    console.log("One Punch!!!")
}
const grab=()=>{
    console.log("grabing Box")
}

const stare=()=>{
    console.log("Looking your eyes")
}

const attack=()=>{
    console.log("Attack!")
}

const takeShower=()=>{
    console.log("Take Shower")
}

const Kiss=()=>{
    console.log("Kissing")
}

const Eat=()=>{
    console.log("Eating")
}
const pee=()=>{
    console.log("peeing")
}

const run=()=>{
    let phone = '0956975152'

    let res = refactorPhoneNumber(phone)

    console.log(res)
    greetings("play2")
    cooking()
    Swim()

    punch()

    walk()
    speak()

    grab()

    stare()
    
    attack()

    takeShower()

    Kiss()

    Eat()
    pee()
}

run()