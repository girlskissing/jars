<script lang="ts">
	import LL from '$lib/locale/i18n-svelte';
	import { clickoutside } from '@svelte-put/clickoutside';
	import { Languages, Check } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	let open = false;
	let dropdownWidth = 0;
	let languages = [
		{
			name: 'english',
			code: 'en',
		},
		{
			code: 'de',
			name: 'deutsch',
		},
		{
			code: 'fr',
			name: 'français',
		},
		{
			code: 'es',
			name: 'español',
		},
		{
			code: 'it',
			name: 'italiano',
		},
		{
			code: 'pt',
			name: 'português',
		},
		{
			code: 'ru',
			name: 'русский',
		},
		{
			code: 'zh',
			name: '中文',
		},
		{
			code: 'ja',
			name: '日本語',
		},
		{
			code: 'ko',
			name: '한국어',
		},
	];
</script>

<div class="relative" style="margin-inline-start: {dropdownWidth}px;">
	<div
		bind:clientWidth={dropdownWidth}
		class="absolute z-50 bg-snow-100 transition-all ltr:-translate-x-full rtl:translate-x-full"
		use:clickoutside
		on:clickoutside={() => (open = false)}
	>
		<div
			class="{open
				? `border-opacity-100 shadow-lg`
				: 'border-opacity-0'}
			border-purple-500 border p-2 -translate-x-2 -translate-y-2 ltr:ms-2 ltr:-me-2 rtl:-ms-2 rtl:me-2 rounded-md flex flex-col min-w-fit"
		>
			<button on:click={() => (open = !open)}>
				<div class="flex items-center">
					<Languages height="32" width="32" />
					<span class="ms-2 font-display text-xl">{$LL.meta.languageName()}</span>
				</div>
			</button>
			{#if open}
				{#each languages as language}
					{#if language.name !== $LL.meta.languageName()}
						<button class="text-start ps-2 mt-1 py-1 font-display text-xl">
							<span>{language.name}</span>
						</button>
					{/if}
				{/each}
			{/if}
		</div>
	</div>
</div>
