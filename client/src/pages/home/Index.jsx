import Button from "../../components/button";
import { deleteUser } from "../../store/user/actions";

const Home = () => {
   

    return (
        <div className="flex flex-col items-center justify-center text-[2rem] mt-12">
            <div>Home Page</div>
            <div className="flex items-center justify-center top-6">
                
                <Button onClick={() => deleteUser()}>reduxtaki user bilgisini sil</Button>
            </div>
        </div>
    );
};

export default Home;
