
export function consulta(){
const user = JSON.parse(localStorage.getItem("user"));
return user;
}

export function consultaLogin(){
    const login = JSON.parse(localStorage.getItem("login"));
    if (!login) {
        return false
    }
    return true;
}