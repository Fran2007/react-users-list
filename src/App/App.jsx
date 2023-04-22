import UserList from '../components/User/UsersList';

const USERS = [
	{
		id: 0,
		name: 'Pablo Catellano',
		active: true,
		role: 'Teacher',
	},
	{ id: 1, name: 'Jose Miguel Fernández', active: true, role: 'Teacher' },
	{ id: 2, name: 'Javier López', active: false, role: 'Student' },
];

const App = () => {
	return <UserList initialUsers={USERS} />;
};

export default App;
