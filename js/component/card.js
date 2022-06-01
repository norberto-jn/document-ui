const card = "<section><h2># @title</h2><p>@content @code </section>"
const cardcode = "<div style=background-color:#252a37;border-radius:10px class=l-ide><div style=display:flex><div style=background-color:#f85e55 class=c-circle-ide></div><div style=background-color:#ffbd3c class=c-circle-ide></div><div style=background-color:#5dca41 class=c-circle-ide></div></div><pre id=@id style=color:#fff;padding:3%></pre></div>"

export function getCard(code, title, content, codelink) {

    if (codelink) {

        return card
            .replace('@title', title)
            .replace('@content', content)
            .replace('@code', cardcode)
            .replace('@id', `link_${code}`)
    }

    return card
        .replace('@title', title)
        .replace('@content', content)
        .replace('@code', '')

}


