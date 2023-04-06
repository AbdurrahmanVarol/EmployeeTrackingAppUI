const formatDate = (input)=>{
    let date = new Date(input)
    
    let a = func(date.getDate())
   
    let month = func(date.getMonth() +1)
    let year = date.getFullYear()

    let hour = func(date.getHours())
    let minute = func(date.getMinutes())
    let second = func(date.getSeconds())

    let formatedDate = `${a}.${month}.${year} ${hour}:${minute}:${second} `
    return formatedDate
}
const func =(param) =>{
    if(Number(param)<10){
        return"0"+ param
    }
    return param
}
export default formatDate