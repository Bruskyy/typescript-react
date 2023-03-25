import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('./pagina-inicial')
    }

    const handleEntrar = () =>{
        console.log('E-mail: ' + email)
        console.log('Senha: ' + senha)
    }
    const [email, setEmail] = useState('')
    const [senha, setPassword] = useState('')

    return (
        <div>
            <form>
                <label>
                    <span>E-mail</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
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
                <button onClick={handleClick}>Página Inicial</button>
            </div>
        </div>

    )
}