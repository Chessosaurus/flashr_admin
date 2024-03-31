<template>
	<div class="app" v-if="session" :session="session">
		<!-- Sidebar -->
		<Sidebar />

		<!-- Content -->
		<router-view />
	</div>
	<div v-else>
		<Auth/>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {supabase} from './supabase'
import Sidebar from './components/Sidebar.vue'
import Auth from './components/Auth.vue'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<style lang="scss">
:root {
	--primary: #85def7;
	--primary-alt: #4c7e8c;
	--grey: #64748b;
	--grey-alt: #839ab9;
	--dark: #1e293b;
	--dark-alt: #334155;
	--blury-dark: #2c3c57;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>