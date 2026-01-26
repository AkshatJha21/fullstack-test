import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //         const checkAuth = async () => {
    //             try {
    //                 const token = localStorage.getItem("token");
    //                 if (!token) {
    //                     navigate("/login");
    //                     return;
    //                 }
    //                 await axios.get('http://localhost:3000/api/auth/me', {
    //                     headers: {
    //                         Authorization: `Bearer ${token}`
    //                     }
    //                 });
    //                 navigate("/dashboard");
    //             } catch (error) {
    //                 console.error('Error checking authentication: ', error);
    //             }
    //         }
    //         checkAuth();
    //     }, []);

    const handleClick = () => {
        localStorage.removeItem("token");
        navigate('/login');
    }
  return (
    <div>
      Dashboard
      <button className='bg-black text-white p-2' onClick={handleClick}>
        Logout
      </button>
    </div>
  )
}

export default Dashboard
