<template>
	<main>
		<h1>Home</h1>

		<v-app>
			<v-container fluid class="my-10">
				<v-row>
					<v-col v-for="(item, index) in team" :key="index" cols="12" sm="6" md="4" lg="6">
						<v-hover>
							<template v-slot:default="{ isHovering, props }">
								<v-card v-bind="props" @click="openModal(index)" :color="isHovering ? 'var(--primary)' : undefined" :class="isHovering ? 'scale-out': undefined">
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
	.scale-out {
	transition: transform 0.01s;
	}

	.scale-out:hover {
	transform: scale(1.04);
	}

	.modal-btn {
		background-color: var(--grey-alt);
	}
</style>


<script>

import ChartComponent from '../components/ExampleChart.vue';


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
			}
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
  }
}

</script>