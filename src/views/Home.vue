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
				<h2>User-Map</h2>
				<div>
					<div class="control-section">
						<ejs-maps id='container' :bubbleRendering='bubbleRendering' format='n' :useGroupingSeparator='useGroupingSeparator' :titleSettings='titleSettings' :zoomSettings='zoomSettings'>
							<e-layers>
								<e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :bubbleSettings='bubbleSettings' :shapeSettings='shapeSettings'></e-layer>
							</e-layers>
						</ejs-maps>

						<div id="template" style="display:none">
							<div class="toolback">
								<div class="listing2">
									<span style="text-align: center;">
										${name}
									</span>
								</div>
								<hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">
								<div>
									<span class="listing1">Calls : </span><span class="listing2">${count}</span>
								</div>
							</div>
						</div>

					</div>
				</div>
			</v-container>			
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

	.toolback {
        background: rgba(53, 63, 76, 0.90);
        padding-bottom: 10px;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        width: 165px;
    }
    .listing1 {
        font-size:13px;
        color:#cccccc
    }
    .listing2 {
        font-size:13px;
        color:#ffffff;
        font-weight: 500;
    }

	@media (max-width: 800px) {
		.text-container {
			flex-direction: column; /* Switch to column layout on smaller screens */
		}
	}
</style>


<script>

import parsePrometheusTextFormat from 'parse-prometheus-text-format';
import { getUserCount, getDatabaseConnections, getUptimeOfBackend, getUsedStorage, getCpuTime } from '../typescript/processData';
import { MapsComponent, LayersDirective, LayerDirective, Bubble, MapsTooltip, Zoom } from '@syncfusion/ej2-vue-maps';
import { appUsers } from '../typescript/users-data';
import { worldMap } from '../typescript/world-map';
import { calculateBubbleSizes } from '../typescript/users-data';

export default{
	components: {
    	'ejs-maps': MapsComponent,
    	'e-layers': LayersDirective,
    	'e-layer': LayerDirective
	},
	data(){
		return {
			metricsData:JSON,
			metricsDataArray:null,
			userCount:null,
			sqlConnections:null,
			uptime:null,
			usedStorage:null,
			cpuTime:null,

			useGroupingSeparator: true,
			zoomSettings: {
				enable: true,
				horizontalAlignment: 'Near',
				toolBarOrientation: 'Vertical',
				pinchZooming: true
			},
			titleSettings: {
				text: 'Have a look from where the app is used!',
				textStyle: {
					size: '16px',
					fontFamily: 'Segoe UI'
				}
			},
			shapeDataPath: 'name',
			shapePropertyPath: 'name',
			shapeData: worldMap,
			shapeSettings: {
						fill: '#E5E5E5'
			},
			bubbleSettings: [
				{
							visible: true,
							valuePath: 'bubbleSize',
							colorValuePath: 'color',
							minRadius: 3,
							maxRadius: 70,
							opacity: 0.8,
							dataSource: appUsers,
							tooltipSettings: {
								visible: true,
								valuePath: 'count',
								template: '#template'
							},
						}
			]
		}
	},
	mounted() {
		calculateBubbleSizes(appUsers);

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
	},
	methods:{
		bubbleRendering:function(args){
    		args.radius = (args.data).bubbleSize;
		}
	},
	provide: {
    	maps: [Bubble, MapsTooltip, Zoom]
	},
}

</script>