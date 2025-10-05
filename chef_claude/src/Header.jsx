import chefClaude from './assets/chef_icon.png'

export default function Header(){
    return (
        <header>
            <img src={chefClaude} alt="Chef Icon"/>
            <h1>Chef Claude</h1>
        </header>
    )

}