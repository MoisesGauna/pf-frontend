import Swal from 'sweetalert2';

export const createAlert = (type,title,message) => Swal.fire({
    icon:type,
    title,
    text:message,
    timer:3000,
    showConfirmButton:false
})

export const createAlertWithCallback = (type,title,message,callback) => Swal.fire({
    icon:type,
    title,
    html:message,
    showConfirmButton:true
}).then(result=>{
    callback()
})

export const ExpirationAlertWithCallback = (type,title,message,callback) => Swal.fire({
    icon:type,
    title,
    html:message,
    showConfirmButton:true
}).then(result=>{
    callback()
})