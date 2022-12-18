import React, { useEffect, useState } from 'react';


export default function ContactForm() {
	const TOKEN = "5775183225:AAGUPuyf5PHRfSa5Zoux-zz5_KWIx1vHAPo";
	const CHAT_ID = "-1001759583869";
	const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

	const [name, setName] = useState('');
	const [nameDirty, setNameDirty] = useState(false);
	const [nameError, setNameError] = useState('');

	const onNameChange = React.useCallback((value) => {
		if (!nameDirty) {
			setNameDirty(true)
		}
		setName(value)
		setNameError(validateName(value))
	}, [nameDirty])

	let formatBody = ({ sender, phone, orderText }) => `
	<h4>Заявка с сайта</h4>
	<p>
	  <b>Отправитель:</b> ${sender}<br/>
	  <b>Телефон:</b> ${phone}<br/>
	  <b>Текст заказа:</b> ${orderText}
	</p>
 `

	const blurHandler = React.useCallback((e) => {
		switch (e.target.id) {
			case 'name':
				setNameDirty(true)
				break

		}
	}, [])

	const handleSubmit = e => {
		// TODO reset ALL dirty, ALL errors, etc. to false if we don't redirect

		e.preventDefault();
		const data = {
			name,
			phone,
			text,
		};


		fetch(`https://api.telegram.org/bot5775183225:AAGUPuyf5PHRfSa5Zoux-zz5_KWIx1vHAPo/sendMessage`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				chat_id: "-1001759583869",
				text: "<b>test</b>",
				parse_mode: "html",
			})
		})
			.then(resp => {
				return resp.json()
			})
	};



	return (
		<div>
			<form className='container block mx-auto'>
				<h3>Отправка формы заказа для связи</h3>
				<NameField
					nameDirty={nameDirty}
					nameError={nameError}
					name={name}
					blurHandler={blurHandler}
					onChange={onNameChange}
				/>
				<button
					className='block p-2 border border-red-700 disabled:cursor-not-allowed '
					type="submit"
				>
					Send
				</button>
			</form>
		</div >
	);
}

function validateName(name) {
	if (!name) {
		return "Заполните поле"
	} else if ((String(e.target.value)).length < 3) {
		return "Введите 3 буквы"
	} else {
		return ""
	}
}

const NameField = React.memo(({ nameDirty, nameError, name, onBlur, onChange }) => {
	return <>
		<label htmlFor="name">Имя:</label>
		{(nameDirty && nameError) && <div className='text-red-800'>{nameError}</div>}
		<input
			className='block'
			id="name"
			type="text"
			value={name}
			onBlur={onBlur}
			onChange={event => onChange(event.target.value)}
		/>
	</>
})