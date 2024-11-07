import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root} from './route/Root/Root'
import { ErrorPage404 } from './route/ErrorPage404/ErrorPage404'
import { ToDo, loader as todoLoader } from './route/ToDo/ToDo'
import './index.css'
import { Notes, loader as notesLoader } from './route/Notes/Notes'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage404 />,
		children: [
			{
				path: 'Notes',
				element: <Notes />,
				loader: notesLoader,
			},
			{
				path: 'ToDo',
				element: <ToDo />,
				loader: todoLoader,
			},
		],
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)