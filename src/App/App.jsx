import UserList from '../components/User/UsersList';

const USERS = [
	{
		name: 'Pablo Catellano',
		active: true,
		role: 'Teacher',
	},
	{
		name: 'Jose Miguel Fernández',
		active: true,
		role: 'Teacher',
	},
	{
		name: 'Javier López',
		active: false,
		role: 'Student',
	},
];

const App = () => {
	return (
		<UserList users={[]}>
			<h1>Listado de usuario</h1>
		</UserList>
	);
};

export default App;
