import React from 'react';
import '../Styles/CadastroLink.css';


class CadastroLink extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <div className = "cadastro">
                      <label htmlFor= "title" type = "text">Rede social</label> 
                      <input id = "title" name= "title" type= "text"/>
                    </div>
                    <div className = "cadastro">
                        <label htmlFor= "url" type = "text">Link</label> 
                        <input id = "url" name= "url" type= "text"/>
                        <button type = 'submit'>adicionar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CadastroLink;