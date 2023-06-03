// Vue.createApp({
//     data(){
//         return{
//             firstName : 'baharma',
//             lastName : 'dharma'
//         }
//     }
// }).mount('#app')

// const vm  = Vue.createApp({
//     data(){
//         return{
//             firstName : 'baharma',
//             lastName : 'dharma'
//         }
//     }
// }).mount('#app')


// setTimeout(()=>{
//     vm.firstName = 'bod';
// },2000);


const vm = Vue.createApp({
    data(){
        return{
            firstName: 'baharma',
            lastName : 'doe',
        }
    },
    methods :{
        fullname(){
            return `${this.firstName}  ${this.lastName.toUpperCase()}` 
        }
    }
}).mount('#app')