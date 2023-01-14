import * as React from "react"

export const InputField = React.memo(({label, id, dirty, error, value, onBlur, onChange, type = "text"}) => {
	return <>
		<label htmlFor={id}>{label}</label>
		{(dirty && error)
      && <div className='text-red-800'>{error}</div>
    }
		<input
			className='block p-2'
			id={id}
			type={type}
			value={value}
			onBlur={onBlur}
			onChange={event => onChange(event.target.value)}
		/>
	</>
})
