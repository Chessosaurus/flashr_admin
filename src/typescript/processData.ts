export function getUserCount(data): string {

    for (const obj of data) {
        if (obj.name === 'auth_users_user_count' && obj.metrics.length > 0) {
            return obj.metrics[0].value;
        }
    }

    return 'No value found!';
}

export function getDatabaseConnections(data): string {

    for (const obj of data) {
        if (obj.name === 'db_sql_connection_open' && obj.metrics.length > 0) {
            return obj.metrics[0].value;
        }
    }

    return 'No value found!';
}

export function getUptimeOfBackend(data): string {

    for (const obj of data) {
        if (obj.name === 'runtime_uptime' && obj.metrics.length > 0) {
            let time:number =  obj.metrics[0].value/(1000 * 60 * 60);
            return time.toFixed(2);
        }
    }

    return 'No value found!';
}


export function getUsedStorage(data): number {
    for (const obj of data) {
        if (obj.name === 'storage_storage_size_mb' && obj.metrics.length > 0) {
            let storage:number =  obj.metrics[0].value;
            const truncatedNumber = parseFloat(storage.toString().split('.')[0] + '.' + storage.toString().split('.')[1].slice(0, 2));
            return truncatedNumber;
        }
    }

    return 0;
}

export function getCpuTime(data): string {

    for (const obj of data) {
        if (obj.name === 'process_cpu_seconds_total' && obj.metrics.length > 0) {
            let time:number =  obj.metrics[0].value / 3600;
            return time.toFixed(2);
        }
    }

    return 'No value found!';
}