export const refactorPhoneNumber=(phone: string)=>{

    let check = (/^d{10}/).test(phone)

    if(check){
        return phone.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3')
    }else{
        return "Digits not 10"
    }
}