export function SetLocalStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data))
}

export function GetLocalStorage(key){
    let storage = localStorage.getItem(key)
    return JSON.parse(storage)
}