import React from 'react'
import Header from '../layout/Header'
import Body from '../layout/Body'

export default function Home() {
	return (
		<div className="grid grid-rows-header">
			<Header className="z-10"/>
			<Body />
		</div>
	)
}
