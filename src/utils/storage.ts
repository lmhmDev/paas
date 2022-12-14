export const storeImage = async (url:String) => {
    const storage = window.localStorage.getItem('urls')
    if(storage){
        const urls = await JSON.parse(storage)
        if(!urls.includes(url)){
            urls.push(url)
            window.localStorage.setItem('urls',JSON.stringify(urls))
        }
    } else{
        window.localStorage.setItem('urls',JSON.stringify([url]))
    }
}

export const getImages = async() => {
    const storage = await window.localStorage.getItem('urls')
    if(storage){
        const urls = await JSON.parse(storage)
        return urls;
    }
    return false
}

export const deleteImage = async(url) => {
    const storage = await window.localStorage.getItem('urls')
    const urls = await JSON.parse(storage)
    if(urls.includes(url)){
        var index = urls.indexOf(url);
        urls.splice(index, 1);
        window.localStorage.setItem('urls',JSON.stringify(urls))
    }
}