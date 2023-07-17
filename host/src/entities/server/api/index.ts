import { useQuery } from '@tanstack/react-query';
import ky from 'ky';

import { api } from '../../../global';
import { keys, serverApi } from '../model';

export function useGetServerInfo() {
	const serverInfo = useQuery({
		queryKey: [keys.serverInfo],
		queryFn: () =>
			ky
				.get(`${api.base}/${serverApi.serverInfo}`)
				.then(response => response.json())
				.then(data => data),
	});

	return serverInfo;
}
