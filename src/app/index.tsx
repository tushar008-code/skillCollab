/** @format */

import routes from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={routes} />
			<ReactQueryDevtools initialIsOpen={false} />
			<Toaster richColors />
		</QueryClientProvider>
	);
}

export default App;
