const audio = document.querySelector('#audio');
const barra = document.querySelector('#barra');
const btn_Play_Pause = document.querySelector('#btn-play-pause');
const atual = document.querySelector('#atual');
const duracao = document.querySelector('#duracao');

btn_Play_Pause.addEventListener('click', ()=>{
    if(audio.paused ===true){
        audio.play()
        btn_Play_Pause.innerHTML = '||'
    }
    else{
        audio.pause()
        btn_Play_Pause.innerHTML = '&#x25B6;'
        
    }

}) // o play e o pause da musica


audio.addEventListener('loadedmetadata',()=>{
    barra.max = audio.duration
    duracao.innerHTML = formatarTempo(audio.duration)
}) // quando o audio carregar vai pegar o tanto de segundos e transformar


audio.addEventListener('timeupdate',()=>{
    barra.value = audio.currentTime
    atual.innerHTML = formatarTempo(audio.currentTime)
}) // atualizar a barra enquanto o audio toca

audio.addEventListener('ended', () => {
    btn_Play_Pause.innerHTML = '&#x25B6;';
})

barra.addEventListener('input',()=>{
    audio.currentTime = barra.value
}) // ao mexer na barra fica com a quantidade no audio

function formatarTempo(segundos){
    const min = Math.floor(segundos / 60)
    const seg = Math.floor(segundos % 60)
      return `${min < 10 ? '0' + min : min}:${seg < 10 ? '0' + seg : seg}`
}



const dias = document.querySelector('#dias');
const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');



function tempoDeNamoro(){
    const dataAtual = new Date();
    const dataInicial = new Date(2024,4,22) // Data do inicio do namoro

    const calcularTempo = dataAtual - dataInicial

    const dia = Math.floor(calcularTempo/(1000*60*60*24))
    const hora = Math.floor((calcularTempo%(1000*60*60*24))/(1000*60*60))
    const min = Math.floor((calcularTempo%(1000*60*60))/(1000*60))
    const seg = Math.floor((calcularTempo%(1000*60))/(1000))


    dias.innerHTML = dia
    horas.innerHTML = hora
    minutos.innerHTML = min
    segundos.innerHTML = seg

    
}

setInterval(tempoDeNamoro, 1000)