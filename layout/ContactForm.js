import React, { useEffect, useState } from 'react';
import {InputField, TextareaField} from "layout/Form"

export default function ContactForm() {
	const TOKEN = "5775183225:AAGUPuyf5PHRfSa5Zoux-zz5_KWIx1vHAPo";
	const CHAT_ID = "-1001759583869";
	const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [nameDirty, setNameDirty] = useState(false);
	const [phoneDirty, setPhoneDirty] = useState(false);
	const [messageDirty, setMessageDirty] = useState(false);
	const [nameError, setNameError] = useState('');
	const [phoneError, setPhoneError] = useState('');
	const [messageError, setMessageError] = useState('');
	const isFormDirty = nameDirty || phoneDirty || messageDirty
	const errorCount = validateForm({name, phone, message})
	const isFormValid = errorCount == 0

	const onNameChange = React.useCallback((value) => {
		if (!nameDirty) {
			setNameDirty(true)
		}
		setName(value)
		setNameError(validateName(value))
	}, [nameDirty])

	const onPhoneChange = React.useCallback((value) => {
		if (!phoneDirty) {
			setPhoneDirty(true)
		}
		setPhone(value)
		setPhoneError(validatePhone(value))
	}, [phoneDirty])

	const onMessageChange = React.useCallback((value) => {
		if (!messageDirty) {
			setMessageDirty(true)
		}
		setMessage(value)
		setMessageError(validateMessage(value))
	}, [messageDirty])

	let formatBody = ({ sender, phone, message }) => `
	<h4>Заявка с сайта</h4>
	<p>
	  <b>Отправитель:</b> ${sender}<br/>
	  <b>Телефон:</b> ${phone}<br/>
	  <b>Сообщение:</b> ${message}
	</p>
 `

	const blurHandler = React.useCallback((e) => {
		switch (e.target.id) {
			case 'name':
				setNameDirty(true)
				break
		}
		switch (e.target.id) {
			case 'phone':
				setPhoneDirty(true)
				break
		}
		switch (e.target.id) {
			case 'message':
				setMessageDirty(true)
				break
		}
	}, [])

	const handleSubmit = () => {
		// TODO reset ALL dirty, ALL errors, etc. to false if we don't redirect
		let formatBody = ({ sender, phone, message }) => `
			<strong>Заявка с сайта</strong>n/
			<b>Отправитель:</b> ${name}n/
			<b>Телефон:</b> ${phone}n/
			<b>Сообщение:</b> ${message}
		`

		let body = formatBody({
			sender: this.name.value,
			phone: this.phone.value,
			message: this.message.value,
		})

		fetch(`https://api.telegram.org/bot5775183225:AAGUPuyf5PHRfSa5Zoux-zz5_KWIx1vHAPo/sendMessage`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				chat_id: "-1001759583869",
				text: formatBody,
				parse_mode: "html",
			})
		})
			.then(resp => {
				return resp.json()
				setName('');
				setPhone('');
				setMessage('');
				setNameDirty(false);
				setPhoneDirty(false);
				setMessageDirty(false);
			})
			.catch((err) => {
				console.warn(err);
			})
			.finally(() => {
				console.log('Конец');
			})
	};

	return (
		<div>
			<form className='container block mx-auto'>
				<h3>Отправка формы заказа для связи</h3>
				<InputField
					type="text"
					label={`Имя: *`}
					dirty={nameDirty}
					error={nameError}
					value={name}
					onBlur={blurHandler}
					onChange={onNameChange}
				/>
				<InputField
					type="tel"
					label={`Телефон: *`}
					dirty={phoneDirty}
					error={phoneError}
					value={phone}
					onBlur={blurHandler}
					onChange={onPhoneChange}
				/>
				<TextareaField
					label={`Сообщение: *`}
					dirty={messageDirty}
					error={messageError}
					value={message}
					onBlur={blurHandler}
					onChange={onMessageChange}
				/>
				<button
					disabled={!isFormValid}
					className='block p-2 border border-red-700'
					type="submit"
					onClick={handleSubmit}
				>
					Send
				</button>
			</form>
		</div >
	);
}

function validateName(name) {
	const re = /^[-A-ZА-Я' ]+?$/iu
	if (!name) {
		return "Заполните поле"
	} else if (!re.test(String(name))) {
		return "Введите только буквы"
	} else {
		return ""
	}
}

function validatePhone(phone) {
	const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/u
	if (!phone) {
		return "Заполните поле"
	} else if (!re.test((phone))) {
		return ('Введите корректный телефон')
	} else {
		return ""
	}
}

function validateMessage(message) {
	if (!message) {
		return "Заполните поле"
	} else {
		return ""
	}
}

// Returns # of errors (0+)
function validateForm({name, phone, message}) {
	return [validateName(name), validatePhone(phone), validateMessage(message)].filter(Boolean).length
}
