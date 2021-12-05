import { quotes } from "./quotes.js"

const name = document.querySelector('#name')
const age = document.querySelector('#age')
const nascimento = document.querySelector('#nascimento')
const nextbtd = document.querySelector('#nextbtd')
const frase = document.querySelector(".quote")
const autor = document.querySelector('.autor')
const changeTheme = document.querySelector('#changeTheme')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const foot = document.querySelector('footer')

name.innerHTML='Janaina'

const getQuotes = quotes[Math.floor((Math.random()*quotes.length - 1)+1)];
     
frase.textContent = getQuotes.frase
autor.textContent = getQuotes.author

changeTheme.addEventListener('click',()=>{
    
    if(changeTheme.value ==='black'){
     
        body.style.backgroundColor = 'black'
        body.style.color = 'white'   
        header.style.boxShadow = '0 0 12px'
     

    }else if(changeTheme.value === 'white'){
       body.style.backgroundColor = 'white'
       body.style.color='black'

    }else if(changeTheme.value === 'lightblack'){
        body.style.backgroundColor = '#1C1C1C'
        body.style.color = 'white'
        header.style.boxShadow = '0 0 12px'
    }
    
})

const today = new Date()
const getNascimento = new Date('February 23, 1985')

const dataDeNascimento = ()=>{
    return nascimento.innerHTML = getNascimento.toLocaleString().replace('00:00:00', '')
}
dataDeNascimento()

const calculaIdade = ()=>{
    let calcIdade = today.getTime() - getNascimento.getTime()
    calcIdade = Math.floor(calcIdade/31556900000)
    return age.innerHTML = calcIdade
}
calculaIdade()

function nextBurthday(){
    let inicio = new Date()
    let end = new Date('February 23, 2022')
    let days = Math.abs(end.getTime() - inicio.getTime())
    let nova = Math.ceil(days/(1000*60*60*24)+1)


    return nextbtd.innerHTML=nova
}
 nextBurthday()

class ShowTimer{
    constructor(){
        this._eldate = document.querySelector('.date')
        this._elhour = document.querySelector('.hora')
        this._elcurrenteTime
        this._locale = 'pt-BR'
        this.initializer()
    }

    configTime(){
        this.date = this.currentTime.toLocaleDateString(this._locale,{
            day:'2-digit',
            month:'long',
            year:'numeric'
        })

        this.hour = `BR ${this.currentTime.toLocaleTimeString(this._locale)}`
    }

    initializer(){
        this.configTime()
        setInterval(()=>{
            this.configTime()
        },1000)
    }



    get date(){
        return this._eldate.innerHTML
    }
    set date(valor){
        this._eldate.innerHTML = valor
    }

    get hour(){
        return this._elhour.innerHTML
    }
    set hour(valor){
        this._elhour.innerHTML = valor
    }

    get currentTime(){
        return this._elcurrenteTime = new Date
    }
    set currentTime(today){
        this._elcurrenteTime = today
    }
       
}

window.stratTimer = new ShowTimer





 