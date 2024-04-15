<template>
	<main class="home-page">
		<h1>Home</h1>

		<v-app style="background-color: var(--light);">
			<v-container fluid class="my-10">
				<h2>QuickInfo</h2>
				<v-row>
					<v-col cols="12">
						<v-card>
							<v-card-text class="text-container">
								<div class="text-item" data-tooltip="Total number of flashr users.">
									<h3>Users: {{ userCount }}</h3>
								</div>
								<div class="text-item" data-tooltip="Total number of database connections in use.">
									<h3>DB connections: {{ sqlConnections }}</h3>
								</div>
								<div class="text-item" data-tooltip="Total time the backend is activly running.">
									<h3>Uptime: {{ uptime }} h</h3>
								</div>
								<div class="text-item" data-tooltip="Total time spent processing on the cpu.">
									<h3>CPU time spent: {{ cpuTime }} h</h3>
								</div>
								<div class="text-item" data-tooltip="Total storage in use in relation to available storage.">
									<h3>Storage in use: {{ usedStorage }} mb / 1000 mb</h3>
								</div>
							</v-card-text>
						</v-card>
					</v-col>
            	</v-row>
				<h2>Statistics</h2>
				<v-row>
					<v-col v-for="(item, index) in team" :key="index" cols="12" sm="6" md="4" lg="6">
						<v-hover>
							<template v-slot:default="{ isHovering, props }">
								<v-card v-bind="props" @click="openModal(index)" :color="isHovering ? 'var(--light)' : undefined" :class="isHovering ? 'scale-out': undefined">
								<v-card-title>{{ item.name }}</v-card-title>
								<v-card-text>						<chart-component :chart-data="chartData" :chart-options="chartOptions"></chart-component>
								</v-card-text>
								<v-card-text>{{ item.role }}</v-card-text>
								</v-card>
							</template>
						</v-hover>
					</v-col>
				</v-row>
			</v-container>

			<v-dialog v-model="modal" max-width="500px">
				<v-card>
					<v-card-title v-if="selectedItemId !== null">{{  team[selectedItemId].name  }}</v-card-title>
					<v-card-text>
						<chart-component :chart-data="chartData" :chart-options="chartOptions"></chart-component>
					</v-card-text>
					<v-card-actions>
						<v-btn class="modal-btn" @click="closeModal">Close</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
			
		</v-app>
	</main>
	
</template>


<style>
	.home-page{
  		height: 100vh; 
  		overflow-y: auto; 
	}		

	.scale-out {
	transition: transform 0.01s;
	}

	.scale-out:hover {
	transform: scale(1.04);
	}

	.modal-btn {
		background-color: var(--grey-alt);
	}
	
	.cards{
		color: black;
	}

	.text-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.text-item {
		flex: 1;
    	margin: 0 5px;
		padding: 15px;
		position: relative;
		user-select: none;
		cursor: pointer;
	}

	.text-item::before {
		content: attr(data-tooltip);
		position: absolute;
		top: -15px;
		left: 50%;
		transform: translateX(-50%);
		display: none;
		background-color: rgba(44, 60, 87, 0.5); 
		color: #fff;
		padding: 5px;
		border-radius: 5px;
		white-space: nowrap;
	}

	.text-item:hover::before {
		display: block;
	}

	@media (max-width: 800px) {
		.text-container {
			flex-direction: column; /* Switch to column layout on smaller screens */
		}
	}
</style>


<script>

import ChartComponent from '../components/ExampleChart.vue';
import parsePrometheusTextFormat from 'parse-prometheus-text-format';
import { getUserCount, getDatabaseConnections, getUptimeOfBackend, getUsedStorage, getCpuTime } from '../typescript/processData';


export default{
	components: {
    	ChartComponent
  	},
	data(){
		return {
			team: [
				{name: 'Database', role:'Displays how many Database requests have been made.'},
				{name: 'Auth', role:'Displays how many Auth requests have been made.'},
				{name: 'Storage', role:'Displays how many Storage requests have been made.'},
				{name: 'Realtime', role:'Displays how many Realtime requests have been made.'},
				{name: 'Users', role:'Displays how many Users are using the app.'},
			],
			modal: false,
			selectedItemId: null,
			chartData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
				label: 'Sales',
				data: [65, 59, 80, 81, 56, 55, 40]
				}]
			},
			chartOptions: {
				responsive: true,
				scales: {
				y: {
					beginAtZero: true
				}
				}
			},
			metricsData:JSON,
			metricsDataArray:null,
			userCount:null,
			sqlConnections:null,
			uptime:null,
			usedStorage:null,
			cpuTime:null
		}
	},
	methods: {
    openModal(index) {
      this.selectedItemId = index;
      this.modal = true;
    },
    closeModal() {
      this.selectedItemId = null;
      this.modal = false;
    }	
  },
  mounted() {
	let headers = new Headers();
	const username = import.meta.env.VITE_SUPABASE_USER
	const password = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY
	const base64Credentials = btoa(`${username}:${password}`);

	headers.append('Authorization', `Basic ${base64Credentials}`);
	headers.append('Content-Type', 'application/json');

	fetch('https://alhcmnttuuzaspxtifhb.supabase.co/customer/v1/privileged/metrics', {
      method: 'GET',
	  headers: headers
    })
      .then(response => response.text())
      .then(data => {
		this.metricsData = parsePrometheusTextFormat(data)
		this.metricsDataArray = Object.values(this.metricsData)
		this.userCount = getUserCount(this.metricsDataArray)
		this.sqlConnections = getDatabaseConnections(this.metricsDataArray)
		this.uptime = getUptimeOfBackend(this.metricsDataArray)
		this.usedStorage = getUsedStorage(this.metricsData)
		this.cpuTime = getCpuTime(this.metricsData)
	})
      .catch(error => {
        console.error('Error fetching metrics:', error);
      });
	}
}

</script>