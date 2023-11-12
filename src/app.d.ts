// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import 'unplugin-icons/types/svelte'
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			locale: string;
		}
		// interface PageData {}
		// interface Platform {}
	}
}
export {};
