import { useEffect, useState } from 'react';

export default function ContactForm() {
	const TOKEN = "5775183225:AAGUPuyf5PHRfSa5Zoux-zz5_KWIx1vHAPo";
	const CHAT_ID = "-1001759583869";
	const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [text, setText] = useState('');
	const [nameDirty, setNameDirty] = useState(false);
	const [phoneDirty, setPhoneDirty] = useState(false);
	const [textDirty, setTextDirty] = useState(false);
	const [nameError, setNameError] = useState('Поле "Имя" не может быть пустым');
	const [phoneError, setPhoneError] = useState('Поле "Телефон" не может быть пустым');
	const [textError, setTextError] = useState('Поле "Текст" не может быть пустым');
	const [formValid, setFormValid] = useState(false)

	useEffect(() => {
		if (setNameError || setPhoneError || setTextError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [nameError, phoneError, textError])

	const nameHandler = (e) => {
		setName(e.target.value)
		const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
		if (!re.test(String(e.target.value))) {
			setNameError('Введите только буквы')
		} else {
			setNameError('')
		}
	}
	const phoneHandler = (e) => {
		setPhone(e.target.value)
		const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/u
		if (!re.test(String(e.target.value))) {
			setPhoneError('Введите корректный телефон')
		} else {
			setPhoneError('')
		}
	}
	const textHandler = (e) => {
		setText(e.target.value)
		if ((String(e.target.value)).length < 10) {
			setTextError('Введите корректный заказ')
		} else {
			setTextError('')
		}
	}

	const blurHandler = (e) => {
		switch (e.target.id) {
			case 'name':
				setNameDirty(true)
				break
			case 'phone':
				setPhoneDirty(true)
				break
			case 'message':
				setTextDirty(true)
				break
		}
	}

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			name,
			phone,
			text,
		};
		fetch(URI_API)
			.then((res) => {
				this.name.value = "";
				this.phone.value = "";
				this.text.value = "";
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
			<form onSubmit={handleSubmit} className='container block mx-auto'>
				<h3>Отправка формы заказа для связи</h3>
				<label htmlFor="name">Имя:</label>
				{(nameDirty && nameError) && <div className='text-red-800'>{nameError}</div>}
				<input
					className='block'
					id="name"
					type="text"
					value={name}
					onBlur={e => blurHandler(e)}
					onChange={e => nameHandler(e)}
				/>
				<label htmlFor="phone">Телефон:</label>
				{(phoneDirty && phoneError) && <div className='text-red-800'>{phoneError}</div>}
				<input
					className='block'
					id="phone"
					type="tel"
					value={phone}
					onBlur={e => blurHandler(e)}
					onChange={e => phoneHandler(e)}
				/>
				<label htmlFor="message">Текст:</label>
				{(textDirty && textError) && <div className='text-red-800'>{textError}</div>}
				<textarea
					className='block'
					id="message"
					type="text"
					rows="4"
					value={text}
					onBlur={e => blurHandler(e)}
					onChange={e => textHandler(e)}
				/>
				<button
					className='block p-2 border border-red-700 disabled:cursor-not-allowed '
					disabled={!formValid}
					type="submit"
				>
					Send
				</button>
			</form>
		</div >
	);
}