import { USER_ROLES } from '../Constants/UserRoles';
import UserList from '../components/User/UsersList';

const USERS = [
	{
		username: 'pablo',
		name: 'Pablo Catellano',
		active: true,
		role: USER_ROLES.OTHER,
	},
	{
		username: 'jose',
		name: 'Jose Miguel Fernández',
		active: true,
		role: USER_ROLES.TEACHER,
	},
	{
		username: 'javier',
		name: 'Javier López',
		active: false,
		role: USER_ROLES.STUDENT,
	},
];

const App = () => {
	return <UserList initialUsers={USERS} />;
};

export default App;
