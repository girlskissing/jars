import type { BaseTranslation } from '../i18n-types'

const en = {
	// TODO: your translations go here
	meta: {
		languageName: 'english',
		languageCode: 'en',
	},
	topbar: {
		languagePicker: {
			title: 'language',
		}
	},
	HI: 'Hi {name:string}! Please leave a star if you like this project: https://github.com/ivanhofer/typesafe-i18n',
} satisfies BaseTranslation

export default en
