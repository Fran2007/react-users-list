import UserList from '../components/User/UsersList';

const USERS = [
	{
		username: 'pablo',
		name: 'Pablo Catellano',
		active: true,
		role: 'Other',
	},
	{
		username: 'jose',
		name: 'Jose Miguel Fernández',
		active: true,
		role: 'Teacher',
	},
	{
		username: 'javier',
		name: 'Javier López',
		active: false,
		role: 'Student',
	},
];

const App = () => {
	return <UserList initialUsers={USERS} />;
};

export default App;
