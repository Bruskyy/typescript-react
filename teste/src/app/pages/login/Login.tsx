import { useEffect, useState } from "react"

export const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setPassword] = useState('')

    useEffect(() =>{
        if(window.confirm('Você é homem?'))
            console.log('homem')
        else{
            console.log('mulher')
        }
    }, [])

    useEffect(() => {
        console.log('E-mail: ' + email)
    }, [email])

    useEffect(() => {
        console.log('Senha: ' + senha)
    }, [senha])

    const handleEntrar = () => {
        console.log('E-mail: ' + email)
        console.log('Senha: ' + senha)
    }

    return (
        <div>
            <form>
                <label>
                    <span>E-mail</span>
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                </label>

                <label>
                    <span>
                        Senha
                    </span>
                    <input type="password" value={senha} onChange={e => setPassword(e.target.value)} />
                </label>
            </form>

            <button type="button" onClick={handleEntrar}>Entrar</button>
            <div>

            </div>
        </div>

    )
}