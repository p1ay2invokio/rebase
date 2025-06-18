import { refactorPhoneNumber } from "./ingredients"


const run=()=>{
    let phone = '0956975152'

    let res = refactorPhoneNumber(phone)

    console.log(res)
}

run()