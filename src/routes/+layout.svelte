<script lang="ts">
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';

	import '../app.postcss';
	import '@fontsource/itim';
	import '@fontsource/nunito';
	import { Share } from 'lucide-svelte';
</script>

<nav class="px-8 my-4 w-full max-h-12 text-purple-700 flex justify-end">
	
	<!-- placeholder -->
	<div class="inline mx-2">
		<div class="flex items-center">
			<Share height="32" width="32" />
			<span class="ms-2 font-display text-xl">placeholder but long</span>
		</div>
	</div>

	<div class="inline-block mx-2">
		<LanguageSelector />
	</div>
</nav>
<slot />
