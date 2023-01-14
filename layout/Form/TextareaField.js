import * as React from "react"

export const TextareaField = React.memo(({ label, id, dirty, error, value, onBlur, onChange }) => {
	return <>
		<label htmlFor="text">{label}</label>
		{(dirty && error) && <div className='text-red-800'>{error}</div>}
		<textarea
			className='block min-h-[150px] p-2'
			id={id}
			placeholder=''
			value={value}
			onBlur={onBlur}
			onChange={event => onChange(event.target.value)}
		/>
	</>
})
