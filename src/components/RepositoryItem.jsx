export function RepositoryItem(props) {
    return(
        <li>
            <strong>{props.repository.name ?? 'null'}</strong>
            <p>{props.repository?.description ?? 'null'}</p>

            <a href={props.repository.link ?? 'null'}>
                "Acessar repositório"
            </a>
        </li>
    )
}

