interface ErrorListProps {
    errors: string[]
}

export const ErrorList = ({errors}: ErrorListProps) => {
    return (
        <ul>
            {errors.map((error: string) => <li key={error}>{error}</li>)}
        </ul>
    )
}