<template>
	<main class="insights-page">
		<h1>Insights</h1>

		<v-app  style="background-color: var(--light);">
			<v-container fluid class="my-10">
				<h2>Movie</h2>
				<v-row>
					<v-col v-for="(item, index) in movie" :key="index" cols="12" sm="6" md="4" lg="6">
						<v-hover>
							<template v-slot:default="{ isHovering, props }">
								<v-card v-bind="props" @click="openMovieModal(index)" :color="isHovering ? 'var(--light)' : undefined" :class="isHovering ? 'scale-out': undefined">
								<v-card-title>{{ item.name }}</v-card-title>
								<v-card-text v-if="index===0">						
									<movieFavChart :chart-options="chartOptions"></movieFavChart>
								</v-card-text>
								<v-card-text v-if="index===1">						
									<movieMostLikeChart :chart-options="chartOptions"></movieMostLikeChart>
								</v-card-text>
								<v-card-text v-if="index===2">						
									<movieMostDislikeChart :chart-options="chartOptions"></movieMostDislikeChart>
								</v-card-text>
								<v-card-text>{{ item.role }}</v-card-text>
								</v-card>
							</template>
						</v-hover>
					</v-col>
				</v-row>


				<h2>TV</h2>
				<v-row>
					<v-col v-for="(item, index) in tv" :key="index" cols="12" sm="6" md="4" lg="6">
						<v-hover>
							<template v-slot:default="{ isHovering, props }">
								<v-card v-bind="props" @click="openTvModal(index)" :color="isHovering ? 'var(--light)' : undefined" :class="isHovering ? 'scale-out': undefined">
								<v-card-title>{{ item.name }}</v-card-title>
								<v-card-text v-if="index===0">						
									<tv-fav-chart :chart-options="chartOptions"></tv-fav-chart>
								</v-card-text>
								<v-card-text v-if="index===1">						
									<tvMostLikeChart :chart-options="chartOptions"></tvMostLikeChart>
								</v-card-text>
								<v-card-text v-if="index===2">						
									<tvMostDislikeChart :chart-options="chartOptions"></tvMostDislikeChart>
								</v-card-text>
								<v-card-text>{{ item.role }}</v-card-text>
								</v-card>
							</template>
						</v-hover>
					</v-col>
				</v-row>
			</v-container>



			<v-dialog v-model="tvModal" max-width="500px">
				<v-card>
					<v-card-title v-if="selectedItemId !== null">{{  tv[selectedItemId].name  }}</v-card-title>
						<v-card-text v-if="selectedItemId===0">						
							<tv-fav-chart :chart-options="chartOptions"></tv-fav-chart>
						</v-card-text>
						<v-card-text v-if="selectedItemId===1">						
							<tvMostLikeChart :chart-options="chartOptions"></tvMostLikeChart>
						</v-card-text>
						<v-card-text v-if="selectedItemId===2">						
							<tvMostDislikeChart :chart-options="chartOptions"></tvMostDislikeChart>
						</v-card-text>
					<v-card-actions>
						<v-btn class="modal-btn" @click="closeTvModal">Close</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
			
			<v-dialog v-model="movieModal" max-width="500px">
				<v-card>
					<v-card-title v-if="selectedItemId !== null">{{  movie[selectedItemId].name  }}</v-card-title>
						<v-card-text v-if="selectedItemId===0">						
							<movieFavChart :chart-options="chartOptions"></movieFavChart>
						</v-card-text>
						<v-card-text v-if="selectedItemId===1">						
							<movieMostLikeChart :chart-options="chartOptions"></movieMostLikeChart>
						</v-card-text>
						<v-card-text v-if="selectedItemId===2">						
							<movieMostDislikeChart :chart-options="chartOptions"></movieMostDislikeChart>
						</v-card-text>
					<v-card-actions>
						<v-btn class="modal-btn" @click="closeMovieModal">Close</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>

		</v-app>
	</main>
</template>


<style>
	.insights-page {
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
</style>

<script>
import tvFavChart from '../components/TvCharts/favTvChart.vue';
import tvMostLikeChart from '../components/TvCharts/mostLikedTvChart.vue'
import tvMostDislikeChart from '../components/TvCharts/MostDislikedTvChart.vue';
import movieFavChart from '../components/MovieCharts/favMovieChart.vue';
import movieMostLikeChart from '../components/MovieCharts/mostLikedMovieChart.vue'
import movieMostDislikeChart from '../components/MovieCharts/MostDislikedMovieChart.vue';



export default{

	components: {
		tvFavChart,
		tvMostLikeChart,
		tvMostDislikeChart,
		movieFavChart,
		movieMostLikeChart,
		movieMostDislikeChart
  	},
	data(){
		return {
			dataLoaded: false,
			tv: [
				{name: 'Favorites', role:'Displays the overall favorites.'},
				{name: 'Most liked', role:'Displays the overall most liked tv shows.'},
				{name: 'Most disliked', role:'Displays the overall most disliked tv shows.'},
			],
			movie: [
				{name: 'Favorites', role:'Displays the overall favorites.'},
				{name: 'Most liked', role:'Displays the overall most liked movies.'},
				{name: 'Most disliked', role:'Displays the overall most disliked movies.'},
			],


			movieModal:false,
			tvModal: false,
			selectedItemId: null,
		
			chartOptions: {
				responsive: true,
				scales: {
				y: {
					beginAtZero: true
				}
				}
			},
		}
	},
	methods: {
    openTvModal(index) {
      this.selectedItemId = index;
      this.tvModal = true;
    },
    closeTvModal() {
      this.selectedItemId = null;
      this.tvModal = false;
    },
	openMovieModal(index) {
      this.selectedItemId = index;
      this.movieModal = true;
    },
    closeMovieModal() {
      this.selectedItemId = null;
      this.movieModal = false;
    },
  }
}

</script>