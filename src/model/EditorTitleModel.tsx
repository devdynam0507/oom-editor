export default interface EditorTitleModel {
    title: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}