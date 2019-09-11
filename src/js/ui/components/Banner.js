export default (banner) => {


    return `<span>${banner.messages[0]} ${banner.mark ? `<strong class='mark'>${banner.mark}</strong>` : ""}</span>
           "<span>${banner.messages[1]}</span>
           "<span><cite>${banner.author}</cite></span>`
            
}