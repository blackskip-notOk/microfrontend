import { useQuery } from '@tanstack/react-query';
import { keys, serverApi } from '../model';
import ky from 'ky';
import { api } from '../../../constants';

export function useGetServerInfo() {
	const serverInfo = useQuery({
        queryKey: [keys.serverInfo],
        queryFn: () => ky.get(`${api.base}/${serverApi.serverInfo}`).then(response => response.json()).then(data => data)
    });

	return serverInfo;
}
