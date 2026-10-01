import { type FormEvent, useState } from 'react'
type TodoInputProps = { onAdd: (text: string) => void }
export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState(''); const [showError, setShowError] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const trimmedText = text.trim(); if (!trimmedText) { setShowError(true); return }; onAdd(trimmedText); setText(''); setShowError(false) }
  return <form className="add-form" onSubmit={submit} noValidate><label className="sr-only" htmlFor="new-todo">새 할 일</label><input id="new-todo" value={text} onChange={(event) => { setText(event.target.value); if (showError) setShowError(false) }} placeholder="새로운 할 일을 입력하세요" aria-invalid={showError} aria-describedby={showError ? 'todo-error' : undefined} maxLength={120} /><button className="add-button" type="submit" aria-label="할 일 추가"><span aria-hidden="true">+</span><span>추가</span></button>{showError ? <p id="todo-error" className="input-error">내용을 입력해 주세요.</p> : null}</form>
}
