import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props) {
    return (
        <section className=".suggested-recipe-contatiner">
            <h2>Chef Cluade Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>            
        </section>
    )

}